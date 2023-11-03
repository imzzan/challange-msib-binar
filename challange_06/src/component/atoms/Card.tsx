import React, { FC } from "react";
import Image from "next/image";
interface CarsProps {
  title: string;
  text: string;
  image : any
}

const Card : FC<CarsProps> = ({ text, title, image}: CarsProps) => {
  return (
    <div className="col-12 col-lg-3">
      <div className="card-why-us">
        <Image src={image} alt="icon" />
        <h3 className="judul-all my-3">{title}</h3>
        <p className="text-all">{text}</p>
      </div>
    </div>
  );
};

export default Card;
