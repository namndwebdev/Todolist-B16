import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import {logout} from '../redux/authSlice'
export default function BaseLayout(){
    const tien = useSelector(stateTong => stateTong.money.giatri)
    const user = useSelector(stateTong => stateTong.auth.user)
    const nav = useNavigate()
    const dispatch = useDispatch()
    return <>
        <div style={{display : 'flex', justifyContent:'space-around'}}>
        <h1>HEADER {user?.username} </h1>
        <Link to="/">Trang chu</Link>
        <Link to="/login">Dang nhap</Link>
        <Link to="/blogs/js/nodemy">Bai JS</Link>
        <Link to="#" onClick={()=>{
            dispatch(logout())
            nav('/login')
        }}>Dang xuat</Link>
        </div>
        <Outlet/>
        <h1>Footer</h1>
    </>
}