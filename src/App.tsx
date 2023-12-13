import { FC, SetStateAction, useState } from 'react'
import logo from './assets/svgs/logo.svg'
import './App.css'
import { nanoid } from 'nanoid'

const App: FC = () => {
  const [showAdd, setShowAdd] = useState(false)
  const handleAdd = () => {
    setShowAdd(true)
  }

  const [todoList, setTodoList] = useState([
    { id: nanoid(), title: '开发任务-1', status: '22-05-22 18:15' },
    { id: nanoid(), title: '开发任务-3', status: '22-05-22 18:15' },
    { id: nanoid(), title: '开发任务-5', status: '22-05-22 18:15' },
    { id: nanoid(), title: '测试任务-3', status: '22-05-22 18:15' }
  ])

  const ongoingList = [
    { id: nanoid(), title: '开发任务-4', status: '22-05-22 18:15' },
    { id: nanoid(), title: '开发任务-6', status: '22-05-22 18:15' },
    { id: nanoid(), title: '测试任务-2', status: '22-05-22 18:15' }
  ]
  const doneList = [
    { id: nanoid(), title: '开发任务-2', status: '22-05-22 18:15' },
    { id: nanoid(), title: '测试任务-1', status: '22-05-22 18:15' }
  ]

  // const KanbanCard: FC<{
  //   title: string;
  //   status: string;
  // }> = (props) => {
  //   console.log('props :>> ', props);
  //   const { title, status } = props;
  //   return (
  //     <li className='kanban-card'>
  //       <div className='card-title'>{title}</div>
  //       <div className='card-status'>{status}</div>
  //     </li>
  //   );
  // };

  interface KanbanCardProps {
    title: string
    status: string
  }

  interface KanbanNewCardProps {
    onSubmit: (title: string) => void
  }

  interface KanbanBoardProps {
    children: React.ReactNode
  }

  interface KanbanColumnProps {
    className: string
    title: React.ReactNode
    children: React.ReactNode
  }

  const KanbanCard: FC<KanbanCardProps> = ({ title, status }) => {
    return (
      <li className='kanban-card'>
        <div className='card-title'>{title}</div>
        <div className='card-status'>{status}</div>
      </li>
    )
  }

  const KanbanNewCard: FC<KanbanNewCardProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('')

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
      setTitle(e.target.value)
    }

    const handleKeyDown = (e: { key: string }) => {
      if (e.key === 'Enter') {
        onSubmit(title)
      }
    }
    return (
      <li className='kanban-card'>
        <h3>添加新卡片</h3>
        <div className='card-title'>
          <input type='text' value={title} onChange={handleChange} onKeyDown={handleKeyDown} />
        </div>
      </li>
    )
  }

  const KanbanBoard: FC<KanbanBoardProps> = ({ children }) => {
    return <main className='kanban-board'>{children}</main>
  }

  const KanbanColumn: FC<KanbanColumnProps> = ({ children, className, title }) => {
    const combinedClassName = `kanban-column ${className}`
    return (
      <section className={combinedClassName}>
        <h2>{title}</h2>
        <ul>{children}</ul>
      </section>
    )
  }

  const TodoTitle:FC<{children:React.ReactNode}> = ({children}) => {
    return (
      <>
        待处理
        <button disabled={showAdd} onClick={handleAdd}>
          ⊕ 添加新卡片
        </button>
        <span> || children:{children}</span>
      </>
    )
  }

  const handleSubmit = (title: string) => {
    setTodoList(currentTodoList => [{ id: nanoid(), title, status: new Date().toDateString() }, ...currentTodoList])
    setShowAdd(false)
  }

  return (
    <div className='app'>
      <div className='text-6xl text-red-600 bg-gray-600 p-4 rounded-none'>tailwind</div>
      <header className='app-header'>
        <h1>我的看板</h1>
        <img src={logo} className='app-logo' alt='logo' />
      </header>
      <KanbanBoard>
        <KanbanColumn className='column-todo' title={<TodoTitle><button style={{background:'red'}}>123</button></TodoTitle>}>
          {showAdd && <KanbanNewCard onSubmit={handleSubmit} />}
          {todoList.map(item => (
            <KanbanCard key={item.id} {...item} />
          ))}
        </KanbanColumn>
        <KanbanColumn className='column-ongoing' title='进行中'>
          {ongoingList.map(item => (
            <KanbanCard key={item.id} {...item} />
          ))}
        </KanbanColumn>
        <KanbanColumn className='column-done' title='已完成'>
          {doneList.map(item => (
            <KanbanCard key={item.id} {...item} />
          ))}
        </KanbanColumn>
      </KanbanBoard>
    </div>
  )
}

export default App
