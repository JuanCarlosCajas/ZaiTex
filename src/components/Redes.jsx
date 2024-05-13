import '../css/Redes.css'

import logoYoutube from '../img/Redes/youtube.svg'
import logoFacebook from '../img/Redes/facebook.svg'
import logoTiktok from '../img/Redes/tiktok.svg'
import logoInstagram from '../img/Redes/instagram.svg'
import logoTwitter from '../img/Redes/twitter.svg'

import logoUser from '../img/Redes/user.svg'

export function Redes(){
    return(
        <div className="redes-container">
            <div className='links-container'>
                <a href="#" className='link-item'><img src={logoFacebook} alt="" width={"13px"} /></a>
                <a href="#" className='link-item'><img src={logoTwitter} alt="" width={"20px"} /></a>
                <a href="#" className='link-item'><img src={logoInstagram} alt="" width={"23px"} /></a>
                <a href="#" className='link-item'><img src={logoYoutube} alt="" width={"23px"} /></a>
                <a href="#" className='link-item'><img src={logoTiktok} alt="" width={"20px"} /></a>
            </div>
            <div className='Sesion-container'>
                <img src={logoUser} alt="" width={"20px"}/>
                <a href="#" className='sesion-item'>Inicio Sesion</a>
            </div>
        </div>
    )
}