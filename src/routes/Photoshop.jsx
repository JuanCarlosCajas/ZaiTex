import '../css/Photoshop.css'
import photoshopBody from '../img/headerPhotoshop.png'

export function Photoshop(){
    console.log("Estas en photoshop")
    return (
        <>
            <div className='photoShop-container'>
                <img src={photoshopBody} alt="" className='headerPhotoshop' />
            </div>
        </>
    )
}