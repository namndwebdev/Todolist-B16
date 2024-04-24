import { useRef } from "react"

export default function Child(props){
    const inputref = useRef(null)
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
        </h1>
    </>)
}