// import { useState } from "react";
import styled from "styled-components";


import Button from "../ReuseComponents/Button";
import { Wrapper } from "../styled";

const Condition = () => {
    // const [condition, setCondition] = useState(0);

    // const handleOnclick = (condition) => {
    //     setCondition(condition);
    // }

    return ( 
        <Container>
            <StyleWrapper>
                <h1>ĐIỀU KIỆN THAM GIA ỨNG TUYỂN</h1>
                <p>Nếu bạn đáp ứng đủ các điều kiện dưới đây, kết nối ngay với SATSi để lên đường du học tại CHLB Đức:</p>
                <h3>ĐIỀU KIỆN 1</h3>
                {/* {condition === 1 ?  <div><p>Nam, Nữ có độ tuổi từ 18-33 tuổi (tùy ngành nghề) và đã tốt nghiệp THPT trở lên.</p></div> : ''} */}
                <div><p>Nam, Nữ có độ tuổi từ 18-33 tuổi (tùy ngành nghề) và đã tốt nghiệp THPT trở lên.</p></div>
                <h3>ĐIỀU KIỆN 2</h3>
                {/* {condition === 2 ?  <div><p>Lý lịch trong sạch. Không mắc các bệnh viêm gan B, C và các bệnh truyền nhiễm.</p></div> : ''} */}
                <div><p>Lý lịch trong sạch. Không mắc các bệnh viêm gan B, C và các bệnh truyền nhiễm.</p></div>
                <h3>ĐIỀU KIỆN 3</h3>
                {/* {condition === 3 ?  <div><p>Sở hữu chứng chỉ B1/B2 tiếng Đức có thể làm thủ tục đăng ký du học ngay hôm nay (chưa có sẽ được đào tạo tại SATSi).</p></div> : ''} */}
                <div><p>Sở hữu chứng chỉ B1/B2 tiếng Đức có thể làm thủ tục đăng ký du học ngay hôm nay (chưa có sẽ được đào tạo tại SATSi).</p></div>
                <Button>ĐĂNG KÝ</Button>
            </StyleWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.text};
    text-align: center;
`

const StyleWrapper = styled(Wrapper)`
    & > h1 {
        font-size: ${props => props.theme.fontSize.h1};
        padding-top: 3rem;
    }
    & > p {
        font-size: ${props => props.theme.fontSize.p};
        padding: 1rem 10rem; 
        line-height: 2.5rem;
    }
    & > h3 {
        display: block;
        text-decoration: none;
        margin: 1rem auto;
        width: 80%;
        height: 4rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.colors.main};
        background-color: white;
        border-radius: 6px;
        line-height: 4rem;
        /* cursor: pointer; */
        
        /* &:hover{
            opacity: 0.8;
        } */
    }

    div:not(:last-child) {
        width: 80%;
        margin: 1rem auto;
        padding: 1rem;
        /* background-color: white; */
        color: black;
        height: auto;
        border-radius: 6px;
        p {
            font-size: 1.8rem;
            /* margin: 7px 0 0 30px/; */
            /* color: ${props => props.theme.colors.main}; */
            color: white;
        }
    }

    div:last-child{
        margin: 2rem 0 3rem;
    }

    @media screen and (max-width: 838px){
        h1 {
            font-size: 3rem;
        }
        & > p {
            padding: 1rem 5rem;
        }
    }

    @media screen and (max-width: 638px){
        padding: 0 1rem;
        & > p{
            padding: 0;
        }

        h3, div:not(:last-child) {
            width: 100%;
        }
    }
`

export default Condition;