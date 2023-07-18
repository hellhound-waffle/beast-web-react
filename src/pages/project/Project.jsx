import { useParams } from 'react-router-dom';
import ButtonGitHub from '../../components/btnGitHub/ButtonGitHub';
import {projects} from './../../helpers/projectsList';
import './style.css';


function Project() {

  const {id} = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project__details">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.bigImg} alt='' className="project__details__cover" />
          <div className="project__details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          
          {project.gitHub_link && <ButtonGitHub link='https://GitHub.com'/>}

        </div>
      </div>
    </main>
  )
}

export default Project;