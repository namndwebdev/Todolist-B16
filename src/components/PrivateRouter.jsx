import { Navigate } from "react-router-dom"

export default function PrivateRouter(props){
    let token = localStorage.getItem('token')
    let userTxt = localStorage.getItem('user')
    let user = JSON.parse(userTxt)
    
    if(token && !user.blocked){
        // da dang nhap
        return props.children
    }else{
        // chua dang nhap

        return <Navigate to='/login' />
    }
    
}