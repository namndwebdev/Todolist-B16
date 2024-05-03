import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/Login'
import Blog from './components/Blog'
import BaseLayout from './components/BaseLayout'
import TaskDetail from './components/TaskDetail'
import { createBrowserRouter, Outlet, RouterProvider, Link } from 'react-router-dom' 

const routerNodemy = createBrowserRouter([
  {
    path: '/', 
    element: <BaseLayout/>,
    children: [{
      path: '/', element: <App/>
    },{
      path: 'login', element: <Login/>
    },{
      path: 'blogs/:tenBaiViet/:tacgia', element: <Blog/>
    }, {
      path: 'tasks/:id',
      element: <TaskDetail/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerNodemy}/>
  </React.StrictMode>,
)
