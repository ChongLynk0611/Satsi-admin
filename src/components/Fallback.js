import styled from "styled-components";

const Fallback = () => {
    return (  
        <Container>
            <Loader></Loader>
        </Container>
    );
}
 
const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loader = styled.div`
    margin: auto;
    text-align: center;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid ${props => props.theme.colors.main};
    width: 70px;
    height: 70px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default Fallback;