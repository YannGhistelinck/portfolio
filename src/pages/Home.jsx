import { Link } from 'react-router-dom'
import Competence from '../components/Competence'
import Contact from './Contact'
import Projects from './Projects'
import profileImg from '../assets/img/profileImg.jpg'
import cvImg from '../assets/img/cv.jpg'
import cvPDF from '../assets/files/cv-ghistelinck_yann.pdf'


function Home(){
    return(
        <article>
            <h2 className="pageTitle">À propos de moi</h2>


            <div className="homePage__bloc">
                <div className="homePage__bloc--1">
                    <img className='homePage__bloc__profileImg' src={profileImg} alt="Profil de Yann"/>
                </div>

                <div className="homePage__bloc--2">
                    <h3>Quelques mots sur moi</h3>
                    <p>Après avoir travaillé 10 ans comme musicien professionnel, je me reconvertis pour acquérir de nouvelles comptétences et expériences.</p>
                </div>
            </div>


            <div className="homePage__bloc reverseBloc">
                <div className='homePage__bloc--1'>
                    <h3>Mes formations</h3>
                    <ul>
                        <li>L1 Acoustique et informatique (Université du Maine)</li>
                        <li>Formation développeur web Bac+2 OpenClassrooms</li>
                    </ul>
                </div>

                <div className='homePage__bloc--2'>
                    <h3>Mes compétences</h3>
                    <div className='homePage__bloc__competenceList'>
                        <Competence data="HTML"/>
                        <Competence data="CSS"/>
                        <Competence data="JavaScript"/>
                        <Competence data="C"/>
                        <Competence data="Python"/>
                        <Competence data="Shell"/>
                        <Competence data="MySQL"/>
                        <Competence data="MongoDB"/>
                        <Competence data="LaTeX"/>
                        <Competence data="Git"/>
                        <Competence data="S.E.O."/>
                        <Competence data="Node.js"/>
                        <Competence data="Express"/>
                        <Competence data="Terminal Linux"/>
                    </div>
                    
                </div>
            </div>


            <div className='homePage__bloc'>
                <div className='homePage__bloc--1'>
                    <h3>Ce portfolio est sur Github</h3>
                    <a href="" target='blank'>C'est ici !</a>
                </div>

                <div className='homePage__bloc--2'>
                    <h3>Mes Projets</h3>
                    <Link to="/mes_projets" element={<Projects/>}>C'est par ici !</Link>
                </div>
            </div>


            <div className='homePage__bloc reverseBloc'>
                <div className='homePage__bloc--1'>
                    <a href={cvPDF} target="blank"><img className="homePage__bloc__cv" src={cvImg} alt='CV'/></a>
                </div>

                <div className='homePage__bloc--2'>
                    <h3>Pour me contacter</h3>
                    <Link to="/contact" element={<Contact/>}>C'est ici !</Link>
                </div>
            </div>
        </article>
    )
}
export default Home

//<embed src={cvPDF} width="90%" height="300px" type="application/pdf"/>
