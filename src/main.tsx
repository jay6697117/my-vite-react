import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  // <App />
  <App>
    <div className='px-6 py-1 bg-purple-600 text-[2rem] fixed top-[1rem] right-[1rem] flex justify-center items-center rounded-full'>
      入口文件loading!
    </div>
  </App>
)
