

function SmallBox({icon, title, contact, info}){
    /*
    let typeOfContact = null
    if(title === "Par téléphone"){
        typeOfContact = "tel"
    }else{
        typeOfContact = "mailto"
    }
    */
    return(
        <div className="smallBox">
            <div className='smallBox__title'>
                <img className="smallBox__title__icon" src={icon} alt="téléphone"/>
                <h3 className='smallBox__title__h3'>{title}</h3>
            </div>
            <div className='smallBox__content'>
                <h4 className="smallBox__content__contact">{contact}</h4>
                <p className="smallBox__content__info">{info}</p>
                
            </div>
        </div>
    )
}

export default SmallBox

//<a className="link" href={typeOfContact+": "+contact}>{contact}</a>