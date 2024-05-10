import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from './moneySlice'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    auth: authSlice
  },
})