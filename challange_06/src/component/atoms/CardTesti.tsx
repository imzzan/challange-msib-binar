import Image from "next/image";
import React, { FC } from "react";

interface CardTestiProps {
  image: any;
  icon: any;
  text: string;
  name: string;
}

const CardTesti: FC<CardTestiProps> = ({
  image,
  icon,
  text,
  name,
}: CardTestiProps) => {
  return (
    <div className="carousel-item active">
      <div className="corousel-card">
        <div>
          <Image src={image} alt="image_photo" />
        </div>
        <div>
          <Image src={icon} alt="rate" />
          <p className="text-all mt-2">“{text}”</p>
          <h5 className="text-all fw-bold">{name}, Cirebon</h5>
        </div>
      </div>
    </div>
  );
};

export default CardTesti;
