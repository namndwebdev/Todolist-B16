import { Pagination } from "antd";

export default function PagingCom(){
    return (
        <>
            <Pagination total={500} pageSize={50}></Pagination>
        </>
    )
}