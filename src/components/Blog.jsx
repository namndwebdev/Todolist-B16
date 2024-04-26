import { useParams, useSearchParams } from "react-router-dom"

export default function Blog(){
    const params = useParams()
    const [query, setQuery] = useSearchParams()

    return (<>
        <h1>Xin chao cac ban den voi Bai</h1>
        <h2>{params.tenBaiViet}</h2>
        <h2>{params.tacgia}</h2>
        {query.get('num1')}
        {query.get('num2')}
        {query.get('num3')}
        
        {query.get('count')}
        {query.get('color')}
        <button onClick={()=>{
            setQuery({
                count: 100,
                color: 'red'
            })
        }}>Change Query</button>
    </>)
}