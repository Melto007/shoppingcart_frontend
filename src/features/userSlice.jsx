import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    issuccess: false,
    isloading: false,
    user: null,
    isAuthenticated: false,
    iserror: false
}

export const loginUser = createAsyncThunk(
    "loginUser",
    async(datas, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                'login/',
                datas
            )

            console.log(data.data.access_token)

            if(data.status === 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.access_token}`
                return data
            }

            if(data.status === 404) {
                return rejectWithValue(data)
            }
        } catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

export const refreshToken = createAsyncThunk(
    "refreshToken",
    async(data, { rejectWithValue }) => {
        try {
            if(data.status === 200) {
                return data
            }

            if(data.status === 404) {
                return rejectWithValue(data)
            }
        } catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.isAuthenticated = true
            state.user = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isloading = false
            state.iserror = true
            state.user = action.payload
        })
        builder.addCase(refreshToken.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(refreshToken.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.isAuthenticated = true
            state.user = action.payload
        })
        builder.addCase(refreshToken.rejected, (state, action) => {
            state.isloading = false
            state.iserror = true
            state.user = action.payload
        })
    }
})

export default userSlice.reducer