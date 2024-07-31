import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  // <App />
  <App>
    <h1 className='w-[30rem] h-[6rem] bg-slate-400 text-[4rem] fixed top-[1rem] right-[1rem] flex justify-center items-center'>
      入口文件loading!
    </h1>
  </App>
)
