class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="card d-flex flex-column justify-content-between p-4" style="height : 600px;">
          <img src="${this.image}" alt="image-car" class="image-card">
          <div class="mt-4">
            <p class="text-sewa-mobil">${this.manufacture} ${this.model} / ${this.type}</p>
            <h5 class="text-harga-sewa-mobil">Rp ${this.rentPerDay} / hari</h5>
            <p class="text-desc-sewa-mobil">${this.description}</p>
            <div class="d-flex align-items-center gap-2">
              <img src="../../../../challange 02/probable-garbanzo-main/public/images/fi_users.png" alt="user">
              <span class="text-desc-sewa-mobil">${this.capacity}</span>
            </div>
            <div class="d-flex align-items-center gap-2 my-3">
              <img src="../../../../challange 02/probable-garbanzo-main/public/images/fi_settings.png" alt="setting">
              <span class="text-desc-sewa-mobil">${this.transmission}</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <img src="../../../../challange 02/probable-garbanzo-main/public/images/fi_calendar.png" alt="calender">
              <span class="text-desc-sewa-mobil">Tahun ${this.year}</span>
            </div>
          </div>
          <button class="btn btn-success w-100 mt-4">Pilih Mobil</button>
        </div>`;
  }
}
