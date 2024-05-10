import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
export default function TaskDetail(){
    const params = useParams()
    const [task, setTask] = useState({})
    const nav = useNavigate()
    useEffect(()=>{
        let config = {
            method: 'get',
            url: `/tasks/${params.id}?populate=*`,
          };
          
          axios.request(config)
          .then((response) => {
            setTask(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });
    }, [])

    const handleChange = (e)=>{
      const key = e.target.getAttribute('name')
      task.attributes[key] = e.target.value
      setTask({...task})
    }

    const update = ()=>{
      let data = JSON.stringify({
        "data": task.attributes
      });
      
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `/tasks/${params.id}`,
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        alert('Update Thanh cong')
      })
      .catch((error) => {
        alert('Update That bai')
      });
    }

    function deleteTask(){
      let config = {
        method: 'delete',
        url: `/tasks/${params.id}`,
      };

      axios.request(config)
      .then((response) => {
        nav('/')
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return (<>
        <h1>Chi tiet Task {task?.id}</h1>
        <h2>Task : {task?.attributes?.title}</h2> <input name="title" type="text" value={task?.attributes?.title} onChange={handleChange}/>
        <h2>Hoan thanh: {task?.attributes?.complete + ""}</h2> <input name="complete" type="text" value={task?.attributes?.complete} onChange={handleChange}/>
        <h2>Deadline: {task?.attributes?.date}</h2> <input name="date" type="text" value={task?.attributes?.date} onChange={handleChange}/>
        <button onClick={update}>Sửa</button>
        <button onClick={deleteTask}>Xoá</button>
    </>)
}