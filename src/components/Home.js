import styled from "styled-components";
import Certificate from "./Home/Certificate";
import Commitment from "./Home/Commitment";
import Condition from "./Home/Condition";
import Feedback from "./Home/Feedback";
import Image from "./Home/Image";
import ImageSlider from "./Home/ImageSlider"
import Introduction from "./Home/Introduction";
import Itinerary from "./Home/Itinerary";
import News from "./Home/News";
import Programs from "./Home/Programs";
import Reputaion from "./Home/Reputation";

const Home = () => {
    return ( 
        <HomeContainer>
            <ImageSlider />
            <Introduction />
            <Reputaion />
            <Programs />
            {/* <Certificate /> */}
            <Commitment />  
            <Itinerary />
            <Image />
            <Feedback />
            <News />
            <Condition />
        </HomeContainer>
    );
}
 
const HomeContainer = styled.div`
`

export default Home;