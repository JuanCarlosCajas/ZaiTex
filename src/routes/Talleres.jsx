import '../css/Talleres.css'

import headerTaller from '../img/Taller/headerTaller.png'

export function Talleres(){
    
    console.log("Accediendo a Talleres")
    
    return(
        <>
            <div className='curso-container'>
                <img src={headerTaller} alt="" className='cursoHeader' />
            </div>
        </>
    )
}