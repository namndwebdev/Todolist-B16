import { useEffect, useRef, useState } from 'react'
import Child from './Child'
import axios from 'axios'
import Login from './components/Login'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
export default function App(){
    const [tasks, setTasks] = useState([])
    const nav = useNavigate()
    const [showError, setShowError] = useState(false)
    useEffect(()=>{
        let config = {
            method: 'get',
            url: '/tasks?populate=*&pagination[pageSize]=10&pagination[page]=1&sort[0]=createdAt:desc',
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
        if(inputRef.current.value){
            let data = JSON.stringify({
                "data": {
                  "title": inputRef.current.value
                }
              });
              
              let config = {
                method: 'post',
                url: '/tasks',
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
        }else{
            // khong co gia tri
            setShowError(true)
            setTimeout(()=>{
                setShowError(false)
            }, 2000)
        }
    }
    
    function xoa(idTask){
        var newTasks = tasks.filter(item => {
            return item.id != idTask
        })

        setTasks([...newTasks])
    }

    function sua(idTask, titleTask){
        var taskSearch = tasks.find(item=> {
            return item.id == idTask
        });

        taskSearch.attributes.title = titleTask

        setTasks([...tasks])
    }

    return (<>
        <div className="container">
            <div className='content'>
                <input type="text" ref={inputRef}/>
                {showError ? <p>Input phai co gia tri</p> : null}
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