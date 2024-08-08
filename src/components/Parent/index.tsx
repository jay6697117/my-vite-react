import { useState, useContext } from 'react'
import { Button } from 'antd'
import Child from '@/components/Child'
import { type ThemeContextProps, ThemeContext } from '@/context/theme-context'

const Parent: React.FC<any> = () => {
  const [flag, setFlag] = useState<boolean>(true)
  const [number, setNumber] = useState<number>(0)
  const { theme } = useContext<ThemeContextProps>(ThemeContext)

  const handleChangeFlag = () => setFlag(v => !v)
  const handleGetNumber = (v: number) => {
    setNumber(v)
  }
  return (
    <div style={{ ...theme, height: 'calc(100% - 71px)', overflowY: 'auto' }}>
      <div className='mb-2'>我是父组件</div>
      <Button type={theme.buttomType} onClick={handleChangeFlag} className='mb-2'>
        切换状态:{JSON.stringify(flag)}
      </Button>
      <div className='mb-2'>父组件的number: {number}</div>
      <Child flag={flag} getNumber={handleGetNumber}>
        大家好，我是小杜杜，一起玩转Hooks吧！
      </Child>
    </div>
  )
}

export default Parent
