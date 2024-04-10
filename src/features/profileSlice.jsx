import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    issuccess: false,
    isloading: false,
    iserror: false,
    profile: null
}

export const getProfile = createAsyncThunk(
    "getProfile",
    async(args, {rejectWithValue}) => {
        try {
            const { data } = await axios.get(
                `profile/`
            )

            if(data.status === 200) {
                return data
            }

            if(data.status === 404) {
                return rejectWithValue(data)
            }
        }catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.profile = action.payload
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
    }
})

export default profileSlice.reducer