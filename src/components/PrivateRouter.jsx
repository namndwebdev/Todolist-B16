import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function PrivateRouter(props){
    const user = useSelector(state=> state.auth.user)
    const token = useSelector(state=> state.auth.token)

    if(token && user && !user.blocked){
        // da dang nhap
        return props.children
    }else{
        // chua dang nhap

        return <Navigate to='/login' />
    }
    
}