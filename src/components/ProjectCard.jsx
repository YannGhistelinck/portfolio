import {Link} from 'react-router-dom'
import Project from '../pages/Project'


function ProjectCard({projectData}){
    return(
        <Link className='link cardLink' to="/portfolio/projet" state={projectData} element={<Project/>} >
            <div className='card'>
                <img src={require(`../assets/img/${projectData.cover}`)} className="card__cover" alt="Couverture de la carte de projet"/>
                <p className='card__title'>{projectData.title}</p>
            </div>
        </Link>
    )
}
export default ProjectCard