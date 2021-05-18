import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../styled";

const Itinerary = () => {
    return (  
        <Container>
            <StyledWrapper>
                <Link to="/lo-trinh">
                    <h1>LỘ TRÌNH DU HỌC TẠI ĐỨC</h1>
                    <p>Lộ trình du học được SATSi xây dựng rõ ràng, công khai và minh bạch. Đặc biệt, SATSi luôn ở bên đồng hành và hỗ trợ học viên trong suốt hành trình du học.</p>
                </Link>
            </StyledWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    background-color: ${props => props.theme.colors.text};
    padding: 1rem 0 ;
`

const StyledWrapper = styled(Wrapper)`
    margin-bottom: 40px;
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.text};
        height: 25rem;
        text-decoration: none;
    
    }

    a h1{
        font-size: ${props => props.theme.fontSize.h1};
        padding: 2rem;
    }
    a p{
        margin: 0 10rem;
        line-height: rem;
        font-size: ${props => props.theme.fontSize.p};
    }

    a h1, a p {
        &:hover{
            opacity: 0.6;
        }
    }
    @media screen and (max-width: 838px){
        h1{
            font-size: 2.5rem;
        }
        a p{
            margin: 0 1rem;
        }
    }
`

export default Itinerary;