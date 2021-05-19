import styled from "styled-components";
import { useState } from 'react';

import { Wrapper } from "./styled";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('none');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inforCustomer = { name, phoneNumber, email, service};


        fetch('', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inforCustomer)
        }).then(() => {
            console.log('new blog added');
        })

    }

    return (
        <Container>
            <StyledWrapper>
                <Title>
                    <h1>BẠN MUỐN DU HỌC ĐỨC NHƯNG CHƯA BIẾT CHUẨN BỊ TỪ ĐÂU?</h1>
                    <p>Hãy để SATSi là cánh tay nối dài giúp bạn tự tin trên hành trình du học của mình. Kết nối với chúng tôi để nhận được hỗ trợ uy tín và chuyên nghiệp!</p>
                </Title>
                <form id="contactForm" onSubmit={(e) => handleSubmit(e)} >
                    <div className="form-row">
                        <div className="input-data">
                            <input 
                                type="text" 
                                value={name}
                                onChange={e => setName(e.target.value)} 
                                required
                            />
                            <label>Họ và Tên</label>
                        </div>
                        <div className="input-data">
                            <input 
                                type="text" 
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)} 
                                required
                            />
                            <label>Số điện thoại</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input 
                                type="text" 
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-data">
                            <select 
                                required 
                                value={service}
                                onChange={e => setService(e.target.value)} 
                            >
                                <option value="none" disabled>Dịch vụ quan tâm</option>
                                <option value="Du học Đức">Du học Đức</option>
                                <option value="Du học Úc">Du học Úc</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row submit-btn">
                        <div className="input-data">
                            <input 
                                type="submit" 
                                value="ĐĂNG KÝ NGAY" 
                            />
                        </div>
                    </div>
                </form>
            </StyledWrapper>
        </Container>  
    );
}
 
const Container = styled.div`

`

const StyledWrapper = styled(Wrapper)`
    margin: 4rem auto 5rem;

    form {
        border: 2px solid rgba(0,0,0,0.3);
        border-radius: 7px;
        .form-row{
            display: flex;
            margin: 2rem 0;
            @media screen and (max-width: 700px){
                display : block;
            }
        }

        .input-data{
            width: 100%;
            height: 4rem;
            margin: 0 2rem;
            position: relative;

            @media screen and (max-width: 700px){
                width: auto;
                margin: 2rem;
            }

            input:focus ~ label,
            input:valid ~ label {
                transform: translateY(-2.4rem);
                color: ${props => props.theme.colors.main};
                opacity: 0.8;
                font-size: 1.4rem;
                transition: all 0.3s ease;
            }

            input, select {
                display: block;
                height: 100%;
                width: 100%;
                border: none;
                font-size: 1.6rem;
                border-bottom: 2px solid rgba(0,0,0,0.12);
                outline: none;
            }

            label {
                position: absolute;
                bottom: 1rem;
                font-size: 1.6rem;
                pointer-events: none;
            }

            select option {
                padding: 0 auto;
            }
        }

        & > .submit-btn{
            height: 4.5rem !important;
            width: 25% ;
            margin: 4rem auto;

            @media screen and (max-width: 700px){
                width: 100%;
            }

            input {
                cursor: pointer;
                background-color: ${props => props.theme.colors.main};
                opacity: 0.9;
                color: ${props => props.theme.colors.text};
                border: 1px solid gray;
                border-radius: 6px;
            }

            input:hover{
                opacity: 0.7;
            }
        }
    }
`

const Title = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.main};

    h1{
        font-size: ${props => props.theme.fontSize.h1};
        @media screen and (max-width: 700px){
            font-size: 2.5rem;
        }
    }
    p{
        font-size: ${props => props.theme.fontSize.p};
        margin: 2rem 2rem 3rem;
        @media screen and (max-width: 700px){
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 1000px){
        h1{
            font-size: 2.8rem;
        }
    }

    @media screen and (max-width: 615px){
        h1{
            font-size: 2rem;
        }
    } 
`

export default ContactUs;