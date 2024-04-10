import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from '../interceptors/axios'

const ProtectedRoute = ({ children }) => {
    const userSlice = useSelector(state => state.userSlice)
    const { user } = userSlice

    console.log("protected route", axios.interceptors.request)
    console.log("protected route", axios.interceptors.response)
    console.log("protected route", user)

    // if(!user.data.access_token) {
    //     return <Navigate to='/login' />
    // }
    return children
}

export default ProtectedRoute