Practice NodeJS:
Viết API quản lí học sinh của một ngôi trường (sử dụng Express, NodeJS):

**KHÔNG CẦN DB, SỬ DỤNG ARRAY ĐỂ LƯU TẠM KHI CHẠY 

Enitity:
   - Student:
         + ID: unique
         + Name: tên học sinh
         + Class: lớp mà học sinh thuộc về.
   - Class:
         + ID: unique
         + Class Name: tên lớp

Constraints:
   - 1 HS chỉ thuộc về duy nhất 1 class
   - Class Name không được phép trùng
   - Student Name không được phép trùng.
   - 1 HS phải thuộc về 1 class nào đó.
   - 1 Class có thể có nhiều học sinh

APIs:
   - Quản lí học sinh:
        + Thêm Học Sinh
        + Update thông tin học sinh
        + Xóa học sinh
        + Truy xuất tất cả danh sách học sinh
        + Truy xuất thông tin HS theo ID
        + Truy xuất thông tin HS theo Name (search LIKE)
        + Truy xất tất cả học sinh theo Class (sử dung Class Name).

   - Quản lí Lớp:
        + Thêm 1 Lớp
        + Update thông tin Lớp
        + Xóa Lớp (nếu lớp còn HS thì ko được phép xóa)
        + Truy xuất thông tin Lớp theo ID

Due Date: 10/12/2024