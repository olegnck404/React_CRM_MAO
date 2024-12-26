import { useEffect, useState } from 'react'
import '../Page.scss'
import { useStorage } from '../../providers/StorageProvider'

export const Tasks = () => {
  const { tasks, voids } = useStorage()
  const [taskText, setTaskText] = useState('')
  const [executor, setExecutor] = useState('')

  const handleInputTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleInputExecutorChange = (event) => {
    setExecutor(event.target.value);
  };

  const addTask = () => {
    tasks.push({text: taskText, executor: executor})
    voids.tasks(tasks)
    setTaskText('')
    setExecutor('')
  }
  

  return (
    <div className='page' id='tasks'>
      <div className="inputs">
        <input type="text" value={taskText} placeholder='Текст задачі' onChange={handleInputTextChange} />
        <input type="text" value={executor} placeholder='Виконавець' onChange={handleInputExecutorChange} />
        <button onClick={addTask}>Додати</button>
      </div>
      <div className="tasks">
        {tasks.map(item => (
          <div className="task" key={item.id}>
            <input type="checkbox" checked={item.completed} onChange={() => toggleTaskCompletion(item.id)} />
            <span>{item.text}</span>
            <div className="divider" />
            <span className="executor">{item.executor}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
}