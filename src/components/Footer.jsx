import linkedin from '../assets/icons/linkedinBlue.svg'
import codingame from '../assets/icons/codingameGrand.png'
import github from '../assets/icons/github-mark-white.svg'
function Footer(){
    return(
        <footer className="footerContent">
            <h2 className='footerContent__title'>Yann Ghistelinck</h2>
            <p className='footerContent__copyright'>Tous droits réservés</p>
            <div className='footerContent__icons'>
                <a href="https://www.linkedin.com/in/yann-ghistelinck/" target='blank'>
                    <img className='footerContent__icons__oneIcon' src={linkedin} alt="lien linkedin"/>
                </a>
                <a href="https://github.com/YannGhistelinck" target='blank'>
                    <img className="footerContent__icons__oneIcon" src={github} alt="Profile Github Yann"/>
                </a>
                <a href="https://www.codingame.com/profile/a68fa56cd54100d7cf33ca2e2af5bb9f1296884" target='blank'>
                    <img className='footerContent__icons__oneIcon' src={codingame} alt="Profile codingame"/>
                </a>
            </div>
            
        </footer>
    )
}

export default Footer