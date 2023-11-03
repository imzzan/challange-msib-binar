import React, { FC } from "react";
import { CardTesti } from "..";
import { photo, rateImage } from "../../assets";

const content = [
  {
    id: 1,
    photo: photo,
    icon: rateImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod",
    name: "Muzani"
  },
  {
    id: 2,
    photo: photo,
    icon: rateImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod",
    name: "Indra"
  },
  {
    id: 3,
    photo: photo,
    icon: rateImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod",
    name: "Hartati"
  },
];

const Corousel: FC = () => {
  return (
    <div className="carousel-inner">
      {content.map((item, index) => {
        return (
          <CardTesti
            key={item.id}
            image={item.photo}
            icon={item.icon}
            text={item.text}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default Corousel;
