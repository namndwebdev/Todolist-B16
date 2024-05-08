import { createSlice } from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: 'money',
    initialState: {
        giatri: 0
    },
    reducers: {
        tang: (state, action)=>{
            // action {type:     payload}
            state.giatri += action.payload
        },
        giam: (state, action)=>{
            state.giatri -= action.payload
        },
        nhandoi: (state)=>{
            state.giatri *= 2
        },
        vemore: (state)=>{
            state.giatri = 0
        }
    }
})

export const { tang, giam, nhandoi, vemore } = moneySlice.actions

export default moneySlice.reducer