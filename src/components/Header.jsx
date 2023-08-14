import profileImg from '../assets/img/profileImg.webp'
import logo from '../assets/icons/logo.gif'
//import icon from '../assets/icons/yannIcon.svg'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'


function Header(){
    return(
        <header className="headerContent">
            <Link to="/" element={<Home/>}>
            <img className="headerContent__logo" src={logo} alt="Icône de Yann"/>
        </Link>
            <h1 className="headerContent__title">Yann Ghistelinck</h1>
            <img className="headerContent__profileImg" src={profileImg} alt="Profile de Yann" />
        </header>
    )
}

export default Header