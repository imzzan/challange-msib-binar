<!-- Cara menjalankan chllange 03 -->
1. Clone repository ini
2. Buka terminal dan arahkan ke directory challange_04 dengan cara cd challange_04
3. Lakukan npm install untuk menginstall dependency yang digunakan
4. Lakukan npm run dev untuk menjalalankan project ini
5. kemudian buka postman untuk pengecekan project
6. untuk method get langsung aja send urlnya
7. untuk method put dan post pilih body kemudian pilih form-data buat menambahkan data dan memperbarui data
8. untuk images key dalam postmannya dengan nama images dan typenya file;

<!-- link -->
http://localhost:3004

<!-- Endpoint and mathod -->
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

<!-- Dummy data buat testing -->
name : F150
rentPerDay : 20000
capacity : 4
description : Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter
availableAt : 2023-10-05 17:24:28.769+07 (Karena availableAt typenya data maka data yang dimasukin harus sesaui)
type : small
image : image dari kak haris sendiri hehe kalo pake postman

<!-- Link ERD -->
https://dbdiagram.io/d/erd_cars-65166ab2ffbf5169f0b7a279
![alt text](https://github.com/imzzan/challange-msib-binar/blob/main/challange_04/public/erd_cars.png?raw=true)
