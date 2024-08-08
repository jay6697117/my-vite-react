import { useContext, useState } from 'react'
import { type CompProps } from '@/types'
import { Button, Divider } from 'antd'
import style from './index.module.less'
import { type ThemeContextProps, ThemeContext } from '@/context/theme-context'

const Child: React.FC<CompProps> = (props: CompProps) => {
  const { flag, getNumber, children } = props
  const [number, setNumber] = useState<number>(0)
  const { theme } = useContext<ThemeContextProps>(ThemeContext)

  const handleClick = () => {
    const newNumber = number + 10
    setNumber(newNumber)
    getNumber(newNumber)
  }

  return (
    <div style={{ border: '2px dashed purple', padding: '16px' }}>
      <div>我是子组件</div>
      <Divider className={style['divider-style-custom']} />
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>父组件传递的children：{children}</div>
      <Divider className={style['divider-style-custom']} />
      <div className='mb-4'>子组件的number: {number}</div>
      <Button type={theme.buttomType} onClick={handleClick}>
        +10
      </Button>
    </div>
  )
}

export default Child
