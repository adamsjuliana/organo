import './Rodape.css'

export const Rodape = () => {
        return(
            <footer className="rodape">
            <ul>
                <li>
                <a href='https://www.facebook.com/'><img src="/imagens/fb.png" alt="Facebook"/></a>
                <a href='https://www.instagram.com/'><img className='social' src="/imagens/ig.png" alt="Instagram"/></a>
                <a href='https://twitter.com/'><img  src="/imagens/tw.png" alt="Twitter"/></a>
                </li>
                <li>
                    <img src="/imagens/logo.png" alt="Logo"/>
                </li>
                <li>Desenvolvivo por Alura.</li>
            </ul>
            </footer>
        )
    }