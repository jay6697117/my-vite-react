import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
// import 'antd/dist/antd.less';

createRoot(document.getElementById('root')!).render(
  <App info={{a:1,b:2}} />
)
