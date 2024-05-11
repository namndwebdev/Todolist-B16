import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Child(props){
    const inputref = useRef(null)
    const nav = useNavigate()
    function updateTask(){
        let data = JSON.stringify({
            "data": {
              "title": inputref.current.value,
            }
          });
          
          let config = {
            method: 'put',
            url: `/tasks/${props.id}`,
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            props.sua(props.id, inputref.current.value)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    function deleteTask(){
        let config = {
            method: 'delete',
            url: `/tasks/${props.id}`,
          };
          
          axios.request(config)
          .then((response) => {
            props.xoa(props.id)
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (<>
        <h1> 
            {props.name} <input type="text" ref={inputref}/>
            <button
                onClick={updateTask}
            >Update</button>

            <button onClick={deleteTask}>Xoa</button>
            <button onClick={()=>{
                nav(`/tasks/${props.id}`)
            }}>Xem chi tiet</button>
        </h1>
    </>)
}