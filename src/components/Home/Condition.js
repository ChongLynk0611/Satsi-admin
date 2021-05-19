// import { useState } from "react";
import styled from "styled-components";


import Button from "../ReuseComponents/Button";
import { Wrapper } from "../styled";

const Condition = () => {
    return ( 
        <Container>
            <StyleWrapper>
                <h1>ĐIỀU KIỆN THAM GIA ỨNG TUYỂN</h1>
                <p>Nếu bạn đáp ứng đủ các điều kiện dưới đây, kết nối ngay với SATSi để lên đường du học tại CHLB Đức:</p>
                {/* <h3>ĐIỀU KIỆN 1</h3> */}
                <h3>Nam, Nữ có độ tuổi từ 18-33 tuổi (tùy ngành nghề) và đã tốt nghiệp THPT trở lên.</h3>
                {/* <div><p>Nam, Nữ có độ tuổi từ 18-33 tuổi (tùy ngành nghề) và đã tốt nghiệp THPT trở lên.</p></div> */}
                {/* <h3>ĐIỀU KIỆN 2</h3> */}
                <h3>Lý lịch trong sạch. Không mắc các bệnh viêm gan B, C và các bệnh truyền nhiễm.</h3>
                {/* <div><p>Lý lịch trong sạch. Không mắc các bệnh viêm gan B, C và các bệnh truyền nhiễm.</p></div> */}
                {/* <h3>ĐIỀU KIỆN 3</h3> */}
                <h3>Sở hữu chứng chỉ B1/B2 tiếng Đức có thể làm thủ tục đăng ký du học ngay hôm nay (chưa có sẽ được đào tạo tại SATSi).</h3>
                {/* <div><p>Sở hữu chứng chỉ B1/B2 tiếng Đức có thể làm thủ tục đăng ký du học ngay hôm nay (chưa có sẽ được đào tạo tại SATSi).</p></div> */}
                <Button>ĐĂNG KÝ</Button>
            </StyleWrapper>
        </Container>
    );
}
 
const Container = styled.div`
    color: ${props => props.theme.colors.text};
    text-align: center;
`

const StyleWrapper = styled(Wrapper)`
    background-color: ${props => props.theme.colors.main};
    & > h1 {
        font-size: ${props => props.theme.fontSize.h1};
        padding-top: 3rem;
    }
    & > p {
        font-size: ${props => props.theme.fontSize.p};
        padding: 1rem auto; 
        line-height: 2.5rem;
    }
    & > h3 {
        padding: 1rem;
        margin: 1rem auto;
        width: 80%;
        height: auto;
        font-size: 1.5rem;
        font-weight: 700;
        color: black;
        background-color: white;
        border-radius: 6px;
        line-height: 2rem;
    }

    div:last-child{
        margin: 2rem 0 3rem;
    }

    @media screen and (max-width: 838px){
        h1 {
            font-size: 2.8rem;
        }
        p {
            padding: 1rem 5rem;
        }
        h3{
            text-align: left;
        }
    }

    @media screen and (max-width: 638px){
        padding: 0 1rem;
        h1{
            font-size: 2rem;
        }
        & > p{
            padding: 0;
        }

        h3{
            width: 100%;
            font-size: 1.5rem;
        }
    }
`

export default Condition;