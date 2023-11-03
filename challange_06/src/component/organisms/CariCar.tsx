"use client";
import React, { FC, useState, useContext } from "react";
import { Button, Input, InputDriver, InputJam} from "..";
import { CarContext } from "../../context/LayoutCar";

const FormCar: FC = () => {
  const [date, setDate] = useState<string>("");
  const [driver, setDriver] = useState<string>("");
  const [jam, setJam] = useState<string>("");
  const [penumpang, setPenumpang] = useState<string>("");
  const [message, setMessage] = useState<string>("")
  const {filterCars} = useContext(CarContext);
  
  const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const driverChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDriver(e.target.value);
  };
  const jamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJam(e.target.value);
  };
  const penumpangChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPenumpang(e.target.value);
  };
  const tanggalJadi = new Date(`${date} ${jam}`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      driver === "" ||
      penumpang === "" ||
      tanggalJadi === new Date("Invalid Date")
    ) {
      setMessage("Please pilih option dengan benar!!")
    } else {
      setMessage("")
      filterCars(driver, penumpang)
    }
  };

  return (
    <>
    <div className=" container modal-cari-mobil bg-white">
    <p className=" text-danger text-center">{message}</p>
      <form
        onSubmit={handleSubmit}
        className=" d-flex flex-column flex-lg-row  gap-4 gap-lg-0 justify-content-between align-items-start align-items-lg-end"
      >
        <Input
          handleChange={dateChange}
          type="date"
          name="Tanggal"
          placeHolder="Pilih Tanggal"
          label="Tnaggal"
          costomeStyle="item-modal"
        />
        <InputDriver
          handleChange={driverChange}
          label="driver"
          id="driver"
          name="driver"
          costomeStyle="item-modal"
        />
        <InputJam
          handleChange={jamChange}
          label="jam"
          id="jam"
          name="jam"
          costomeStyle="item-modal"
        />
        <Input
          handleChange={penumpangChange}
          type="text"
          name="penumpag"
          placeHolder="Jumlah Penumpang"
          label="penumpang"
          costomeStyle="item-modal"
        />
        <Button variant="btn-success" nameBtn="Cari Mobil" />
      </form>
    </div>
    </>
  );
};

export default FormCar;
