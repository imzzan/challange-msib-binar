import { fi_users, fi_calender, fi_settings } from "@/assets";
import Image from "next/image";
import React from "react";
import { Button, List } from "..";

interface CarItems {
  image: string;
  manufacture: string;
  model: string;
  rentPerDay: string;
  capacity: number;
  description: string;
  type: string;
  year: string;
  transmission : string;
};

const CarCard = ({
  image,
  manufacture,
  model,
  rentPerDay,
  capacity,
  description,
  type,
  year,
  transmission,
}: CarItems) => {
  console.log(image);
  return (
    <div className="col-12 col-lg-4">
      <div
        className="card d-flex flex-column justify-content-between p-4"
        style={{ height: "600px" }}
      >
        <img
          src={`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public${image}.min.jpg`}
          alt="image_car"
          className="image-card"
        />
        <div className="mt-4">
          <p className="text-sewa-mobil">
            {manufacture} {model} / {type}
          </p>
          <h5 className="text-harga-sewa-mobil">Rp. {rentPerDay} / hari</h5>
          <p className="text-desc-sewa-mobil">{description}</p>
        </div>
        <List imageIcon={fi_users} list={capacity} />
        <List imageIcon={fi_settings} list={transmission} />
        <List imageIcon={fi_calender} list={year} />
        <Button
          nameBtn="Pilih Mobil"
          variant="btn-success"
          costomeStyle="w-100"
        />
      </div>
    </div>
  );
};

export default CarCard;
