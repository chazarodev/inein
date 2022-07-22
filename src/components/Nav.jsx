import { Link, useLocation } from 'react-router-dom'
import { NavData } from './NavData'

const Nav = () => {

  const location = useLocation()

  const urlActual = location.pathname

  const data = NavData.map(navigate => (
    <Link 
      key={navigate.id} 
      className={`${urlActual == `/${navigate.title}` ? 'text-lightShades' : 'text-backGround'} mr-4 capitalize text-sm my-2 md:my-0 md:text-lg hover:text-lightShades transition ease-in-out delay-100`} 
      to={`/${navigate.title}`}>
        {navigate.title}
    </Link>
  ))

  return (
    <nav>
        <ul>
            <li className='mr-4 flex flex-col lg:flex-row'>
                {data}
            </li>
        </ul>
    </nav>
  )
}

export default Nav