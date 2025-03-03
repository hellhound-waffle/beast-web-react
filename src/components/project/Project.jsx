import { NavLink } from 'react-router-dom';
import './style.css';

function Project({title, img, id}) {
  return (
    <NavLink to={`/beast-web-react/project/${id}`}>
    <li className="project">
      <img src={img} className="project__image" alt=""/>
      <h3 className="project__title">
        {title}
      </h3>
    </li>
    </NavLink>
  )
}

export default Project;