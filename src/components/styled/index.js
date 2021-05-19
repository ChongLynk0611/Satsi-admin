import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    width: 1300px;
    margin: 0 auto;
    @media screen and (max-width: 1400px) {
        width: 90%; 
    }
    @media screen and (max-width: 838px){
        width: 100%;
    }
`

export const InforContainer = styled.div`
    position: relative;
    border-bottom: 1px solid ${props => props.theme.colors.main};
    margin: 3.4rem auto 3rem;
    button{
        position: absolute;
        top: 0.55rem;
        left: 0.4rem;
        background-color: transparent;
        font-size: 2rem;
        border: none;
        color: ${props => props.theme.colors.main};
        margin-bottom: 3rem;
        cursor: pointer;
        &:hover{
            opacity: 0.4;
        }
    }

    h1{
        color: ${props => props.theme.colors.main};
        font-size: 3rem;
        text-align: center;
        margin-bottom: 3rem;
    }

    h2{
        color: ${props => props.theme.colors.main};
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    div {
        padding: 0 2rem 4rem;
        p{
            font-size: 2rem;
            margin: 2rem 0;
        }
    }

    ul {
        list-style-type: circle;
        padding-left: 3rem;
        li {
            font-size: 2rem;
            padding: 0.5rem 0;
        }
    }

    ol {
        list-style-type: number;
        padding-left: 3rem;
        li {
            font-size: 2rem;
            padding: 0.5rem 0;
        }
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 1.4rem 3.5rem;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    &:hover{
        opacity: 0.7;
    }
`

export const TurnIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 0.9;
        transform: translateX(0);
    }
`

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
`

export const Rotate = keyframes`
    0%{
        transform: rotateY(180deg);
        opacity: 0;
    }
    100%{
        tansform: rotateY(0);
        opacity: 1;
    }
`