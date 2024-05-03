import { useEffect, useRef, useState } from 'react'
import Child from './Child'
import axios from 'axios'
import Login from './components/Login'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
export default function App(){
    const [tasks, setTasks] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        let config = {
            method: 'get',
            url: 'https://backoffice.nodemy.vn/api/tasks?populate=*&pagination[pageSize]=10&pagination[page]=1&sort[0]=createdAt:desc',
            headers: { }
        };
        
        axios.request(config)
        .then((response) => {
            let data = response.data
            let arr = data.data
            
            console.log(arr);
            setTasks(arr)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])


    const inputRef = useRef(null)
    function add(){
        let data = JSON.stringify({
            "data": {
              "title": inputRef.current.value
            }
          });
          
          let config = {
            method: 'post',
            url: 'https://backoffice.nodemy.vn/api/tasks',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log('ban da them thanh cong');
            let objectMoiThem = response.data.data
            tasks.unshift(objectMoiThem)
            setTasks([...tasks])
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
    function xoa(giaTriMuonXoa){
        var newData = data.filter(item=>{
            return item != giaTriMuonXoa
        })

        setData([...newData])
    }

    function sua(timkiem, giatriMoi){
        var vitri = data.indexOf(timkiem)
        
        data[vitri] = giatriMoi
        setData([...data])
    }

    return (<>
        <div className="container">
            <div className='content'>
                <input type="text" ref={inputRef}/>
                <button onClick={add}>Them</button>

                {tasks.map(item=>{
                    return <Child 
                        key={item?.id}
                        id={item?.id}
                        name={item?.attributes?.title}
                        xoa={xoa}
                        sua={sua}
                        />
                })}
            </div>
        </div>
    </>)
}