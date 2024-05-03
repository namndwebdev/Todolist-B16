import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
export default function TaskDetail(){
    const params = useParams()
    const [task, setTask] = useState({})

    useEffect(()=>{
        let config = {
            method: 'get',
            url: `https://backoffice.nodemy.vn/api/tasks/${params.id}?populate=*`,
          };
          
          axios.request(config)
          .then((response) => {
            setTask(response.data.data)
          })
          .catch((error) => {
            console.log(error);
          });
    }, [])

    return (<>
        <h1>Chi tiet Task {task?.id}</h1>
        <h2>Task : {task?.attributes?.title}</h2>
        <h2>Hoan thanh: {task?.attributes?.complete + ""}</h2>
        <h2>Deadline: {task?.attributes?.date}</h2>
    </>)
}