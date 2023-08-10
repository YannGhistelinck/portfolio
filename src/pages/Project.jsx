import { useLocation } from "react-router-dom"
import undo from '../assets/icons/undoIcon.svg'
import { Link } from "react-router-dom"
import Projects from "./Projects"
import Competence from "../components/Competence"
//import { useNavigate } from "react-router-dom"
//import { useEffect } from "react"

function Project(){
    const project = useLocation()
    const data = project.state
    return(
        <article className="project">
            <Link to="/mes_projets" element={<Projects/>}><img className="project__undo" src={undo} alt="retour"/></Link>
            <div>
                photos du projet
            </div>
            <h2 className="project__title">{data.title}</h2>
            <h3>Description du projet</h3>
            <p className="project__description">
                {data.description}
            </p>
            <h3>Compétences utilisées pour ce projet</h3>
            <div className="project__competences">
                {data.competences.map((competence) => {
                    const key = data.id + competence
                    return <Competence key={key} data={competence}/>
                })}

            </div>
        </article>
    )
}

export default Project