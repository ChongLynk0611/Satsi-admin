import styled from 'styled-components';
import {Wrapper} from '../styled/index';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return ( 
        <IntroductionWrapper>
            <Description>
                <Link to="/gioi-thieu">
                    <h1>SATSI - VIỆN ĐÀO TẠO KHỞI NGHIỆP VÀ ỨNG DỤNG KHOA HỌC CÔNG NGHỆ CAO</h1>
                    <p>SATSi là đơn vị trực thuộc Bộ Khoa học và Công nghệ, được thành lập bởi đội ngũ chuyên gia hàng đầu và tâm huyết với mong muốn trở thành cánh tay nối dài, cầu nối cho thế hệ trẻ đi đến tương lai.</p>
                </Link>
            </Description>
            <VideoContainer>
                <PlayerContainer>
                    <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=L6s5Jtr7xjo' />
                </PlayerContainer>
                <VideoDescription>
                    <p>Viện Đào tạo khởi nghiệp và Ứng dụng KHCN cao - SATSi là đơn vị trực thuộc Bộ Khoa học và Công nghệ. Đội ngũ đào tạo của Viện là những giáo sư, tiến sĩ trong lĩnh vực ứng dụng khoa học, công nghệ, kỹ thuật tiên tiến, đào tạo khởi nghiệp.</p>
                </VideoDescription>
            </VideoContainer>
        </IntroductionWrapper>
    );
}
 
const IntroductionWrapper = styled(Wrapper)`
    padding: 2rem 0;
`

const Description = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2.5rem;
    text-align: center;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.main};
    }

    h1, p {
        &:hover{
            opacity: 0.7;
        }
    }

    & h1 {
        font-size: ${props => props.theme.fontSize.h1};
        padding: 1.5rem 5rem;
    }

    & p{
        font-size: ${props => props.theme.fontSize.p};
        line-height: 3rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1051px){
        h1{
            font-size: 2.8rem;
            padding: 0;
        }

        p{
            line-height: 2.5rem;
            font-size: 1.3rem;
            padding: 0;
        }
    }
    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`

const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
    @media screen and (max-width: 838px){
        display: block;
        padding: 0 1rem;
    }
`

const PlayerContainer = styled.div`
    text-align: center;
    height: 36rem;
    @media screen and (max-width: 838px){
        height: 40rem;
    }
`

const VideoDescription = styled.div`
    display: flex;
    justify-items: center;
    text-align: center;
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.text};
    padding: 3rem;
    p{
        line-height: 2.5rem;
        font-size: ${props => props.theme.fontSize.p};
        margin: auto 0;
    }
    @media screen and (max-width: 838px){
        padding: 1.5rem;
        line-height: 2rem;
        font-size: 1.3rem;
    }
`

export default Introduction;