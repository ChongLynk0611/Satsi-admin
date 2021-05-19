import styled from "styled-components";
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
                            <img src={logo} alt="logo" />
                        </Column>
                        <Column>
                            <Heading>Về chúng tôi</Heading>
                            <FooterLink href="#">Giới thiệu</FooterLink>
                            <FooterLink href="#">Tin tức</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Dịch vụ</Heading>
                            <FooterLink href="#">Du học đức</FooterLink>
                            <FooterLink href="#">Du học úc</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Liên hệ</Heading>
                            <FooterLink href="mailto: satsi.edu@gmail.com">
                                <i className="far fa-envelope"></i>
                                <span className="spanContact">Email</span>
                            </FooterLink>
                            <FooterLink href="tel: +84962917755">
                                <i className="fas fa-phone-alt"></i>
                                <span className="spanContact">Số điện thoại</span>
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                Facebook
                                </span>
                            </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                Instagram
                                </span>
                            </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                Twitter
                                </span>
                            </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                Youtube
                                </span>
                            </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </ContainerLink>
                <div>&#169;Copyright {new Date().getFullYear()} - www.satsi.edu.vn | Bản quyền thuộc về thương hiệu SATSI</div>
            </Box>
        </Container>
    );
}
 
const Container = styled.div`
    background-color: #520505;
`

const Box = styled.div`
    padding: 4rem 60px;
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
`;
   
const ContainerLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    #logo{
        max-width: 16rem;
        max-height: 16rem;
        margin-bottom: 2rem;
        background-color: white; 
    }
`
   
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;

    @media screen and (max-width: 700px){
        margin-left: 0;
        text-align: center;
    }
`;
   
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 
                            minmax(185px, 1fr));
    grid-gap: 20px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, 
                            minmax(200px, 1fr));
    }
`;
   
const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 1.6rem;
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
   
const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

export default Footer;