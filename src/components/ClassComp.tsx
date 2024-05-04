import { Component, PureComponent, memo } from 'react'

// export default class ClassComp extends Component {
//   render() {
//     return (
//       <div className='p-4 bg-blue-300 h-auto'>ClassComp</div>
//     )
//   }
// }

// export default class ClassComp extends PureComponent {
//   render() {
//     return (
//       <div className='p-4 bg-blue-300 h-auto'>ClassComp</div>
//     )
//   }
// }

// export default function ClassComp() {
//   return <div className='p-4 bg-blue-300 h-auto'>ClassComp</div>
// }

// eslint-disable-next-line react-refresh/only-export-components
function ClassComp() {
  return <div className='p-4 bg-blue-300 h-auto'>ClassComp</div>
}
const  memoComp = memo(ClassComp)
export default  memoComp
