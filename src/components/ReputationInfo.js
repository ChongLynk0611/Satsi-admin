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
                <button onClick={() => history.goBack()} className="fas fa-arrow-left"></button>
                <div>
                    <h1>Lộ trình học tập và phát triển nghề nghiệp rõ ràng</h1>
                    <p>Lộ trình du học được SATSI xây dựng công khai và minh bạch với 2 giai đoạn chính:</p> 
                    <h2><b>Giai đoạn 1: Đăng ký tham gia</b></h2>
                    <ol>
                        <li>Tư vấn tổng quan về Du học Đức: Nhân viên/CTV tư vấn của SATSI tư vấn cho Khách hàng hiểu rõ về chương trình.</li>
                        <li>Hướng dẫn đăng ký tham gia chương trình: Học viên khai form, ký bản cam kết tham gia chương trình, các thủ tục nhập học, nộp hồ sơ đăng ký.</li>
                        <li>Nộp hồ sơ ban đầu bao gồm: Học bạ gốc, bằng tốt nghiệp, (hoặc giấy chứng nhận tốt nghiệp tạm thời) và các chứng chỉ có liên quan.</li>
                    </ol>
                    <h2><b>Giai đoạn 2: Hoàn thiện hồ sơ du học</b></h2>
                    <ol>
                        <li>Đào tạo tiếng Đức tại Việt Nam: Học viên được sắp xếp lớp học và KTX tại trung tâm ngoại ngữ của SATSi tại Hà nội, HCM, Hải Dương … tùy theo chương trình và sự lựa chọn của học viên.</li>
                        <li>Tư vấn chọn trường, chọn ngành: SATSi tư vấn chọn trường và ngành nghề phù hợp với từng trường hợp của học viên.</li>
                        <li>Đăng ký nhập học với trường bên Đức: Dịch thuật công chứng, chứng thực bằng cấp và Gửi hồ sơ của học sinh sang trường Đức để trường xét duyệt và xin hợp đồng đào tạo của trường và hợp đồng lao động của bộ Lao động Đức.</li>
                        <li>Tổ chức đào tạo chứng chỉ nghề cơ bản tại Việt Nam: Căn cứ vào đăng kí lựa chọn ngành nghề theo học bên Đức, các em sẽ được đào tạo một chứng chỉ nghề cơ bản tại Việt Nam lấy cơ sở làm hồ sơ.</li>
                        <li>Thi chứng chỉ ngoại ngữ: Sau khi ôn luyện, học viên được hướng dẫn đăng kí thi chứng chỉ theo yêu cầu của chương trình mình đã lựa chọn. Chương trình Du học nghề định cư tại Đức yêu cầu phải có chứng chỉ tiếng Đức B1 để nộp hồ sơ vào đại sứ quán.</li>
                        <li>Chuẩn bị hồ sơ để nộp vào Đại sứ quán Đức: Theo yêu cầu hồ sơ của Đại sứ quán (Lãnh sự quán) CHLB Đức tại Việt Nam.</li>
                        <li>Đại sứ quán ĐỨC xét duyệt hồ sơ và liên lạc phỏng vấn: SATSi chuẩn bị hồ sơ theo yêu cầu của nhà trường và hướng dẫn Du học sinh trả lời phỏng vấn với đại sứ quán.</li>
                        <li>Cấp visa du học: Sau khi hoàn thiện việc xét duyệt hồ sơ, đại sứ quán Đức sẽ cấp thị thực cho các em trong vòng 4-8 tuần.</li>
                        <li>Thủ tục tại sân bay: SATSi sẽ hướng dẫn các thủ tục cho học viên tại sân bay, sắp xếp người đưa đón giữa hai nước</li>
                        <li>Nhập học tại trường bên Đức: Sau khi qua trường Đức, học viên được sắp xếp chỗ ở. Chương trình du học nghề định cư: học viên được sắp xếp ở tại ký túc xá của trường, bắt đầu quá trình vào học B2.</li>
                        <li>Học chuyên ngành: Sau khi học xong B2, Du học sinh học tiếp lên 3 năm hoặc 2 năm rút gọn học chuyên ngành ở bên Đức.</li>
                        <li>Tốt nghiệp: Sau khi tốt nghiệp chuyên ngành, học viên được chuyển VISA đi làm. Sau 5 năm ( tính từ thời điểm đóng thuế và bảo hiểm), học viên được phép xin cấp visa định cư vĩnh viễn ở bên Đức, được bảo lãnh người thân sang sinh sống và làm việc cùng.</li>
                    </ol>
                </div>
            </InforContainer>
        </Wrapper>
    );
}
 
export default IntroductionInfo;