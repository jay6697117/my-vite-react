import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <App>
      <h1 className='w-full h-full bg-slate-400 text-[4rem] fixed  flex justify-center items-center'>
        我是入口文件的loading!
      </h1>
    </App>
  </React.StrictMode>
)
