import { useContext, useState } from 'react'
import { type CompProps } from '@/types'
import { Button, Divider } from 'antd'
import style from './index.module.less'
import { ThemeContext } from '@/theme-context'
console.log('ThemeContext :>> ', ThemeContext)

const Child: React.FC<CompProps> = (props: CompProps) => {
  const { flag, getNumber, children } = props
  const [number, setNumber] = useState<number>(0)
  // const { theme, setTheme } = useContext(ThemeContext)
  // console.log('theme :>> ', theme)
  // console.log('setTheme :>> ', setTheme)
  const handleClick = () => {
    const newNumber = number + 10
    setNumber(newNumber)
    getNumber(newNumber)
  }
  return (
    <div style={{ border: '1px solid #000', padding: 20, background: flag ? 'skyblue' : 'lightgreen' }}>
      <div>我是子组件</div>
      <Divider className={style['divider-style-custom']} />
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>父组件传递的children：{children}</div>
      <Divider className={style['divider-style-custom']} />
      <div className='mb-4'>子组件的number: {number}</div>
      <Button type='primary' onClick={handleClick}>
        +10
      </Button>
    </div>
  )
}

export default Child
