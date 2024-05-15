import { Steps } from "antd";

export default function StepCom(){
    const items = [{
        title: 'buoc 1', description: 'Hello 1'
    },
    {
        title: 'buoc 2', description: 'Hello 1'
    },
    {
        title: 'buoc 3', description: 'Hello 1'
    },
    {
        title: 'buoc 4', description: 'Hello 1'
    },
    {
        title: 'buoc 5', description: 'Hello 1'
    }]

    return (
        <>
            <Steps
                current={3}
                items={items}
                direction="vertical"
                progressDot
            ></Steps>
        </>
    )
}