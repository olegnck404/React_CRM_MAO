import { useStorage } from '../../providers/StorageProvider'
import '../Page.scss'

export const Home = () => {
  const { fines, delays, shifts } = useStorage();

  return (
    <div className='page' id='home'>
      <div className="list">
        <span className='list-title'>Список штрафів</span>
        <div className="list__titles">
          <span>Ім'я</span>
          <span>Сума штрафа</span>
          <span>Дата</span>
          <span>Причина</span>
        </div>
        {fines.map((item, index) => (
          <div className='list-row'>
            <span>{item.name}</span>
            <span>{item.sum}</span>
            <span>{item.date.toLocaleString()}</span>
            <span>{item.reason}</span>
          </div>
        ))}
      </div>
      <div className="list">
        <span className='list-title'>Список запізнившихся</span>
        <div className="list__titles">
          <span>Ім'я</span>
          <span>Дата</span>
          <span>Причина</span>
        </div>
        {delays.map((item, index) => (
          <div className='list-row'>
            <span>{item.name}</span>
            <span>{item.date.toLocaleString()}</span>
            <span>{item.reason}</span>
          </div>
        ))}
      </div>
      <div className="list">
        <span className='list-title'>Список змін</span>
        <div className="list__titles">
          <span>Ім'я</span>
          <span>Дата</span>
          <span>Посада</span>
        </div>
        {shifts.map((item, index) => (
          <div className='list-row'>
            <span>{item.name}</span>
            <span>{item.date.toLocaleString()}</span>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}