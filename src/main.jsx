import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/Login'
import Blog from './components/Blog'
import { createBrowserRouter, Outlet, RouterProvider, Link } from 'react-router-dom' 

const routerNodemy = createBrowserRouter([
  {
    path: '/', 
    element: <>
      <div style={{display : 'flex', justifyContent:'space-around'}}>
        <h1>HEADER</h1>
        <Link to="/">Trang chu</Link>
        <Link to="/login">Dang nhap</Link>
        <Link to="/blogs/js/nodemy">Bai JS</Link>
      </div>
      <Outlet/>
      <h1>Footer</h1>
    </>,
    children: [{
      path: '/', element: <App/>
    },{
      path: 'login', element: <Login/>
    },{
      path: 'blogs/:tenBaiViet/:tacgia', element: <Blog/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerNodemy}/>
  </React.StrictMode>,
)
