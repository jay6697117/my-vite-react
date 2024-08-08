// 导入必要的依赖
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/styles/index.less'

const handleClick = () => {
  alert('点我干嘛')
}
// 创建根元素并渲染App组件
createRoot(document.getElementById('root')!).render(
  <App info={{ a: 1, b: 2 }}>
    <button onClick={handleClick} className='bg-purple-400'>测试App的children</button>
  </App>
)
