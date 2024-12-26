import { createContext, useContext, useState, useEffect } from 'react'

const StorageContext = createContext({})

const def_fines = [
  {
    'name': 'Віктор',
    'sum': 2000,
    'date': new Date(),
    'reason': 'Запізнився'
  },
  {
    'name': 'Іван',
    'sum': 1000,
    'date': new Date(),
    'reason': 'Грубив гостю'
  },
  {
    'name': 'Юлія',
    'sum': 1500,
    'date': new Date(),
    'reason': 'Разбила посуд'
  }
]
const def_delays = [
  {
    'name': 'Іван',
    'date': new Date(),
    'reason': 'Проспав'
  },
  {
    'name': 'Дмитро',
    'date': new Date(),
    'reason': 'Померла черепаха'
  }
]
const def_shifts = [
  {
    'date': new Date(),
    'name': 'Ігор',
    'role': 'Офіціант'
  },
  {
    'date': new Date(),
    'name': 'Дарина',
    'role': 'Прибиральниця'
  }
]

export const StorageProvider = ({ children }) => {
  const [fines, setFines] = useState(def_fines)
  const [delays, setDelays] = useState(def_delays)
  const [shifts, setShifts] = useState(def_shifts)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
  }, [tasks])
  

  return (
    <StorageContext.Provider value={{
      fines: fines, 
      delays: delays,
      shifts: shifts, 
      tasks: tasks,
      voids: {
        fines: setFines,
        delays: setDelays,
        shifts: setShifts,
        tasks: setTasks
        }
      }}
    >
      { children }
    </StorageContext.Provider>
  )
}

export const useStorage = () => {
  const context = useContext(StorageContext)
  return context
}