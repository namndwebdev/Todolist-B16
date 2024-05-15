import { Menu } from "antd"
import {MailOutlined} from '@ant-design/icons'
export default function MenuCom(){

    const items = [{
        label: 'Home',
        key: 'home',
        icon: <MailOutlined />,
      },{
        label: 'Logout',
        key: 'logout',
        icon: '>',
        children: [{
            label: 'Logout 1',
            key: 'logout1',
            icon: '>',
        },{
            label: 'Logout 2',
            key: 'logout2',
            icon: '>',
        }]
      }]

    return (
        <>
            <Menu mode="inline" items={items} />
        </>
    )
}