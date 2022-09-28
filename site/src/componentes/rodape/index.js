import './index.scss';

export default function Rodape(){
    return(
        <section className='comp-rodape'>
            <div className='coluna1'>
            <h3> Parcerias</h3>
                <h4>Nike</h4>
                <h4>Adidas</h4>
                <h4>Puma</h4>
                <h4>Jordan</h4>
            </div>

            <div className='coluna2'>
                <h3> Institucional</h3>
                <h4>Quem Somos?</h4>
                <h4>Termos de uso</h4>
                <h4>Política de privacidade</h4>
            </div>

            <div className='coluna3'>
                <h3> Ajuda</h3>
                <h4>Suporte</h4>
                <h4>Contatos</h4>
                
            </div>
        </section>
    )
}