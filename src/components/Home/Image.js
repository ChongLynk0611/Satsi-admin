import styled from "styled-components";

import Button from '../ReuseComponents/Button';
import { Wrapper } from "../styled";

import satsi1 from '../../images/satsiImg3.jpg'
import satsi2 from '../../images/satsiImg6.jpg'
import satsi3 from '../../images/satsiImg4.jpg'
// import banner4 from '../../images/banner4.png'
// import banner5 from '../../images/banner5.png'


const Image = () => {
    return ( 
        <Container>
            <StyledWrapper>
                <h1>HÌNH ẢNH</h1>
                <p>SATSi luôn thể hiện trách nhiệm xã hội thông qua các hoạt động đồng hành tư vấn, hướng nghiệp và đào tạo nguồn nhân lực tinh hoa Việt.</p>
                <CardContainer>
                    <Card>
                        <img src={satsi1} alt="" />
                    </Card>
                    <Card>
                        <img src={satsi2} alt="" />

                    </Card>
                    <Card>
                        <img src={satsi3} alt="" />

                    </Card>
                </CardContainer>
                <Button>ĐĂNG KÝ</Button>
            </StyledWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    background-color: ${props => props.theme.colors.main};
`
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    color: ${props => props.theme.colors.text};

    padding: 5rem 0;
    h1 {
        font-size: ${props => props.theme.fontSize.h1};
    }

    p {
        font-size: ${props => props.theme.fontSize.p};
        margin: 2rem 10rem;
    }

    Button {
        margin-top: 2rem;
    }

    

    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
        p{
            margin: 1rem 2rem;
            font-size: 1.4rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    }  
  
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 5%;
    @media screen and (max-width: 838px){
        margin: 0 1rem;
        display: block;
    }
`

const Card = styled.div`
    background-color: white;
    margin: 2rem 0;
    height: 30rem;
    border: 1px solid gray;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    @media screen and (max-width: 838px){
        width: 70%;
        margin: 1rem auto;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        margin: 1rem auto;
    }
`

export default Image;