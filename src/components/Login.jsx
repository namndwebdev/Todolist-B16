import { useRef, useState } from "react"
import axios from 'axios'

export default function Login(){
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [taikhoan, setTaikhoan] = useState({})

    function dangnhap(){
        let username = usernameRef.current.value
        let password = passwordRef.current.value

        axios({
            url: 'https://backoffice.nodemy.vn/api/auth/local',
            method: 'POST',
            data: {
                "identifier": username,
                "password": password
            }
        }).then(function(res){
            setTaikhoan(res.data.user)
            localStorage.setItem('token', res.data.jwt)
        }).catch(function(err){
            alert('Dang nhap that bai')
        })
    }

    function getInfo(){
        let data = '';

        let config = {
        method: 'get',
        url: 'https://backoffice.nodemy.vn/api/users/me?populate=role',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
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

    return (<>
        <h1>Xin chao tai khoan: {taikhoan?.email}</h1>

        Username : <input type="text" ref={usernameRef}/>
        <br />
        Password: <input type="password" ref={passwordRef}/>
        <br />
        <button onClick={dangnhap}>Dang nhap</button>

        <button onClick={getInfo}>Call API Profile</button>
    </>)
}