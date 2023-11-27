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

  const KanbanCard: FC<{
    title: string
    status: string
  }> = ({ title, status }) => {
    return (
      <li className='kanban-card'>
        <div className='card-title'>{title}</div>
        <div className='card-status'>{status}</div>
      </li>
    )
  }

  interface KanbanNewCardProps {
    onSubmit: (title: string) => void
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
      <main className='kanban-board'>
        <section className='kanban-column column-todo'>
          <h2>
            待处理
            <button disabled={showAdd} onClick={handleAdd}>
              ⊕ 添加新卡片
            </button>
          </h2>
          <ul>
            {showAdd && <KanbanNewCard onSubmit={handleSubmit} />}
            {todoList.map(item => (
              <KanbanCard key={item.id} {...item} />
            ))}
          </ul>
        </section>
        <section className='kanban-column column-ongoing'>
          <h2>进行中</h2>
          <ul>
            {ongoingList.map(item => (
              <KanbanCard key={item.id} {...item} />
            ))}
          </ul>
        </section>
        <section className='kanban-column column-done'>
          <h2>已完成</h2>
          <ul>
            {doneList.map(item => (
              <KanbanCard key={item.id} {...item} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
