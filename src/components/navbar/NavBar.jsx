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
            <NavLink to='/beast-web-react/' className="logo">
                <span>
                  Lazy
                </span>
                Beast
            </NavLink>

          <ButtonDarkMode />

          <ul className="nav-list">
            <NavLink to='/beast-web-react/' className={({isActive}) => {
              return isActive ? activeLink : regularLink
            }}>
              <li className="nav-list__item">Projects</li>
            </NavLink>
            <NavLink to='/beast-web-react/skills' className={({isActive}) => {
              return isActive ? activeLink : regularLink
            }}>
              <li className="nav-list__item">Skills</li>
            </NavLink>
            <NavLink to='/beast-web-react/contacts' className={({isActive}) => {
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