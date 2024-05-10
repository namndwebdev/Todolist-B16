import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user'))
    },
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state, action)=>{
            state.user = {}
            localStorage.clear()
        }
    }
})

export const { setUser, logout } = slice.actions

export default slice.reducer