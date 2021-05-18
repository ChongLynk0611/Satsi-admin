import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.pageYOffset > 500){
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
    
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [])

    return ( 
        <>
            {isVisible && (
                <StyledScroll onClick={scrollToTop}>
                    <i className="fas fa-chevron-up"></i>
                </StyledScroll>
            )}
        </>
    );
}
 
const StyledScroll = styled.div`
    display: inline-block;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 2.2rem;
    border: 1px solid gray;
    border-radius: 50%;
    width: 2.7rem;
    height: 2.7rem;
    background-color: red;
    opacity: 0.4;
    text-align: center;
    color: white;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`

export default ScrollToTop;