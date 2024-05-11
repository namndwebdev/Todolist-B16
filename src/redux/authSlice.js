import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        token: ''
    },
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logout: (state, action)=>{
            state.user = {}
        }
    }
})

export const { setUser, logout } = slice.actions

export default slice.reducer