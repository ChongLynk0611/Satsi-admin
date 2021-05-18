import styled from "styled-components";
import { Link } from 'react-router-dom';

import { Wrapper } from "../styled";
import Slider from "react-slick";

const News = () => {
    const news = [
        {
            title: '1 TIÊU ĐỀ BÀI VIẾT',
            content: 'Lorem ipsum ng elit. Architecto,aceat sequi! Dignissimos neque, doloribus iusto debitis quasi veritatis nisi commodi porro, laborum maxime, error sequi soluta.',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: '',
            id: 1,
        },
        {
            title: '2 TIÊU ĐỀ BÀI VIẾT',
            content: 'Lorem ipsum ng elit. Architecto, et veritatis aut magni placeat sequi! Dignissimos neque, doloribus iusto debitis quasi veritatis nisi commodi porro, laborum maxime, error sequi soluta.',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: '',
            id: 1,
        },
        {
            title: '3 TIÊU ĐỀ BÀI VIẾT',
            content: 'Lorem ipsum ng elit. Architecto, et veritatis aut magni placeat sequi! Dignissimos neque, doloribus iusto debitis quasi veritatis nisi commodi porro, laborum maxime, error sequi soluta.',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: '',
            id: 1,
        },
        {
            title: '4 TIÊU ĐỀ BÀI VIẾT',
            content: ' Architecto, et veritatis aut magni placeat sequi! Dignissimos neque, doloribus iusto debitis quasi veritatis nisi commodi porro, laborum maxime, error sequi soluta.',
            type: 'TIN TỨC',
            author: 'ADMIN',
            date: new Date(),
            img: '',
            id: 1,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };

    return (  
        <StyledWrapper>
            <h1>TIN TỨC & SỰ KIỆN</h1>
            <NewsContainer>
                <Slider {...settings}>
                    {news.map(n => (
                        <Link to='/' key={n.id}>
                            <img src={n.img} alt={news.title}/>
                            <Content>
                                <h3>{news.title}</h3>
                                <div>
                                    <p>{news[0].date.toLocaleDateString('en-GB')}</p>
                                    <p>{news[0].type}</p>
                                    <p>{news[0].author}</p>
                                </div>
                                <p>{news[0].content}</p>
                            </Content>
                        </Link>
                    ));}
                </Slider>
            </NewsContainer>
        </StyledWrapper>
    );
}
 
const StyledWrapper = styled(Wrapper)`
  
`
const NewsContainer = styled.div`
   
`
const Content = styled.div`

`

export default News;