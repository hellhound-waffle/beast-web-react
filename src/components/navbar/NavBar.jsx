import { NavLink } from 'react-router-dom';
import ButtonDarkMode from '../btnDarkTheme/ButtonDarkMode';
import './style.css';


function NavBar() {

  const activeLink = 'nav-list__link nav-list__link--active';
  const regularLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
            <NavLink to='/' className="logo">
                <span>
                  Lazy
                </span>
                Beast
            </NavLink>

          <ButtonDarkMode />

          <ul className="nav-list">
            <NavLink to='/' className={({isActive}) => {
              return isActive ? activeLink : regularLink
            }}>
              <li className="nav-list__item">Projects</li>
            </NavLink>
            <NavLink to='skills' className={({isActive}) => {
              return isActive ? activeLink : regularLink
            }}>
              <li className="nav-list__item">Skills</li>
            </NavLink>
            <NavLink to='contacts' className={({isActive}) => {
              return isActive ? activeLink : regularLink
            }}>
              <li className="nav-list__item">Contacts</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;