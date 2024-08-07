import { useState } from 'react'
import { Button } from 'antd'
import Child from '@/components/Child'

const Parent: React.FC<any> = () => {
  const [flag, setFlag] = useState<boolean>(true)
  const [number, setNumber] = useState<number>(0)

  const handleChangeFlag = () => setFlag(v => !v)
  const handleGetNumber = (v: number) => {
    setNumber(v)
  }
  return (
    <>
      <div>我是父组件</div>
      <Button type='primary' onClick={handleChangeFlag} className='my-2'>
        切换状态
      </Button>
      <div>父组件的number: {number}</div>
      <Child flag={flag} getNumber={handleGetNumber}>大家好，我是小杜杜，一起玩转Hooks吧！</Child>
    </>
  )
}

export default Parent
