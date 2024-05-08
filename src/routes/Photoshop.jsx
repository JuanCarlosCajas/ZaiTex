import { Formulario } from '../components/Formulario'
import '../css/cursoPhotoshop.css'
import photoshopBody from '../img/headerPhotoshop.png'
import tituloPhotoshop from '../img/tituloPhotoshop.png'

export function Photoshop(){
    console.log("Estas en photoshop")
    return (
        <>
            <div className='photoShop-container'>
                <img src={photoshopBody} alt="" className='headerPhotoshop' />
                <section className='titulo-container'>
                    <img src={tituloPhotoshop} alt="" width={"70px"} />
                    <h1>Adobe Photoshop</h1>
                </section>
                <section className='body-Photoshop'>
                    <aside className='form-container'>
                        <Formulario/>
                    </aside>
                    <main className='Photoshop'>
                        
                    </main>
                </section>
            </div>
        </>
    )
}