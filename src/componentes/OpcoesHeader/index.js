import styled from 'styled-components';

const OpcoesContainer = styled.ul`
    display: flex;
`

const OpcaoStyle = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const textoOpcoes = ['Categorias', 'Minha estante', 'Favoritos']

function OpcoesHeader (){
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
                <OpcaoStyle><p>{texto}</p></OpcaoStyle>
            ) )}
        </OpcoesContainer>
    )
}

export default OpcoesHeader;