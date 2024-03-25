import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route ,RouterProvider} from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Route>
    
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>

  </React.StrictMode>,
)
