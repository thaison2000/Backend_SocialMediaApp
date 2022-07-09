# Backend_SocialMediaApp

- [Deployment](#deployment)
- [Documents](#documents)
  - [Requirements](#requirements)
  - [UseCases](#usecases)
  - [Services](#services)
  
 ## Deployment
 Không sử dụng docker 
 +) Clone code về máy 
 ...
 $ git clone https://github.com/thaison2000/Backend_SocialMediaApp
 ...
 
 ## Documents
 
 ### Requirements
 - NodeJS
 - Socket.io
 - MongoDB
 - Docker
 
 ### UseCases
 - Use Case Diagram:
 ![Diagram](docs/usecases_diagram.jpg)
 - Use Cases for User:
    + Dang nhap/Dang ky/Dang xuat
    + Cap nhat thong tin ca nhan
    + Tao/sua/xoa bai viet
    + Tim kiem
    + Ket ban
    + Nhan tin
    + Tuong tac voi bai viet(yeu thich, binh luan, chia se)
    + Nhan thong bao
 - Use Cases for Admin:
    + Dang nhap/Dang ky/Dang xuat
    + Cap nhat thong tin ca nhan
    + Quan ly tai khoan nguoi dung
    + Quan ly mang xa hoi
    
 ### Services
 - Chia lam 3 services chinh:
    + user service
    + post service
    + chat service
    + socket service
 - Kien truc thiet ke:
 ![Diagram](docs/Microservice.JPG)
 
