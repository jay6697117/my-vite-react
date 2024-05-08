import { useState } from 'react'

interface Props {
  onSubmit: (param: any) => void
}

const Form = ({ onSubmit }: Props) => {
  const [data, setData] = useState('hello')
  setTimeout(() => {
    setData('hello-666')
  }, 3000)

  const submitFn = (): void => {
    console.log('子组件data: ', data)
    onSubmit(data)
  }
  return (
    <div>
      {/* 表单元素 */}
      <button onClick={submitFn}>提交</button>
    </div>
  )
}

export default Form
