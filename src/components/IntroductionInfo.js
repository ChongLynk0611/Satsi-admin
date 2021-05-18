import { useHistory } from 'react-router-dom';

import { Wrapper, InforContainer } from "./styled";

const IntroductionInfo = () => {
    const history = useHistory();

    setTimeout(function(){
        window.scrollTo(0,0);
    }, 100)

    return (  
        <Wrapper>
            <InforContainer>
                <button onClick={() => history.push('/')} className="fas fa-arrow-left"></button>
                <div>
                    <h1>SATSI - VIỆN ĐÀO TẠO KHỞI NGHIỆP VÀ ỨNG DỤNG KHOA HỌC CÔNG NGHÊ CAO</h1>
                    <p>Viện Đào tạo khởi nghiệp và Ứng dụng KHCN cao - SATSi là đơn vị trực thuộc Bộ Khoa học và Công nghệ. Đội ngũ đào tạo của Viện là những giáo sư, tiến sĩ trong lĩnh vực ứng dụng khoa học, công nghệ, kỹ thuật tiên tiến, đào tạo khởi nghiệp.</p> 
                    <p>Với 3 mục tiêu chính, SATSi tự hào nêu cao khẩu hiệu “Thắp sáng ước mơ - chung tay đào tạo nguồn nhân lực tinh hoa Việt”:</p>
                    <ul>
                        <li>Góp phần đẩy mạnh phát triển nguồn nhân lực Việt lên tầm cỡ thế giới qua các chương trình đào tạo và việc làm tốt nhất trên thế giới.</li>
                        <li>Đảm bảo đáp ứng đầy đủ mối quan tâm hàng đầu của các đơn vị đối tác về chất lượng tuyển sinh.</li>
                        <li>Đào tạo ngoại ngữ, tư vấn hướng nghiệp, bổ trợ kỹ năng mềm, hỗ trợ giúp học viên thích nghi với một trường học tập và làm việc trong thời gian ngắn nhất</li>
                    </ul>
                    <p><b>Tầm nhìn:</b> Trở thành đơn vị hàng đầu trong lĩnh vực đào tạo khởi nghiệp và ứng dụng khoa học công nghệ cao, hướng tới toàn cầu hóa.</p>
                    <p><b>Sứ mệnh:</b> Thúc đẩy hội nhập, đẩy mạnh phát triển nguồn nhân lực Việt Nam, đón đầu cuộc cách mạng công nghiệp 4.0.</p>
                    <p><b>Giá trị cốt lõi:</b> Uy tín – Chất lượng – Đạo đức – Liêm chính – Trí tuệ</p>
                </div>
            </InforContainer>
        </Wrapper>
    );
}
 
export default IntroductionInfo;