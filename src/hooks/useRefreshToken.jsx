import axios from '../interceptors/axios'
import { useDispatch } from 'react-redux'
import { refreshToken } from '../features/userSlice'

const useRefreshToken = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        const { data } = await axios.post(
            'refresh/',
            {
                withCredentials: true
            }
        )
        console.log("access", data)
        if(data.status === 200) {
            dispatch(refreshToken(data))
        }
        return data.access_token
    }
    return refresh
}

export default useRefreshToken