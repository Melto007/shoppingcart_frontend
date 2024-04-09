import { instance } from '../interceptors/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import { useSelector } from 'react-redux'

const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const userSlice = useSelector(state => state.userSlice)
    const { user } = userSlice

    useEffect(() => {

        const requestIntercept = instance.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${user?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = instance.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return instance(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            instance.interceptors.request.eject(requestIntercept);
            instance.interceptors.response.eject(responseIntercept);
        }
    }, [user, refresh])

    return instance;
}

export default useAxiosPrivate;