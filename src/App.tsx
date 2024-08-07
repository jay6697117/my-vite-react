import { useState } from 'react'
import { Button } from 'antd'
import { type CustomCompProps } from './types'
import './App.less'


// Index组件
const Index: React.FC<any> = () => {
  const [flag, setFlag] = useState<boolean>(true)

  return (
    <>
      <div>我是父组件</div>
      <Button className='my-2' type='primary' onClick={() => setFlag(v => !v)}>
        切换状态
      </Button>
      <Child flag={flag}>大家好，我是小杜杜，一起玩转Hooks吧！</Child>
    </>
  )
}

// Child组件
const Child: React.FC<any> = props => {
  const { flag, children } = props
  return (
    <div className='bg-purple-300 p-4 rounded-xl border-4 border-gray-400 border-solid'>
      <div className='p-2'>我是子组件:</div>
      <div className='bg-blue-800 text-white p-2'>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div className='p-2'>父组件传递的children：{children}</div>
    </div>
  )
}

// App组件
const App: React.FC<CustomCompProps> = (props: CustomCompProps) => {
  return (
    <div className='app'>
      <h1>{JSON.stringify(props.info)}</h1>
      <Index />
    </div>
  )
}

export default App
