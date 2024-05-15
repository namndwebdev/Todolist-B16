import { Anchor } from "antd"

export default function AnchorCom(){
    const list = [{
        key: '1',
        href: '#idA',
        title: 'Muc A'
    },{
        key: '2',
        href: '#idB',
        title: 'Muc B'
    },{
        key: '3',
        href: '#idC',
        title: 'Muc C'
    }]

    return (<>
        <Anchor
            items={list}
        />
        <div id="idA">
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
           <p> AAA </p>
        </div>
        <div id="idB">
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
            <p>BBB</p>
        </div>
        <div id="idC">
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
            <p>CCCCCC</p>
        </div>
    </>)
}