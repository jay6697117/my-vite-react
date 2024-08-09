import React from 'react'
import { type CompProps } from '@/types'
import '@/styles/App.less'
// import Hoc from '@/components/Hoc'
import Funnel from '@/components/Funnel'

const App: React.FC<CompProps> = () => {
  // return <Hoc a={false} b={2} c={'3'} d={[1, 2, 3]} />
  return <Funnel style={{ width: '2rem', height: '2rem', color: 'red' }} number={42} />
}

export default App
