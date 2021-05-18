import { useState, Fragment } from "react";
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import { Link } from "react-router-dom";


import useFetch from '../CustomHooks/useFetch';
import { Wrapper, FadeIn } from "../styled";

const Programs = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_ENDPOINT + 'Categories');
    const [active, setActive] = useState(0);
    const imgUrls = [
        'https://www.amec.com.vn/wp-content/uploads/2020/01/shutterstock_637324168-696x465-1.jpg',
        'https://duhocduc.net/uploads/du-hoc-duc/chontruongtheonganhchoduhocduc2018p23.jpg',
        'https://lh3.googleusercontent.com/proxy/fFw-W2GTq3zQqvarV7HXmktZBq_odqp5YavAH4Ox2zFr3uzK5LScyBwzgFmhgd7WdhTionOmF6UYIMGjVHjhHoAq08KZrn1XM9dsgQaN',
        'https://dwn.com.vn/wp-content/uploads/2020/05/du-hoc-nghe-co-khi-1-1-1024x597.png',
        'https://wetalent.edu.vn/wp-content/uploads/2019/06/du-hoc-duc-nganh-logistics-4.jpg',
        'https://dwn.com.vn/wp-content/uploads/2020/05/du-hoc-nghe-lai-tau-5.jpg'
    ]

    const is1000px = useMediaQuery({ query: '(max-width: 1000px)' });
    let settings = {
        focusOnSelect: true,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide:true,
        arrows:true,
        dots: false,
        speed: 1000,
        autoplay: true,
        afterChange: (current) => setActive(current)
    };

    settings = is1000px ? {
        ...settings,
        slidesToShow: 1,
        speed: 5000,
        arrows: true
    } : settings;


    const handleClick = (index) => {
        setActive(index);
    }

    return ( 
        <Container>
            { error && <div>{ error }</div>}
            { isPending && <div>loading...</div> }
            { data && 
                <StyledWrapper>
                    <ContentContainer>
                        <h1>CÁC NGÀNH DU HỌC ĐỨC</h1>
                        <StyledSlider {...settings} on={(e) => console.log(e)}>
                            { data.data.map( (program, index) => (
                                <h3
                                    className={index === active ? 'active' : ''}
                                    key={program.CategoryId}
                                    onClick={() => handleClick(index)}
                                >{program.CategoryName}</h3>
                                ))}
                        </StyledSlider>
                        { data.data.map( (program, index) => (
                            active === index ?
                                <Fragment key={program.CategoryId}>
                                    <p dangerouslySetInnerHTML={{__html: program.Detail}}></p> 
                                    <Link id="link" to={`/nghe/${program.CategoryId}`}>TÌM HIỂU NGAY</Link>
                                </Fragment>
                                : 
                                <Fragment key={program.CategoryId}></Fragment>
                        ))}
                    </ContentContainer>
                    { data.data.map( (program, index) => (
                        active === index ?<div key={program.CategoryId}><img src={imgUrls[index]} alt={program.CategoryName}/></div> : <Fragment key={program.CategoryId}></Fragment>
                    ))}
                </StyledWrapper>
            }
        </Container>
    );
}

const Container = styled.div`
`

const StyledWrapper = styled(Wrapper)`
    background-color: ${props => props.theme.colors.main};
    display: grid;
    grid-template-columns: 57% 36%;
    grid-gap: 4%;
    padding: 2rem 0rem 2rem 3rem;
    height: 50rem;

    div{
            /* height: 100%; */
        img {
            width: 100%;
            height:100%;
            object-fit: cover;
            border: 1px solid black;
            background-color: white;
            animation: ${FadeIn} 2s ease-out;
        }
    }

    @media screen and (max-width: 1000px){
        background-color: transparent;
        display: block;
        position: relative;
        div{
            img{
                opacity: 0.25;
                animation: none;
                z-index: 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
`

const ContentContainer = styled.div`
    position: relative;
    color: ${props => props.theme.colors.text};
    .active{
        color: #aaa;
    }

    .slick-track{
        text-align: center;
    }

    .slick-arrow{
        margin: 0rem 0.4rem;
    }

    ul{
        margin-left: 4rem;
    }
   
    h1{
        margin-bottom: 2rem;
        text-align: center;
    }

    h3{
        text-align: center;
        font-size: 1.8rem;
        /* padding: 0.5rem 0; */
        cursor: pointer;
        &:hover{
            opacity: 0.6;
        }
    }

    ul{
        font-size: 1.6rem;
        margin: 3rem 2rem 0 0.5rem;
        line-height: 2.6rem;
    }

    #link{
        position: absolute;
        bottom: 0.5rem;
        display: inline-block;
        margin-top: 9rem 0!important;
        border-radius: 5px;
        font-size: 1.5rem;
        padding: 1rem 2rem;
        border: 1px solid white;
        text-decoration: none;
        color: white;
        &:hover{
            opacity: 0.6;
        }
    }

    p,a {
        animation: ${FadeIn} 1.5s ease-out;
    }

    @media screen and (max-width: 1156px){
        padding-right: 1.5rem;
        h1{
            font-size: 3.2rem;
        }

        h3{
            font-size: 1.6rem;
        }
    }

    @media screen and (max-width: 1000px){
        #link{
            position: relative;
            top: 3rem;
            color: ${props => props.theme.colors.main};
            font-weight: 500;
            border-radius: 1rem;
            border: 1px solid ${props => props.theme.colors.main};
        }
        .active{
            color: ${props => props.theme.colors.main};
        }
        position: relative;
        z-index: 1;
        margin: 2rem;
        padding-right: 0;
        h1 {
            font-size: 2.5rem;
            color: black;
        }

        h3{
            color: ${props => props.theme.colors.main};
            font-size: 2rem;
            padding: 1rem 0;
            cursor: pointer;
            &:hover{
                opacity: 0.6;
            }
        }

        ul{
            li{
                color: black;
                font-weight: 500;
            }
        }

        p{
            padding: 0;
            font-weight: 500;
            color: black;
        }

        a {
            
        }

        .slick-arrow{
            margin: 0rem 1rem;
        }

        .slick-next:before, .slick-prev:before{
            color: ${props => props.theme.colors.main};
        }

        @media screen and (max-width: 1000px){
            ul{
                margin: 0;
            }
            h3{
                padding-bottom: 0.5rem;
            }
        }
    }
`

const StyledSlider = styled(Slider)`
`

export default Programs;