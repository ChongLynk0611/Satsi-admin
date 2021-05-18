import styled from "styled-components";
import { Wrapper } from "../styled";

const Certificate = () => {
    return ( 
        <StyledWrapper>
            <h1>GIẤY CHỨNG NHẬN LIÊN KẾT</h1>
            <p>SATSi đã kết nối với rất nhiều đơn vị uy tín tại Việt Nam và CHLB Đức nhằm đảm bảo chất lượng đào tạo, chất lượng đầu ra cho nguồn nhân lực tinh hoa Việt.</p>
            <CardContainer>
                <Card>

                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
            </CardContainer>
        </StyledWrapper>
    );    
}
 
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    color: ${props => props.theme.colors.main};

    padding: 3rem 0;
    h1 {
        font-size: ${props => props.theme.fontSize.h1};
    }

    p {
        font-size: ${props => props.theme.fontSize.p};
        margin: 2rem 10rem;
    }

    @media screen and (max-width: 1100px){
        h1{
            font-size: 3rem;
        }
        p {
            margin: 1rem 4rem;
        }
    }

    @media screen and (max-width: 838px){
        h1{
            font-size: 2.5rem;
        }
        p {
            margin: 0.5rem 1rem;
        }
    }
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 6.5%;
    @media screen and (max-width: 1100px){
        grid-template-columns: 50% 50%;
        grid-gap: 3%;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 838px){
        margin: 0 1rem 1rem;
        display: block;
    }
`

const Card = styled.div`
    background-color: white;
    margin: 2rem 0;
    height: 35rem;
    border: 1px solid gray;
    @media screen and (max-width: 838px){
        width: 60%;
        margin: 2rem auto;
    }

    @media screen and (max-width: 502px){
        width: 100%;
        margin: 2rem auto;
    }
`
export default Certificate; 