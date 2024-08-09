import React from 'react'
import { type CompProps } from '@/types'
import '@/styles/App.less'
import Hoc from '@/components/Hoc'

const App: React.FC<CompProps> = () => {
  return <Hoc a={false} b={2} c={'3'} d={[1, 2, 3]} />
}

export default App
