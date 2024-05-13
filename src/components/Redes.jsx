import '../css/Redes.css'

import logoYoutube from '../img/Redes/youtube.svg'
import logoYoutubeActivo from '../img/Redes/youtubeActivo.svg'

import logoFacebook from '../img/Redes/facebook.svg'
import logoFacebookActivo from '../img/Redes/facebookActivo.svg'

import logoTiktok from '../img/Redes/tiktok.svg'
import logoTiktokActivo from '../img/Redes/tiktokActivo.svg'

import logoInstagram from '../img/Redes/instagram.svg'
import logoInstagramActivo from '../img/Redes/instagramActivo.svg'

import logoTwitter from '../img/Redes/twitter.svg'
import logoTwitterActivo from '../img/Redes/twitterActivo.svg'

import logoUser from '../img/Redes/user.svg'
import { useEffect, useState } from 'react'

export function Redes(){

    const[facebook, setFacebook] = useState("desactivado")
    const[youtube, setYoutube] = useState("desactivado")
    const[tiktok, setTiktok] = useState("desactivado")
    const[instagram, setInstagram] = useState("desactivado")
    const[twitter, setTwitter] = useState("desactivado")
    
    function activarLogo(logo){
        if(logo == "facebook"){
            setFacebook("activo")
        }
        else if(logo == "youtube"){
            setYoutube("activo")
        }
        else if(logo == "tiktok"){
            setTiktok("activo")
        }
        else if(logo == "instagram"){
            setInstagram("activo")
        }
        else if(logo == "twitter"){
            setTwitter("activo")            
        }
    }

    function desactivarLogo(logo){
        if(logo == "facebook"){
            setFacebook("desactivado")
        }
        else if(logo == "youtube"){
            setYoutube("desactivado")
        }
        else if(logo == "tiktok"){
            setTiktok("desactivado")
        }
        else if(logo == "instagram"){
            setInstagram("desactivado")
        }
        else if(logo == "twitter"){
            setTwitter("desactivado")            
        }
    }
    
    return(
        <div className="redes-container">
            <div className='links-container'>
                <a href="#" className='link-item' onMouseOver={() => activarLogo("facebook")} onMouseOut={() => desactivarLogo("facebook")}><img src={facebook == "desactivado" ? logoFacebook : logoFacebookActivo} alt="" width={"10spx"} /></a>
                <a href="#" className='link-item' onMouseOver={() => activarLogo("twitter")} onMouseOut={() => desactivarLogo("twitter")}><img src={twitter == "desactivado" ? logoTwitter : logoTwitterActivo} alt="" width={"15px"} /></a>
                <a href="#" className='link-item' onMouseOver={() => activarLogo("instagram")} onMouseOut={() => desactivarLogo("instagram")}><img src={instagram == "desactivado" ? logoInstagram : logoInstagramActivo} alt="" width={"18px"} /></a>
                <a href="#" className='link-item' onMouseOver={() => activarLogo("youtube")} onMouseOut={() => desactivarLogo("youtube")}><img src={youtube == "desactivado" ? logoYoutube : logoYoutubeActivo} alt="" width={"18px"} /></a>
                <a href="#" className='link-item' onMouseOver={() => activarLogo("tiktok")} onMouseOut={() => desactivarLogo("tiktok")}><img src={tiktok == "desactivado" ? logoTiktok : logoTiktokActivo} alt="" width={"15px"} /></a>
            </div>
            <div className='Sesion-container'>
                <img src={logoUser} alt="" width={"20px"}/>
                <a href="#" className='sesion-item'>Inicio Sesión</a>
            </div>
        </div>
    )
}