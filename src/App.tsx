import React, { useState, useEffect } from 'react'
import Parent from '@/components/Parent'
import { Spin } from 'antd'
import { type CompProps } from '@/types'
import '@/styles/App.less'

// App组件
const App: React.FC<CompProps> = () => {
  // 定义一个状态变量loading，用于控制Spin组件的显示
  const [loading, setLoading] = useState(true)
  // 使用useEffect钩子在组件挂载后设置一个定时器
  useEffect(() => {
    // 设置一个定时器，3秒后将loading状态设置为false
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // 清除定时器
    return () => {
      return clearTimeout(timer)
    }
  }, []) // 空依赖数组，表示只在组件挂载和卸载时执行

  return (
    <div className='app'>
      {loading ? (
        <div className='spin-container'>
          <Spin size='large' />
        </div>
      ) : (
        <Parent />
      )}
    </div>
  )
}

export default App
