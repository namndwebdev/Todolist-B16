import {AutoComplete} from 'antd'
import { useState } from 'react'

export default function AutoCompleteCom(){
    const dataGoc = [{
        value: 'A'
    }, {
        value: 'B'
    }, {
        value: 'C'
    }]
    const [option, setOption] = useState(dataGoc)

    return (<>
         <AutoComplete
        options={option}
        style={{
          width: 200,
        }}
        onSearch={(value)=>{
            let listOp = dataGoc.filter(item=>{
                return item.value == value
            })
            setOption(listOp)
        }}
        placeholder="input here"
        />
    </>)
}