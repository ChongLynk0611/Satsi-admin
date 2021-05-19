import Slider from 'react-slick';
import styled from 'styled-components';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import banner4 from '../../images/banner4.png'
import banner5 from '../../images/banner5.png'

const ImageSlider = () => {
    let arrImages = [banner1, banner2, banner3, banner4, banner5];

    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return ( 
        <div>
            <Carousel {...settings}>
                {arrImages.map(img => (
                    <ImgContainer key={img}>
                        <img src={img} alt={img} />
                    </ImgContainer>
                ))}
            </Carousel>
        </div>
     );
}

const Carousel = styled(Slider)`
    overflow: hidden;
    z-index: 1;

    & .slick-arrow{
        z-index: 2;
        width: 9rem;
        height: 9rem;
    }

    & .slick-prev::before, & .slick-next::before {
        font-size: 3.6rem;
        color: gray;
        opacity: 1;
    }

    & .slick-prev:hover::before, & .slick-next:hover::before{
        opacity: 0.4;
    }

    & .slick-dots {
        bottom: 3px;
        color: ${props => props.theme.colors.main};
    }

    & .slick-dots .slick-active button::before {
        color: ${props => props.theme.colors.main};
    }

    & .slick-dots button::before {
        color: ${props => props.theme.colors.main};
        font-size: 0.8rem;
    }

    @media screen and (max-width: 500px){
        & .slick-prev::before, & .slick-next::before {
            font-size: 3.6rem;
            color: ${props => props.theme.colors.main};
            opacity: 0.4;
        }
    }
`

const ImgContainer = styled.div`
    & img{
        max-width: 100%;
        height: auto;
    }
`

export default ImageSlider;