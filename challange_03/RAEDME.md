<!-- Cara menjalankan chllange 03 -->
1. Clone repository ini
2. Buka terminal dan arahkan ke directory challange_03 dengan cara cd challange_03
3. Lakukan npm install untuk menginstall dependency yang digunakan
4. Lakukan npm run dev untuk menjalalankan project ini
5. kemudian buka postman untuk pengecekan project
6. untuk method get langsung aja send urlnya
7. untuk method put dan post pilih body kemudian pilih form-data buat menambahkan data dan memperbarui data

<!-- Endpoint and mathod -->
/cars : post
/cars : get
/cars/:id : get
/cars/:id : put
/cars/:id : delete


<!-- Data Cars -->
id : number
rentPerDay : number
capacity : number
description : string
availableAt : string
images : file (string)