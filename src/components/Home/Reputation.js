import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Button from '../ReuseComponents/Button';
import { Wrapper } from '../styled';

const Reputaion = () => {
    return ( 
        <ReputaionContainer>
            <StyledWrapper>
                <h1>SATSI - UY TÍN SỐ 1 VỀ DU HỌC ĐỨC</h1>
                <CardContainer>
                    <Card>
                        <Link to="/lo-trinh">
                            <img src="https://duhocnghe.com/uploads/du-hoc-nghe-duc/cac-nganh-nghe-thieu-lao-dong-o-duc-5.jpg" alt="abc" />
                            <h2>Đối tác tại Đức và ngành nghề đa dạng</h2>
                        </Link>
                    </Card>
                    <Card>
                        <Link to="/lo-trinh">
                            <img src="https://tanthanh.com.vn/wp-content/uploads/2021/01/Khu%C3%B4n-vi%C3%AAn-tr%C6%B0%E1%BB%9Dng-%C4%90%E1%BA%A1i-h%E1%BB%8Dc-H%C3%A0-N%E1%BB%99i.jpg" alt="abc" />
                            <h2>Hợp tác độc quyền với trường ĐH Hà Nội đào tạo tiếng Đức cho học viên</h2>
                        </Link>
                    </Card>
                    <Card >
                        <a rel="noreferrer" href="https://docs.google.com/presentation/d/1Q0fF7CJTHZfrQUO_KkeaMHy-_eVGQWh6/edit#slide=id.p3" target="_blank">
                            <img src='https://i.ytimg.com/vi/9pVQOjxyiPg/maxresdefault.jpg' alt="abc" />
                            <h2>Phần mềm hỗ trợ học tập thông minh - học từ xa</h2>
                        </a>
                    </Card>
                    <Card>
                        <Link to="/lo-trinh">
                            <img src='https://eduviet.vn/wp-content/uploads/2014/06/phat-trien-lo-trinh-cong-danh-1280x720.png' alt="abc" />
                            <h2>Lộ trình học tập và phát triển nghề nghiệp rõ ràng</h2>
                        </Link>
                    </Card>
                </CardContainer>
                <Button>
                    ĐĂNG KÝ
                </Button>
            </StyledWrapper>
        </ReputaionContainer>
    );
}

const ReputaionContainer = styled.div`
    /* background-color: ${props => props.theme.colors.main}; */
`
const StyledWrapper = styled(Wrapper)`
    padding: 2rem 0 4rem;
    text-align: center;
    color: ${props => props.theme.colors.main};
    h1{
        font-size: ${props => props.theme.fontSize.h1};
        @media screen and (max-width: 1051px){
            font-size: 2.8rem;
        }

        @media screen and (max-width: 615px){
            font-size: 2rem;
        }
    }

    button {
        border: 1px solid ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.main};
    }

`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 21% 21% 21% 21%;
    grid-gap: 2.5%;
    justify-content: center;
    align-items: center;
    margin: 1.8rem 0 2.2rem;
    @media screen and (max-width: 1300px){
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
    cursor: pointer;
    background-color: ${props => props.theme.colors.main};
    
    background-color: white;
    margin: 2rem 0;
    padding: 2rem 2rem 0;
    border-radius: 1.5rem;
    border: 1px solid gray;
    justify-content: center;
    align-items: center;
    height: 30rem;
    img{
        height: 20rem;
        width: 20rem;
        object-fit: cover;
        border-radius: 50%;
        /* border: 1px solid gray; */
    }
    h2{
        color: ${props => props.theme.colors.main};
        margin-top: 2rem;
    }

    &:hover {
        box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.5);
        opacity: 0.9;
    }

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 838px){
        width: 60%;
        margin: 2rem auto;
    }

    @media screen and (max-width: 502px){
        width: 100%;
        margin: 2rem auto;
    }
`

export default Reputaion;