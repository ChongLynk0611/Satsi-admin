import styled from "styled-components";
import {Link} from 'react-router-dom';

import logo from "../images/logo_to.png"

const Footer = () => {
    return (  
        <Container>
            <Box>
                <h1>
                    Satsi: Lựa chọn vì tương lai
                </h1>
                <ContainerLink>
                    <Row>
                        <Column>
                            <img id="logo" src={logo} alt="logo" />
                        </Column>
                        <Column>
                            <Heading>Thông tin liên hệ</Heading>
                            <ul>
                                <li><b>Địa chỉ:</b> 202F, Đội Cấn, Ba Đình, Hà Nội</li>
                                <li><b>Trụ sở:</b> 01-BT9, Khu Đô Thị Văn Khê, Hà Đông, Hà Nội</li>
                                <li><a href="tel: 02422371777"><b>Điện thoại:</b> 024.223.71777</a></li>
                                <li><a href="mailto: satsi.edu@gmail.com"><b>Email:</b> satsi.edu@gmail.com</a></li>
                            </ul>
                        </Column>
                        <Column>
                            <Heading>Về chúng tôi</Heading>
                            <FooterLink to="/gioi-thieu">Giới thiệu</FooterLink>
                            <FooterLink to="/tin-tuc">Tin tức</FooterLink>
                        </Column>
                        {/* <Column>
                            <Heading>Liên hệ</Heading>
                            <LinkToContact href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                                <span className="spanContact">Facebook</span>
                            </LinkToContact>
                            <LinkToContact href="mailto: satsi.edu@gmail.com">
                                <i className="far fa-envelope"></i>
                                <span className="spanContact">Email</span>
                            </LinkToContact>
                        </Column> */}
                    </Row>
                </ContainerLink>
                <div>&#169;Copyright {new Date().getFullYear()} - www.satsi.edu.vn | Bản quyền thuộc về thương hiệu SATSI</div>
            </Box>
        </Container>
    );
}
 
const Container = styled.div`
    background-color: #761c1d;
`

const Box = styled.div`
    padding: 2.5rem 60px;
    width: 100%;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }

    h1 {
        color: ${props => props.theme.colors.text};
        font-size: ${props => props.theme.fontSize.h1};
        text-align: center; 
        margin-bottom: 50px;
    }
    & > div:last-child {
        border-top: 1px solid rgba(255,255,255, 0.5);
        color: white;
        text-align: center;
        font-size: 1.5rem;
        padding-top: 2rem;
    }

    @media screen and (max-width: 1051px){
        h1{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2.5rem;
        }
    }
`;
   
const ContainerLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    img{
        margin: 0 auto;
    }
    #logo{
        max-width: 16rem;
        max-height: 16rem;
        margin-bottom: 2rem; 
    }
`
   
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 2rem;

    ul{
        li{
            color: white;
            font-size: 1.4rem;
            margin-bottom: 2rem;
            font-weight: 300;
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
`;
   
const Row = styled.div`
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(500px, 1fr) minmax(200px, 1fr);
    grid-gap: 20px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, 
                            minmax(400px, 1fr));
    }
`;
   
const FooterLink = styled(Link)`
    color: #fff;
    margin-bottom: 20px;
    font-size: 1.4rem;
    text-decoration: none;

    .spanContact{
        font-size: 1.5rem;
        margin-left: 1rem;
    }

    &:hover {
        opacity: 0.5;
        transition: 200ms ease-in;
    }
`;

// const LinkToContact = styled.a`
//     color: #fff;
//     margin-bottom: 20px;
//     font-size: 1.8rem;
//     text-decoration: none;

//     .spanContact{
//         font-size: 1.5rem;
//         margin-left: 1rem;
//     }

//     &:hover {
//         opacity: 0.5;
//         transition: 200ms ease-in;
//     }
// `
   
const Heading = styled.p`
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 25px;
    font-weight: bold;
`;

export default Footer;