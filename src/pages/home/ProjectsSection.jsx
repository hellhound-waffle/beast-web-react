import Project from '../../components/project/Project';
import {projects} from './../../helpers/projectsList';
import './style.css';

function ProjectSection() {
  return (
    <main className="section" id="projects">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {projects.map(project => {
            return (
              <Project key={project.id} id={project.id} title={project.title} img={project.img}/>
            )
          })}

        </ul>
      </div>
      </main>
  )
}

export default ProjectSection;