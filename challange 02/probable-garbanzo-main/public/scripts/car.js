class Car {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
    this.btnCariMobil = document.getElementById("btn-cari-mobil");
    this.driverTipe = document.getElementById("driver-tipe");
    this.tanggalSewa = document.getElementById("tanggal-sewa");
    this.waktuAmbil = document.getElementById("waktu-ambil");
    this.jumblahPenumpang = document.getElementById("jumlah-penumpang");
    this.textJikaSalah = document.getElementById("text-jika-salah");
    this.btnResetMobil = document.getElementById("btn-reset-mobil");
  }

  async init() {
    await this.load();
    this.btnCariMobil.onclick = this.run;
    this.btnResetMobil.style.display = "none";
    this.btnResetMobil.onclick = this.clear;
  }

  run = () => {
    let valueDriverTipe =
      this.driverTipe.options[this.driverTipe.selectedIndex].value;
    let valueWaktuAmbil =
      this.waktuAmbil.options[this.waktuAmbil.selectedIndex].value;
    let dateWaktuAmbil = new Date(
      `${this.tanggalSewa.value} ${valueWaktuAmbil}`
    );

    console.log(valueDriverTipe);
    console.log(dateWaktuAmbil);
    console.log(this.jumblahPenumpang.value);

    if (
      valueDriverTipe === '' ||
      dateWaktuAmbil === 'Invalid Date' ||
      this.jumblahPenumpang.value === ''
    ) {
      this.textJikaSalah.innerHTML = 'Please pilih option dengan benar!!'
    } else {
      Component.list
        .filter((item) => {
          return (
            item.transmission == valueDriverTipe &&
            new Date(item.availableAt).getTime() >= dateWaktuAmbil &&
            item.available &&
            item.capacity >= this.jumblahPenumpang.value
          );
        })
        .map((item) => {
          const node = document.createElement("div");
          node.classList.add("col-lg-4");
          node.classList.add("col-12");
          node.innerHTML = item.render();
          this.carContainerElement.appendChild(node);
        });
        this.textJikaSalah.innerHTML = '';
        this.btnResetMobil.style.display = 'block';
        this.btnCariMobil.style.display = 'none';
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Component.init(cars);
  };

  clear = () => {
    location.reload()
    let child = this.carContainerElement.firstElementChild;
    this.btnCariMobil.style.display = 'block';
    this.btnResetMobil.style.display = 'none';
    
    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
