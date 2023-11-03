import React, { FC } from "react";

interface InputProps {
  name : string;
  type : string;
  placeHolder : string;
  label : string;
  costomeStyle? : string;
  handleChange? : React.ChangeEventHandler<HTMLInputElement>
}


const Input : FC<InputProps>  = ({name, type, placeHolder, label, costomeStyle, handleChange} : InputProps) => {
  return (
    <div className={costomeStyle}>
      <label htmlFor={name} className="text-cari-mobil mb-3">
        {label}
      </label>
      <input
      onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeHolder}
        className=" w-100 border-opacity-50 border input-cari-mobil text-cari-mobil"
      />
    </div>
  );
};

export default Input;
