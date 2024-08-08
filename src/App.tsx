import React from 'react';
import Parent from '@/components/Parent'
import { Divider } from 'antd'
import { type CompProps } from '@/types'
import '@/styles/App.less'

// App组件
const App: React.FC<CompProps> = (props: CompProps) => {
  const { info, children } = props
  return (
    <div className='app'>
      <h1>info: {JSON.stringify(info)}</h1>
      {children}
      <Divider style={{ background: 'red' }} />
      <Parent />
    </div>
  )
}

export default App
