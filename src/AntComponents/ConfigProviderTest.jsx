import { useState } from "react";
import { 
    ConfigProvider,
    Button
} from "antd";

export default function Test(){
    const [theme, setTheme] = useState(true)
    const lightTheme = {
        token: {
            // Seed Token
            colorPrimary: '#00b96b',
            borderRadius: 2,
    
            // Alias Token
            colorBgContainer: '#f6ffed',
          },
    }

    const darkTheme = {
        token: {
            // Seed Token
            colorPrimary: '#00b96b',
            borderRadius: 2,
    
            // Alias Token
            colorBgContainer: '#f6ffed',
          },
    }
    
    function changeTheme(){
        setTheme(!theme)
    }
    return (
        <>
            <ConfigProvider
                theme={theme ? lightTheme : darkTheme}
            >
                <Button onClick={changeTheme}>Click here</Button>
                <Button onClick={changeTheme}>Click here</Button>
                <Button onClick={changeTheme}>Click here</Button>
                <Button onClick={changeTheme}>Click here</Button>
                <Button onClick={changeTheme}>Click here</Button>
            </ConfigProvider>
        </>
    )
}