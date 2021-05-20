import styled from "styled-components";
import { Link } from 'react-router-dom';

import { Wrapper } from "../styled";

const News = () => {
    const news = [
        {
            title: 'Góc ngẫm nghĩ: Khắc phục bệnh phô trương thành tích trong giáo dục có khó?',
            content: 'Bệnh thành tích đã và đang là một thực trạng đáng buồn của ngành giáo dục nước ta.',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: 'https://image.thanhnien.vn/660x370/uploaded/hoangnam/2021_05_18/a_tbhd.jpg',
            id: 1,
        },
        {
            title: 'Vì sao ít thí sinh đăng ký học cao đẳng sư phạm mầm non?',
            content: 'Thống kê nguyện vọng đăng ký xét tuyển ĐH của thí sinh trên cả nước năm 2021 của Bộ GD-ĐT cho thấy CĐ Sư phạm mầm non là ngành có số lượng đăng ký nguyện vọng ít nhất. Vì sao lại có hiện tượng này?',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: 'https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 2,
        },
        {
            title: 'Cập nhật thông tin để có điểm cao thi THPT môn giáo dục công dân',
            content: 'Với thời lượng học chỉ có 45 phút/tiết/tuần và rất ít các trung tâm tổ chức luyện thi, vậy làm thế nào để đạt điểm cao môn giáo dục công dân trong kỳ thi tốt nghiệp THPT sắp tới?',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: 'https://images.pexels.com/photos/4498039/pexels-photo-4498039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 3,
        },
        {
            title: 'Dịch Covid-19: một trường ĐH hủy kỳ thi học kỳ vào phút chót',
            content: 'Trước diễn biến dịch Covid-19, một trường ĐH tại TP.HCM thông báo hủy lịch thi học kỳ ngay trong đêm trước ngày diễn ra kỳ thi.',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: 'https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 4,
        },
    ];

    return (  
        <StyledWrapper>
            <h1><Link to="/tin-tuc">TIN TỨC & SỰ KIỆN</Link></h1>
            <NewsContainer>
                <LeftSide href='/'>
                    <img src={news[0].img} alt={news[0].title}/>
                    <Content>
                        <h3>{news[0].title}</h3>
                        <div>
                            <p>{news[0].date.toLocaleDateString('en-GB')}</p>
                            <p>{news[0].type}</p>
                            <p>{news[0].author}</p>
                        </div>
                        <p>{news[0].content}</p>
                    </Content>
                </LeftSide>
                <RightSide>
                    <ItemRightSide href='/'>
                        <img src={news[1].img} alt={news[1].title}/>
                        <Content>
                            <h3>{news[1].title}</h3>
                            <div>
                                <p>{news[1].date.toLocaleDateString('en-GB')}</p>
                                <p>{news[1].type}</p>
                                <p>{news[1].author}</p>
                            </div>
                            <p>{news[1].content}</p>
                        </Content>
                    </ItemRightSide>
                    <ItemRightSide href='/'>
                        <img src={news[2].img} alt={news[2].title}/>
                        <Content>
                            <h3>{news[2].title}</h3>
                            <div>
                                <p>{news[2].date.toLocaleDateString('en-GB')}</p>
                                <p>{news[2].type}</p>
                                <p>{news[2].author}</p>
                            </div>
                            <p>{news[2].content}</p>
                        </Content>
                    </ItemRightSide>
                    <ItemRightSide href='/'>
                        <img src={news[3].img} alt={news[3].title}/>
                        <Content>
                            <h3>{news[3].title}</h3>
                            <div>
                                <p>{news[3].date.toLocaleDateString('en-GB')}</p>
                                <p>{news[3].type}</p>
                                <p>{news[3].author}</p>
                            </div>
                            <p>{news[3].content}</p>
                        </Content>
                    </ItemRightSide>
                </RightSide>
            </NewsContainer>
            <Link id="Link" to="/tin-tuc">Xem thêm</Link>
        </StyledWrapper>
    );
}
 
const StyledWrapper = styled(Wrapper)`
    padding: 2.5rem 0 1.5rem;
    text-align: center;
    margin: 2rem auto;
    border-top: 1px solid black;

    h1{
        font-size: ${props => props.theme.fontSize.h1};
        a{
            text-decoration: none;
            color: ${props => props.theme.colors.main};
        }
        &:hover{
            opacity: 0.6;
        }
    }

    #Link {
        font-size: 2rem;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.main};
        text-decoration: none;
        border-radius: 1rem;
        border: 1px solid white;
        padding: 1rem 2rem;

        &:hover{
            opacity: 0.6;
        }
    }
    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    } 
`
const NewsContainer = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 50% 48%;
    grid-gap: 1%;
    @media screen and (max-width: 838px){
        display: block;
        margin: 2rem;
    }
`

const LeftSide = styled.a`
    text-decoration: none;
    img{
        display: inline-block;
        height: 30rem;
        width: 100%;
        /* border: 0.1px solid black; */
        object-fit: cover;
    
        &:hover{
            opacity: 0.7
        }
    }

    & > div {
        color: gray;
        /* background-color: #4e2f2a; */
        padding: 1rem 0 2rem;
        h3 {
            color: black;
            margin: 0.5rem 0;
            &:hover{
                color: #b32c02;
            }
        }
    }
`

const RightSide = styled.div`
    margin-left: 1rem;
    display: grid;
    grid-row: auto auto auto;
    grid-gap: 5%;

    @media screen and (max-width: 838px){
        margin: 2rem 0 0 0;
        grid-gap: 2%;
    }
    @media screen and (max-width: 500px){
        display: block;
    }
`

const ItemRightSide = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    color: gray;

    img {
        height: 10rem;
        width: auto;
        /* border: 1px solid black; */
        object-fit: cover;
        &:hover{
            opacity: 0.7
        }
    }

    & > div {
        width: 100%;
        margin-left: 1rem;
     
        @media screen and (max-width: 838px){
            height: 12rem
        }
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
        margin-bottom: 1rem;
        & > div {
            margin-left: 0;
        }
        img{
            margin-bottom: 1rem;
            height: 30rem;
            width: 100%;
        }
    }
`


const Content = styled.div`
    text-align: left;
    h3 {
        color: black;
        font-size: 1.55rem;
        &:hover{
            color: #b32c02;
        }
    }

    & > p{
        line-height: 1.5rem;
        font-size: 1.2rem;
    }

    div {
        display: flex;
        margin: 0.5rem 0;
        p{
            font-size: 1.2rem;
            margin-right: 1rem;
            font-weight: 500;
        }
    }
`

export default News;