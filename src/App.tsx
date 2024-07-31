import React, { useState, useEffect, useRef, useContext } from 'react'
import './App.css'

type Props = {
  [x: string]: any
  children?: React.ReactElement
}

const UserNameContext = React.createContext('')

const FancyButton: React.FC<Props> = React.forwardRef((props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  console.log('%c挂载 ref 11:', 'color: purple; font-size: 16px;', ref)
  useEffect(() => {
    // 执行一些只需要在组件挂载时运行一次的操作
    console.log('%c挂载 ref 22:', 'color: purple; font-size: 16px;', ref)
    return () => {
      // 这里是清理函数，如果需要的话，它会在组件卸载时执行
      console.log('%c卸载 ref 33:', 'color: red; font-size: 16px;', ref)
    }
  }, [ref]) // 空依赖数组确保效果只运行一次
  const handleClick = () => {
    alert('click')
  }
  return (
    <button ref={ref} className='fancy-button' onClick={handleClick}>
      {props.children}
    </button>
  )
})

const App: React.FC<Props> = (props: Props) => {
  console.log('props', props)
  const domRef = useRef(null)
  const ref1 = React.createRef()
  console.log('立刻 domRef 1:', domRef)

  const [username, setUsername] = useState('张三')

  setTimeout(() => {
    setUsername('李四')
  }, 2000)

  useEffect(() => {
    // 执行一些只需要在组件挂载时运行一次的操作
    console.log('挂载 domRef 2:', domRef)
    return () => {
      // 这里是清理函数，如果需要的话，它会在组件卸载时执行
      console.log('卸载 domRef 3:', domRef)
    }
  }, []) // 空依赖数组确保效果只运行一次

  // ref 不可以设置到组件上，只能设置到元素上
  return (
    <UserNameContext.Provider value={username}>
      <div className='app'>
        <div ref={domRef} className='h-[10rem] bg-blue-400'>
          {props.children}
        </div>
        <FancyButton ref={ref1}>
          <span>Click me!</span>
        </FancyButton>
        <br />
        <hr />
        <br />
        <Layout />
      </div>
    </UserNameContext.Provider>
  )
}

const Layout = () => {
  return (
    <div className='bg-red-300 p-8'>
      <h1>Layout组件</h1>
      <hr />
      <User />
    </div>
  )
}

const User = () => {
  const username = useContext(UserNameContext)
  return <h1>User组件:{username}</h1>
}

export default App
