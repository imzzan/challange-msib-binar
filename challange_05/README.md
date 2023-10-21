<!-- Cara menjalankan chllange 03 -->
1. Clone repository ini
2. Buka terminal dan arahkan ke directory challange_04 dengan cara cd challange_05
3. Lakukan npm install untuk menginstall dependency yang digunakan
4. Lakukan npm run dev untuk menjalalankan project ini

<!-- Link dokumentasi api -->
http://localhost:3004/api-docs/

<!-- Role -->
1. superadmin
2. admin
3. member

<!-- Superadmin -->
Name : Super Admin
Email : superadmin@gmail.com
Password : 12345678
Role : superadmin

<!-- link -->
http://localhost:3004

<!-- Enpoint and mathod pada auth -->
/auth/register-admin : post
/auth/register-admin : post
/auth/login/ : post
/auth/logout/ : delete
/auth/refresh-token : get


<!-- Endpoint and mathod pada cars-->
/cars : post
/cars : get
/cars/:id : get
/cars/:id : put
/cars/:id : delete

<!-- Data Cars -->
id : string
name : string
rentPerDay : number
capacity : number
description : string
availableAt : string
type : string
image_url : string
images : string


<!-- Dummy data buat testing cars-->
name : F150
rentPerDay : 20000
capacity : 4
description : Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter
availableAt : 2023-10-05 17:24:28.769+07 (Karena availableAt typenya data maka data yang dimasukin harus sesaui)
type : small
image : image dari kak haris sendiri hehe kalo pake postman

<!-- Link ERD -->
![alt text](https://github.com/imzzan/challange-msib-binar/blob/main/challange_05/public/erd_05.png?raw=true)
