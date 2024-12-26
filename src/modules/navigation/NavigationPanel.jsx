import './Navigation.scss'
import { NavigationElement } from './NavigationElement'

export const NavigationPanel = () => {
  return (
    <>
    <div className='navigation-panel'>
      <span className="logo">Restrourant CRM</span>
      <NavigationElement text='Головна' path='/' />
      <NavigationElement text='Задачі' path='/tasks' />
      <NavigationElement text='Про проєкт' path='/about' />
    </div>
    <div className="footer-text">© Ресторан MAО, Дядечко Олег, 2024 рік</div>
    </>
  )
}