import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Child(props){
    const inputref = useRef(null)
    const nav = useNavigate()
    return (<>
        <h1> 
            {props.name} <input type="text" ref={inputref}/>
            <button
            onClick={  ()=>{

                props.sua(props.name, inputref.current.value) 


            }  }
            
            
            >Update</button>

            <button onClick={()=>{
                props.xoa(props.name)
            }}>Xoa</button>
            <button onClick={()=>{
                nav(`/tasks/${props.id}`)
            }}>Xem chi tiet</button>
        </h1>
    </>)
}