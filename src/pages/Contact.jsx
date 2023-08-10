import phone from '../assets/icons/phone.svg'
import mail from '../assets/icons/mail.svg'
import SmallBox from '../components/Small__Box'

function Contact(){
    return(
        <article className="pageTitle">
            <h2>Me contacter</h2>
            <div className="contact">
                <SmallBox icon={phone} title="Par téléphone" contact="06.82.05.83.35" info='Du lundi au vendredi de 9h à 12h et de 14h à 17h' />
                <SmallBox icon={mail} title="Par mail" contact="yann.ghistelinck@laposte.net" info='' />
            </div>
        </article>
    )
}

export default Contact