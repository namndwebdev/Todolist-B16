import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './components/Login'
import Blog from './components/Blog'
import BaseLayout from './components/BaseLayout'
import TaskDetail from './components/TaskDetail'
import { createBrowserRouter, Outlet, RouterProvider, Link } from 'react-router-dom' 
import PrivateRouter from './components/PrivateRouter'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './configs/axios'
import Test from './Test'
import './test.css'
const routerNodemy = createBrowserRouter([
  {
    path: '/', 
    element: <BaseLayout/>,
    children: [{
      path: '/', element: <PrivateRouter>
        <App/>
      </PrivateRouter>
    },{
      path: 'login', element: <Login/>
    },{
      path: 'blogs/:tenBaiViet/:tacgia', element: <Blog/>
    }, {
      path: 'tasks/:id',
      element: <PrivateRouter>
        <TaskDetail/>
      </PrivateRouter>
    }]
  }
])

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test/>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routerNodemy}/>
      </PersistGate>
    </Provider> */}
  </React.StrictMode>,
)
