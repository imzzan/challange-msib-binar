import React, { FC } from "react";
import Option from "./Option";

interface InputOption {
  label: string;
  name: string;
  id: string;
  costomeStyle? : string;
  handleChange : React.ChangeEventHandler<HTMLSelectElement>
}

const InputDriver: FC<InputOption> = ({
  label,
  name,
  id,
  costomeStyle,
  handleChange
}: InputOption) => {
  return (
    <div className={costomeStyle}>
      <label htmlFor={name} className="text-cari-mobil mb-3">
        {label}
      </label>
      <select onChange={handleChange} id={id} className="form-select py-2 text-cari-mobil">
        <Option value=" " name="Pilih Tipe Driver"/>
        <Option value="Manual" name="Dengan Supir"/>
        <Option value="Automanual" name="Tanpa Suoir"/>
      </select>
    </div>
  );
};

export default InputDriver;
