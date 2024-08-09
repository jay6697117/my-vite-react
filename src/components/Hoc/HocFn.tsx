import { type CompProps } from '@/types'

const Hoc = (Component: React.FC<CompProps>) => (props: CompProps) => {
  return <Component name={'大家好，我是小杜杜，一起玩转Hooks吧！'} {...props}></Component>
}
export default Hoc
