import { NavLink } from 'react-router'
import './Navigation.scss'

export const NavigationElement = ({ text, path }) => {
  return (
    <div className='navigation-element'>
      <NavLink to={path}>{text}</NavLink>
    </div>
  )
}