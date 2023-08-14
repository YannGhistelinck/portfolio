import { useLocation } from "react-router-dom"
import undo from '../assets/icons/undoIcon.svg'
import { Link } from "react-router-dom"
import Projects from "./Projects"
import Competence from "../components/Competence"
import Carousel from "../components/Carousel"
import github from '../assets/icons/github--large--white.png'

function Project(){
    const project = useLocation()
    const data = project.state
    return(
        <article className="project">
            <Link to="/mes_projets" element={<Projects/>}><img className="project__undo" src={undo} alt="retour"/></Link>
            <div className='project__carouselContainer'>
                <Carousel images={data.images}/>
            </div>
            <div className="project__content">
                <h2 className="project__content__title">{data.title}</h2>
                <h3>Description du projet</h3>
                <p className="project__content__description">
                    {data.description}
                </p>
                <h3>Difficultés rencontrées</h3>
                <p>
                    {data.difficulte}
                </p>
                <h3>Compétences utilisées pour ce projet</h3>
                <div className="project__content__competences">
                    {data.competences.map((competence) => {
                        const key = data.id + competence
                        return <Competence key={key} data={competence}/>
                    })}
                </div>
                <h3>Lien Github de ce projet</h3>
                <a href={data.github} target="blank">
                    <div className="project__content__github">
                        <img className="project__content__github__img" src={github} alt="GitHub"/>
                    </div>
                </a>
            </div>
            
        </article>
    )
}

export default Project