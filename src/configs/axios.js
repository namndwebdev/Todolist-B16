import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL + '/api'
axios.defaults.headers['Content-Type'] = 'application/json'

axios.interceptors.request.use((config)=>{

    if(config.url === '/auth/local'){
        return config
    }

    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  

    return config
},  (error)=>{

    return Promise.reject(error);
})
