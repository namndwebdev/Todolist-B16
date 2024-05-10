import { useRef, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { tang, vemore } from '../redux/moneySlice'
import { setUser } from "../redux/authSlice"
export default function Login(){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [taikhoan, setTaikhoan] = useState({})
    const nav = useNavigate()
    const dispatch = useDispatch()

    function dangnhap(){
        let username = usernameRef.current.value
        let password = passwordRef.current.value

        axios({
            url: '/auth/local',
            method: 'POST',
            data: {
                "identifier": username,
                "password": password
            }
        }).then(function(res){
            setTaikhoan(res.data.user)
            localStorage.setItem('token', res.data.jwt)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            dispatch(setUser(res.data.user))
            nav('/')
        }).catch(function(err){
            alert('Dang nhap that bai')
        })
    }

    function getInfo(){
        let data = '';

        let config = {
        method: 'get',
        url: '/users/me?populate=role',
        data : data
        };

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });
    }

    function tangTien(){
        dispatch( tang(3) )
    }
    function resetTien(){
        dispatch( vemore() )
    }
    return (<>
        <h1>Xin chao tai khoan: {taikhoan?.email}</h1>

        Username : <input type="text" ref={usernameRef}/>
        <br />
        Password: <input type="password" ref={passwordRef}/>
        <br />
        <button onClick={dangnhap}>Dang nhap</button>

        <button onClick={getInfo}>Call API Profile</button>

        <button onClick={tangTien}>Ban gia tri</button>
        <button onClick={resetTien}>Reset</button>
    </>)
}