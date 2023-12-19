import { livros } from './dadosResearch';
import InputStyle from "../Input";
import styled from "styled-components";
import { useState } from "react";

const ResearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const SearchTitleStyle = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SearchSubtitleStyle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const SearchResultStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function Research(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <ResearchContainer>
            <SearchTitleStyle>Já sabe qual será a sua proxima leitura? </SearchTitleStyle>
            <SearchSubtitleStyle>Encontre seu livro em nossa estante</SearchSubtitleStyle>
            <InputStyle placeholder="Digite o nome do livro"
                        onBlur={event => {
                            const textoDigitado = event.target.value
                            const resultResearch = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                            setLivrosPesquisados(resultResearch)
                        }}
            ></InputStyle>
            {livrosPesquisados.map(livro => (
                <SearchResultStyle>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </SearchResultStyle>
            ))}
        </ResearchContainer>
    )
}

export default Research