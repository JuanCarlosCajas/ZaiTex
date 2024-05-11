import '../css/PlanEstudios.css'

export function Plan(props){

    var modo = props.modo
    console.log(modo)
    if(modo === "AutoCad"){
        return(
            <div className="Plan-container">
                <section className='rowPlan-1'>
                    <h1>{props.titulo1}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio1}</li>
                        <li>{props.beneficio3}</li>
                        <li>{props.beneficio2}</li>
                        <li>{props.beneficio4}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo2}</h1>
                    <ul className='rowPlan-benefits-5'>
                        <li>{props.beneficio5}</li>
                        <li>{props.beneficio6}</li>
                        <li>{props.beneficio7}</li>
                        <li>{props.beneficio8}</li>
                        <li>{props.beneficio9}</li>
                        <hr />
                        </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo3}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio10}</li>
                        <li>{props.beneficio11}</li>
                        <li>{props.beneficio12}</li>
                        <li>{props.beneficio13}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo4}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio14}</li>
                        <li>{props.beneficio15}</li>
                        <li>{props.beneficio16}</li>
                    </ul>
                </section>
            </div>
        )
    }
    else if(modo == "marketingDigital"){
        return(
            <div className="Plan-container">
            <section className='rowPlan-1'>
                <h1>{props.titulo1}</h1>
                <ul className='rowPlan-benefits'>
                    <li>{props.beneficio1}</li>
                    <li>{props.beneficio3}</li>
                    <li>{props.beneficio2}</li>
                    <li>{props.beneficio4}</li>
                    <hr />
                </ul>
            </section>
            <section className='rowPlan-1'>
                <h1>{props.titulo2}</h1>
                <ul className='rowPlan-benefits-5'>
                    <li>{props.beneficio5}</li>
                    <li>{props.beneficio6}</li>
                    <li>{props.beneficio7}</li>
                    <li>{props.beneficio8}</li>
                    <li>{props.beneficio9}</li>
                    <hr />
                </ul>
            </section>
            <section className='rowPlan-1'>
                <h1>{props.titulo3}</h1>
                <ul className='rowPlan-benefits-6'>
                    <li>{props.beneficio9}</li>
                    <li>{props.beneficio10}</li>
                    <li>{props.beneficio11}</li>
                    <li>{props.beneficio12}</li>
                    <li>{props.beneficio13}</li>
                    <li>{props.beneficio14}</li>
                    <hr />
                </ul>
            </section>
            <section className='rowPlan-1'>
                <h1>{props.titulo4}</h1>
                <ul className='rowPlan-benefits-5'>
                    <li>{props.beneficio15}</li>
                    <li>{props.beneficio16}</li>
                    <li>{props.beneficio17}</li>
                    <li>{props.beneficio18}</li>
                    <li>{props.beneficio19}</li>
                </ul>
            </section>
            </div>
        )
    }
    else if(modo === "corelDraw"){
        return(
            <div className="Plan-container">
                <section className='rowPlan-1'>
                    <h1>{props.titulo1}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio1}</li>
                        <li>{props.beneficio3}</li>
                        <li>{props.beneficio2}</li>
                        <li>{props.beneficio4}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo2}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio5}</li>
                        <li>{props.beneficio6}</li>
                        <li>{props.beneficio7}</li>
                        <li>{props.beneficio8}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo3}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio9}</li>
                        <li>{props.beneficio10}</li>
                        <li>{props.beneficio11}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo4}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio12}</li>
                        <li>{props.beneficio13}</li>
                        <li>{props.beneficio14}</li>
                        <li>{props.beneficio15}</li>
                        <li>{props.beneficio16}</li>
                    </ul>
                </section>
            </div>
        )
    }
    else if(modo === "simple"){
        return(
            <div className="Plan-container">
                <section className='rowPlan-1'>
                    <h1>{props.titulo1}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio1}</li>
                        <li>{props.beneficio3}</li>
                        <li>{props.beneficio2}</li>
                        <li>{props.beneficio4}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo2}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio5}</li>
                        <li>{props.beneficio6}</li>
                        <li>{props.beneficio7}</li>
                        <li>{props.beneficio8}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo3}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio9}</li>
                        <li>{props.beneficio10}</li>
                        <li>{props.beneficio11}</li>
                        <li>{props.beneficio12}</li>
                        <hr />
                    </ul>
                </section>
                <section className='rowPlan-1'>
                    <h1>{props.titulo4}</h1>
                    <ul className='rowPlan-benefits'>
                        <li>{props.beneficio13}</li>
                        <li>{props.beneficio14}</li>
                        <li>{props.beneficio15}</li>
                        <li>{props.beneficio16}</li>
                    </ul>
                </section>
            </div>
        )
    }
}