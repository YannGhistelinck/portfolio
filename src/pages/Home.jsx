import { Link } from 'react-router-dom'
import Competence from '../components/Competence'
import Contact from './Contact'
import Projects from './Projects'
import profileImg from '../assets/img/profileImg.webp'
import cvImg from '../assets/img/cv.webp'
import cvPDF from '../assets/files/cv-ghistelinck_yann.pdf'
import github from '../assets/icons/github--large.png'
import github_small from '../assets/icons/github-mark.svg'


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
                    <p className='homePage__bloc__description'>Après avoir travaillé 10 ans comme musicien professionnel, je me suis reconverti pour exercer ma deuxième passion, le développement informatique en commençant par le développement web.</p>
                </div>
            </div>


            <div className="homePage__bloc reverseBloc">
                <div className='homePage__bloc--1'>
                    <h3>Mes formations</h3>
                    <p className='homePage__bloc__description'>
                        L1 Acoustique et informatique S.P.I. (Sciences Pour l'Ingénieur) (Université du Maine).<br/><br/>
                        Formation développeur web Bac+2 (OpenClassrooms).
                    </p>
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
                        <Competence data="React"/>
                    </div>
                    
                </div>
            </div>


            <div className='homePage__bloc'>
                <div className='homePage__bloc--1'>
                    <h3>Ce portfolio est sur Github</h3>
                    <p className='homePage__bloc__description'>Ce site a été développé intégralement à la main, le code est accessible sur le lien Github ci-dessous.</p>
                    <a className='homePage__bloc__linkButton homePage__bloc__linkButton--light' href="https://github.com/YannGhistelinck/portfolio" target='blank'>
                        <img className='homePage__bloc__linkButton--githubIcon' src={github_small} alt="Lien GitHub"/>
                        <img className='homePage__bloc__linkButton--github' src={github} alt="Lien GitHub de ce portfolio" />
                    </a>
                </div>

                <div className='homePage__bloc--2'>
                    <h3>Mes Projets</h3>
                    <p className='homePage__bloc__description'>Pour avoir un aperçu de quelques-uns de mes projets de développement web.</p>
                    <Link className='homePage__bloc__linkButton homePage__bloc__linkButton--dark' to="/portfolio/mes_projets" element={<Projects/>}>
                        Voir mes projets
                    </Link>
                </div>
            </div>


            <div className='homePage__bloc reverseBloc'>
                <div className='homePage__bloc--1'>
                    <h3>Lire mon C.V. pour en savoir plus sur mon parcours</h3>
                    <a href={cvPDF} target="blank"><img className="homePage__bloc__cv" src={cvImg} alt='CV'/></a>
                </div>

                <div className='homePage__bloc--2'>
                    <h3>Pour me contacter</h3>
                    <p className='homePage__bloc__description' >Pour faire appel à mes services, vous pouvez me contacter par mail ou par téléphone.</p>
                    <Link className='homePage__bloc__linkButton homePage__bloc__linkButton--dark' to="/portfolio/contact" element={<Contact/>}>
                        Accéder à mes coordonnées
                    </Link>
                </div>
            </div>
        </article>
    )
}
export default Home

//<embed src={cvPDF} width="90%" height="300px" type="application/pdf"/>
