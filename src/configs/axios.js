import axios from 'axios'
import {store} from '../redux/store'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL + '/api'
axios.defaults.headers['Content-Type'] = 'application/json'

axios.interceptors.request.use((config)=>{
    const stateTong = store.getState()
    const token = stateTong.auth.token

    if(config.url === '/auth/local'){
        return config
    }

    config.headers.authorization = `Bearer ${token}`
  

    return config
},  (error)=>{

    return Promise.reject(error);
})
