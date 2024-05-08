import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

export default function BaseLayout(){
    const tien = useSelector(stateTong => stateTong.money.giatri)
    return <>
        <div style={{display : 'flex', justifyContent:'space-around'}}>
        <h1>HEADER {tien} </h1>
        <Link to="/">Trang chu</Link>
        <Link to="/login">Dang nhap</Link>
        <Link to="/blogs/js/nodemy">Bai JS</Link>
        </div>
        <Outlet/>
        <h1>Footer</h1>
    </>
}