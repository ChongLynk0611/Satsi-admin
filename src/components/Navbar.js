import { useState } from "react";
import { Link } from 'react-router-dom';

import styled from "styled-components";
import { Wrapper, TurnIn, FadeIn } from "./styled/index"
import logo from '../images/logo.png'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const links = ['/gt', '/dhd', '/dhu', '/dttt', '/khcn', '/tt', '/lh'];

    const handleClickMenuBar = () =>{
        setShowLinks(!showLinks)
    }

    const handleClickLink = () => {
        setShowLinks(false);
    }

    return ( 
        <Container>
            {showLinks ? <Overlay onClick={handleClickMenuBar}><i className="fas fa-times"></i></Overlay> : ''}
            <StyledWrapper>
                <Nav>
                    <LeftSide>
                        <div id={showLinks ? "hidden" : ""}>
                            <Link onClick={() => handleClickLink()} to='/'>TRANG CHỦ</Link>
                            <Link onClick={() => handleClickLink()} to='/gioi-thieu'>GIỚI THIỆU</Link>
                            <Link onClick={() => handleClickLink()} to={links[1]}>DU HỌC ĐỨC</Link>  
                            {/* <Link onClick={() => handleClickLink()} to={links[2]}>DU HỌC ÚC</Link>    */}
                            <Link onClick={() => handleClickLink()} to={links[3]}>ĐÀO TẠO TRỰC TUYẾN</Link>  
                            <Link onClick={() => handleClickLink()} to={links[4]}>KHOA HỌC & CÔNG NGHỆ</Link>    
                            <Link onClick={() => handleClickLink()} to='/tin-tuc'>TIN TỨC</Link> 
                            <Link onClick={() => handleClickLink()} to='/lien-he'>LIÊN HỆ</Link>
                        </div>
                        <button onClick={handleClickMenuBar}><i className="fas fa-bars"></i></button>
                    </LeftSide>
                    <StyledLogo>
                        <Link to="/"><img src={logo} alt="Logo Satsi"/></Link>
                    </StyledLogo>
                    <RightSide>
                        <input type="search" placeholder="Search..." required />
                        <button type="submit" className="fas fa-search"></button>
                    </RightSide>
                </Nav>
            </StyledWrapper>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${props => props.theme.colors.main};
    position: sticky;
    top: -1px;
    z-index: 2;
    box-shadow: 0 1px 4px black;
    @media screen and (max-width: 838px){
        background-color: ${props => props.theme.colors.text};
        top: 0rem;
    }
`

const  StyledWrapper = styled(Wrapper)`
    @media screen and (max-width: 838px){
        width: 90%;
    }
`

const Nav = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    height: 5rem;
    @media screen and (max-width: 838px){
        height: 6rem;
    }
`
const StyledLogo = styled.div`
    display: none;
    position: absolute;
    @media screen and (max-width: 838px){
        display: inline-block;
        left: calc(50% - 5.3rem);
    }
`

const LeftSide = styled.div`
    flex: 1;

    & div {
        @media screen and (max-width: 838px){
            display: none
        }
    }

    & #hidden{
        display: flex;
        animation: ${TurnIn} 0.8s ease-in;

        @media screen and (max-width: 838px){
            flex-direction: column;
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: auto;
            background-color: ${props => props.theme.colors.main};
            opacity: 0.9;
            z-index: 100;

            a{
                font-size: 1.5rem;
                padding: 2rem;
                border-bottom: 1px solid black;
            }
        }
    }

    & div a {
        color: ${props => props.theme.colors.text};
        margin-right: 4rem;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 700;
        @media screen and (max-width: 1264px){
            margin-right: 2rem;
            font-size: 1.3rem;
        }

        @media screen and (max-width: 966px){
            margin-right: 1rem;
            font-size: 1.2rem;
        }
    }
    
    & div a:hover {
        color: rgba(255,255,255, 0.8)
    }

    & button {
        cursor: pointer;
        border: none;
        display: none;
        @media screen and (max-width: 838px){
            display: inline-block
        }

        & i:hover{
            opacity: 0.7;
        }
    }


    & button i {
        font-size: 2rem;
        color: ${props => props.theme.colors.main};
    }
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 3rem;
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 2rem;
    background-color: ${props => props.theme.colors.text};

    @media screen and (max-width: 1057px){
        width: 12rem;
    }
    @media screen and (max-width: 838px){
        width: 9rem;
        height: 4rem;
    }
    
    & input {
        border: none;
        padding: 0.5rem;
        outline: none;
        color: ${props => props.theme.colors.gray};
        background-color: transparent;
        @media screen and (max-width: 1057px){
            width: 8rem;
        }
        @media screen and (max-width: 838px){
            width: 5rem;
            font-size: 1rem;
        }
    }

    & button {
        font-size: 1.5rem;
        border: none;
        color: ${props => props.theme.colors.gray};
        cursor: pointer;
        background-color: transparent;
    }
`

const Overlay = styled.div`
    animation: ${FadeIn} 0.8s ease-out;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,0.6);
    i {
        z-index: 100;
        position: fixed;
        color: ${props => props.theme.colors.main};
        top: 0.5rem;
        right: 1rem;
        font-size: 3rem;
        opacity: 0.8;
        cursor: pointer;
    }
`
export default Navbar;