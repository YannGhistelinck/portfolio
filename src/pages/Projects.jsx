import ProjectCard from '../components/ProjectCard'
import projects from '../assets/data/projects.json'

function Projects(){
    return(
        <article>
            <h2 className='pageTitle'>Mes projets de développement web</h2>
            <div className='cardContainer'>
                {projects.map((project) => (
                        <ProjectCard key={project.id} projectData={project}/>
                ))}
            </div>
        </article>
    )
}

export default Projects