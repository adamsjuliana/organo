import './Rodape.css'

export const Rodape = () => {
        return(
            <footer className="rodape">
            <ul>
                <li>
                <a href='#' target="_blank"><img src="/imagens/fb.png" alt="Facebook"/></a>
                <a href='#' target="_blank"><img className='social' src="/imagens/ig.png" alt="Instagram"/></a>
                <a href='#' target="_blank"><img  src="/imagens/tw.png" alt="Twitter"/></a>
                </li>
                <li>
                    <img src="/imagens/logo.png" alt="Logo"/>
                </li>
                <li>Desenvolvivo por Alura.</li>
            </ul>
            </footer>
        )
    }