import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 20px;
`
const LogoImgStyle = styled.img`
    margin-right: 10px;
`
function Logo(){
    return (
        <LogoContainer>
            <LogoImgStyle src={logo} alt='logo'></LogoImgStyle>
            <p>Renzo <strong>Books</strong></p>
        </LogoContainer>
    )
}

export default Logo;