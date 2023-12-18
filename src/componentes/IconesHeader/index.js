import './style.css'
import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';

const icones = [Perfil, Sacola]

function IconesHeader (){
    return(
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            ) )}
        </ul>
    )
}

export default IconesHeader;