import { useRef, useState } from 'react'
import Child from './Child'

export default function App(){
    const [data, setData] = useState([])
    const inputRef = useRef(null)
    function add(){
        data.push(inputRef.current.value)
        setData([...data])
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
        <input type="text" ref={inputRef}/>
        <button onClick={add}>Them</button>

        {data.map(item=>{
            return <Child 
                key={Math.random()}
                name={item}
                xoa={xoa}
                sua={sua}
                />
        })}
    </>)
}