import { useState } from "react"
import arrow from '../assets/icons/arrow.svg'

function Carousel({images}){
    const nbPictures = images.length
    const [activePicture, updateActivePicture] = useState(0)

    const previousButton = function(){
        if(activePicture === 0){
            updateActivePicture(nbPictures-1)
        }else{
            updateActivePicture(activePicture-1)
        }
    }
    const nextButton = function(){
        if(activePicture === nbPictures-1){
            updateActivePicture(0)
        }else{
            updateActivePicture(activePicture+1)
        }
    }

    if(nbPictures === 0){
        return <div>Pas de photo pour le projet</div>
    }else if(nbPictures === 1){
        return (
            <div>
                <img src={require(`../assets/img/${images[0]}`)} alt="Projet"/>
            </div>
        )
    }else{
        return(
            <div>
                <div className="carousel">
                    <img className="carousel__img" src={require(`../assets/img/${images[activePicture]}`)} alt="Projet"/>
                </div>
                <div className="carousel__buttons">
                    <div className="carousel__buttons--left" onClick={previousButton}><img src={arrow} alt="fleche précédente"/></div>
                    <div className="carousel__buttons--right" onClick={nextButton}><img src={arrow} alt="fleche suivante"/></div>
                </div>
                <div className="carousel__pictureCounter">
                    <p>{activePicture+1}/{nbPictures}</p>
                </div>
            </div>
        )
    }
}

export default Carousel