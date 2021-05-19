import styled from "styled-components";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import { Wrapper } from "../styled";

const Feedback = () => {
    let settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide:true,
        swipe:true,
        arrows:false,
        dots: true,
    };

    const is838px = useMediaQuery({ query: '(max-width: 838px)' });
    const is638px = useMediaQuery({ query: '(max-width: 638px)' });

    settings = is838px ? {
        ...settings,
        slidesToShow: 2
    } : settings;

    settings = is638px ? {
        ...settings,
        slidesToShow: 1
    } : settings;

    return ( 
        <Container>
            <StyledWrapper>
                <h1>CẢM NHẬN HỌC VIÊN</h1>
                <StyledSlider {...settings}>
                    <Card>
                        <img src='https://static2.yan.vn/YanNews/2167221/201902/nam-sinh-vien-viet-nam-la-nhan-vien-cua-facebook-va-google-eb2c5afa.jpg' alt="abc" />
                        <h2>Bạn Nguyễn Trung Anh</h2>
                        <p>Đông Anh</p>
                        <p className="contentFeedBack">Mình quyết định lựa chọn ngành logistic trong chương trình tuyển sinh của SATSi sau khi được Viện tư vấn hướng nghiệp, giải đáp sinh trắc vân tay. Sau khi sang Đức và bắt đầu học nghề thì mình cảm thấy mình thực sự rất hợp với ngành logistic này, mang lại cho mình rất nhiều cảm hứng học tập và làm việc. Cảm ơn SATSi vì đã giúp mình định hướng bản thân!</p>
                    </Card>
                    <Card>
                        <img src='https://imgs.vietnamnet.vn/Images/2016/12/17/08/20161217083351-3.jpg' alt="abc" />
                        <h2>Bạn Nguyễn Thị Thùy Trang</h2>
                        <p>Hà Nội</p>
                        <p className="contentFeedBack">Hiện mình đang học nghề hưởng lương ngành khách sạn tại CHLB Đức. Mình sang đây năm 2020 nhờ sự tư vấn và hỗ trợ rất nhiệt tình của SATSi. Nếu không có Viện giúp đỡ thì chắc có lẽ hành trình du học của mình không được suôn sẻ như vậy. Thật may vì năm đó mình đã quyết định tìm đến SATSi!</p>
                    </Card>
                    <Card>
                        <img src="https://vnn-imgs-f.vgcloud.vn/2021/03/01/17/giai-phap-tang-chat-luong-hoc-truc-tuyen-cho-tre-tieu-hoc-7.jpg" alt="abc" />
                        <h2>Bạn Trịnh Hoàng Minh</h2>
                        <p>Bắc Giang</p>
                        <p className="contentFeedBack">Du học nghề Đức hiện đang là xu hướng nên hồi đầu mình cũng rất băn khoăn, sợ bị lừa, tự thân vận động thì lại không rõ thủ tục. Sau một lần tình cờ biết đến SATSi qua chương trình tư vấn hướng nghiệp, mình quyết định kết nối với Viện luôn bởi Viện trực thuộc Bộ KH&CN và hành trình du học của mình mở ra từ đây.</p>
                    </Card>
                    <Card>
                        <img src='https://static2.yan.vn/YanNews/2167221/201902/nam-sinh-vien-viet-nam-la-nhan-vien-cua-facebook-va-google-eb2c5afa.jpg' alt="abc" />
                        <h2>Bạn Nguyễn Trung Anh</h2>
                        <p>Đông Anh</p>
                        <p className="contentFeedBack">Mình quyết định lựa chọn ngành logistic trong chương trình tuyển sinh của SATSi sau khi được Viện tư vấn hướng nghiệp, giải đáp sinh trắc vân tay. Sau khi sang Đức và bắt đầu học nghề thì mình cảm thấy mình thực sự rất hợp với ngành logistic này, mang lại cho mình rất nhiều cảm hứng học tập và làm việc. Cảm ơn SATSi vì đã giúp mình định hướng bản thân!</p>
                    </Card>


                </StyledSlider>
            </StyledWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    
`
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    padding: 4rem 0 3.5rem;

    color: ${props => props.theme.colors.main};

    .slick-slide{
        padding: 1.5rem 1rem;
    }

    h1 {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 1400px) {
        width: 90%;
    }

    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 838px) {
        width: 100%;
    }   

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    }  
`

const StyledSlider = styled(Slider)`
    .slick-track{
        margin-bottom: 1rem;
    }
    & .slick-dots {
        color: ${props => props.theme.colors.main};
        text-align: center;
    }

    & .slick-dots .slick-active button::before {
        color: ${props => props.theme.colors.main};
    }

    & .slick-dots button::before {
        color: ${props => props.theme.colors.main};
        font-size: 0.8rem;
    }
    
`

const Card = styled.div`
    border-radius: 1.5rem;
    border: 0.1px solid ${props => props.theme.colors.main};
    min-height: 40rem;
    text-align: center;
    img{
        height: 12rem;
        width: 12rem;
        border-radius: 50%;
        margin: 2rem auto;
        object-fit: cover
    }
    h2{
        color: black;
    }
    h3{
        font-size: 1.5rem;
        color:  ${props => props.theme.colors.main};
        margin: 2rem 0.5rem;
        line-height: 2.3rem;
    }

    h2,p {
        color: ${props => props.theme.colors.main};
    }


    .contentFeedBack {
        text-align: justify;
        margin: 10px;   
        letter-spacing: 1px;
        line-height: 20px;
    }

    @media screen and (max-width: 838px) {
        h3{
            color: black;
            margin: 1rem 0.2rem;
        }
    }
`

export default Feedback;