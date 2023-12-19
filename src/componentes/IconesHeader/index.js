import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconeStyle = styled.li`
    margin-right: 40px;
    width: 25px;
`
const IconesStyle = styled.ul`
    display: flex;
    align-items: center;
`
const icones = [Perfil, Sacola]

function IconesHeader (){
    return(
        <IconesStyle>
            {icones.map((icone) => (
                <IconeStyle className='icone'><img src={icone}></img></IconeStyle>
            ) )}
        </IconesStyle>
    )
}

export default IconesHeader;