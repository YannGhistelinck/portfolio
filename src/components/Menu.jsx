import {Link} from 'react-router-dom'
import closeIcon from '../assets/icons/closeIcon.svg'
import openIcon from '../assets/icons/openIcon.svg'

const animationMenu = function(){
    document.getElementById('sideMenu__buttons__close').classList.toggle('hidden')
    document.getElementById('sideMenu__buttons__open').classList.toggle('hidden')
    document.getElementById('sideMenu__buttons').classList.toggle('minimisedContent')
    //document.getElementById('sideMenu__content').classList.toggle('hidden')
    document.getElementById('sideMenu__content').classList.toggle('sideMenu__content--hide')
    //if(document.getElementById('homeContent')) document.getElementById('homeContent').classList.toggle('minimisedContent')
    //document.getElementById('footerContent').classList.toggle('minimisedContent')
}

function Menu(){
    return(
        <aside>
            <div className='sideMenu__buttons minimisedContent' id='sideMenu__buttons'>
                <p id='sideMenu__buttons__close' onClick={animationMenu}><img src={closeIcon} alt="Close icon"/></p>
                <p id='sideMenu__buttons__open' className='hidden' onClick={animationMenu}><img src={openIcon} alt="Open icon"/></p>
            </div>
            
            <div className='sideMenu__content' id='sideMenu__content'>            
                <nav className='sideMenu__content__navbar'>
                    <Link className='sideMenu__content__navbar__link' to="portfolio/">Accueil</Link>
                    <Link className='sideMenu__content__navbar__link' to="portfolio/mes_projets">Mes projets</Link>
                    <Link className='sideMenu__content__navbar__link' to="portfolio/contact">Me contacter</Link>
                </nav>
            </div>
            
        </aside>
    )
}
export default Menu