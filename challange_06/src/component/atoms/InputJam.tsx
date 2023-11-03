import React, { FC } from "react";
import Option from "./Option";

interface InputOption {
  label: string;
  name: string;
  id: string;
  costomeStyle? : string;
  handleChange : React.ChangeEventHandler<HTMLSelectElement>
}

const InputJam: FC<InputOption> = ({
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
        <Option value=" " name="Pilih Waktu"/>
        <Option value="08:00" name="08.00 WIB"/>
        <Option value="09:00" name="09.00 WIB"/>
        <Option value="10:00" name="10.00 WIB"/>
        <Option value="11:00" name="11.00 WIB"/>
        <Option value="12:00" name="12.00 WIB"/>
      </select>
    </div>
  );
};

export default InputJam;
