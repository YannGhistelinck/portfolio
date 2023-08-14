import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Projects from "../pages/Projects"
import Project from "../pages/Project"
import Contact from "../pages/Contact"

function Routing(){
    return(
        <Router>
            <Header/>
            <div className="pageContent">
            <Menu/>
            <Routes>
                <Route path="portfolio/" element={<Home/>}/>
                <Route path="portfolio/mes_projets" element={<Projects/>}/>
                <Route path="portfolio/projet" element={<Project/>}/>
                <Route path="portfolio/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            </div>
            <Footer/>
        </Router>
    )
}
export default Routing