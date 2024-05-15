import {Form, Input, Button} from 'antd'

export default function FormCom(){
    const [form] = Form.useForm()

    form.setFieldValue("username", "Aaaaaaaaaaaaaaa")

    return (
        <>
            <Form
                form={form}
                onFinish={(values)=>{
                    console.log(values);
                }}
            >
                <Form.Item
                    label={"Ten dang nhap"}
                    name={"username"}
                    rules={[
                        {required: true, message: 'Bat buoc phai nhap'},
                        {min: 6, message: 'Phai toi thieu 6 ky tu'},
                      
                        ({})=> ({
                            validator(aaaaa, value){
                                if(value.length <= 10){
                                    return Promise.resolve()
                                }else{
                                    return Promise.reject("Khogn duoc qua 10 kis ty")
                                }
                                
                            }   
                        })
                    ]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label={"Mat khau"}
                    name={"password"}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label={"Nhap lai MK"}
                    name={"repassword"}
                    rules={[
                        ({getFieldValue})=>({
                            validator(_, value){
                                var password = getFieldValue('password')
                                if(password == value){
                                    return Promise.resolve()
                                }else{
                                    return Promise.reject("RE password phai giong password")
                                }
                            }
                        })

                    ]}
                >
                    <Input></Input>
                </Form.Item>

                <Button htmlType="submit">Gui form</Button>
            </Form>
        </>
    )
}