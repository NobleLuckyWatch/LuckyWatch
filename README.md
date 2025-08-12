# LuckyWatch
Lần đầu tiên trong lịch sử quay số trực tuyến, Noble Lucky Watch chơi lớn – công khai toàn bộ thuật toán chọn người thắng.

Mọi người đều có thể tải dữ liệu, chạy lại và kiểm chứng kết quả 100% trùng khớp, khẳng định không có bất kỳ sự can thiệp nào.

Thuật toán ứng dụng khoa học dữ liệu lưu vết theo thời gian thực thông minh để chọn ra người chiến thắng hoàn toàn ngẫu nhiên, khiến ai cũng phải tâm phục khẩu phục.

Thông tin khách hàng được mã hóa và ẩn số, đảm bảo bảo mật tuyệt đối.

Minh bạch – Chính xác – An toàn: Noble Lucky Watch đặt niềm tin người dùng lên hàng đầu.

Cấu trúc gồm:

- Participants.csv: Danh sách người tham gia (ẩn 4 số cuối SĐT).

- Seed.txt: Mã seed ngẫu nhiên, tạo từ thời gian thực ghép với mã guid bất kỳ, không thể đoán trước.

- Script.js: Mã nguồn chọn người thắng từ seed.

Tất cả file commit kèm timestamp để lưu vết và chống chỉnh sửa. 

Thuật toán chọn người thắng

Chương trình (script) nhận seed và danh sách người tham gia. Từ seed, chương trình tạo ra một số rất lớn. Lấy số đó chia cho tổng số người tham gia, phần dư chính là vị trí của người thắng trong danh sách.

Quy tắc này đảm bảo: nếu chạy lại script với cùng danh sách và seed, kết quả luôn giống 100%.

Sau quay, winner.txt được commit, cho phép mọi người tải lại dữ liệu, chạy script và xác nhận kết quả trùng khớp 100%. 

Tất cả được niêm yết công khai trên GitHub.

Hãy cùng chờ đón Noble Lucky Watch - Phát sóng định kỳ vào tối thứ 3 và thứ 6 hàng tuần
