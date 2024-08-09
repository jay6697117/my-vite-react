import { type CompProps } from '@/types'

// 定义一个高阶组件函数
const Hoc = (Component: React.FC<CompProps>) => {
  //返回一个函数组件
  return (props: CompProps) => {
    return <Component name={'大家好，我是小杜杜，一起玩转Hooks吧！'} {...props}></Component>
  }
}
export default Hoc
