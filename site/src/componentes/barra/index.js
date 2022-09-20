import './index.scss';


export default function Barra(props){
    return(
        <section className='comp-barra'>
            <div className='barra'>
                <div>
                    <img className='logo' src="/images/logo.jpeg" alt=""/>
                </div>
                <div>
                  <input className='barra-pesquisa'/>
                </div>
             
            </div>
        </section>
    )
}