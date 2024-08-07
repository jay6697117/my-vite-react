// 导入必要的依赖
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/styles/index.less'

// 创建根元素并渲染App组件
createRoot(document.getElementById('root')!).render(
  <App info={{ a: 1, b: 2 }}>
    <h1>aaaa</h1>
  </App>
)
// createRoot(document.getElementById('root')!).render(<App  />)
