import React, { useState, useEffect } from 'react'
import Parent from '@/components/Parent'
import { Spin } from 'antd'
import { type CompProps } from '@/types'
import '@/styles/App.less'
import { ThemeProvider } from '@/context/theme-context'

// App组件
const App: React.FC<CompProps> = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
      <ThemeProvider>
        {loading ? (
          <div className='spin-container'>
            <Spin size='large' />
          </div>
        ) : (
          <Parent />
        )}
      </ThemeProvider>
    </div>
  )
}

export default App
