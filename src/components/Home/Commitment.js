import styled from 'styled-components';

import { Wrapper } from '../styled';

const Commitment = () => {
    return ( 
    <StyledWrapper>
        <CardContainer>
            <Card>
                <div><img src='https://duhocduc.edu.vn/wp-content/themes/WP-MagaNews/fpss/slideshows/frontnews/images/Dai-hoc-Bochum.jpg' alt="img" /></div>
                <h2>CAM KẾT CHẤT LƯỢNG ĐẦU RA</h2>
                <p>Đảm bảo việc làm tại các doanh nghiệp uy tín Việt Nam và Đức</p>
            </Card>
            <Card>
                <div><img src='https://duhocduc.net/uploads/du-hoc-duc/duhocduccohoivathachthuc2.jpg' alt="img" /></div>
                <h2>CAM KẾT THU NHẬP ĐẠT</h2>
                <p>Lương khởi điểm từ 70.000.000VNĐ/tháng sau tốt nghiệp</p>
            </Card>
            <Card>
                <div><img src='https://iecs.vn/wp-content/uploads/2020/05/du-hoc-Duc-cho-he-cu-nhan-va-thac-sy-8.jpg' alt="img" /></div>
                <h2>CHỨNG CHỈ, BẰNG CẤP QUỐC TẾ</h2>
                <p>Sở hữu 2 bằng được quốc tế công nhận ngay sau khi tốt nghiệp</p>
            </Card>
        </CardContainer>
    </StyledWrapper>
    );
}
 
const StyledWrapper = styled(Wrapper)`
    text-align: center;
    margin: 2rem auto;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-gap: 1%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    height: 50rem;
    @media screen and (max-width: 1100px){
        height: 100%;
        margin: 0 1rem;
        display: block;
    }
`

const Card = styled.div`
    div{
        height: 35rem;
        border: 1px solid gray;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media screen and (max-width: 1100px){
            width: 50%;
            margin: 2rem auto;
        }

        @media screen and (max-width: 838px){
            width: 60%;
        }

        @media screen and (max-width: 502px){
            width: 100%;
            margin: 2rem auto;
        }
    }
    h2{
        margin: 1rem 0 1.5rem;
        height: 2rem;
        color: ${props => props.theme.colors.main};
    }

    p{
        color: ${props => props.theme.colors.main};
        padding: 0 6rem;
    } 
`

export default Commitment;