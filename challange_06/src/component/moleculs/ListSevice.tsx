import React, { FC } from "react";
import { List } from "..";
import { ceklisIcon } from "../../assets";

const content = [
  "Sewa Mobil Dengan Supir di Cirebon 12 Jam",
  "Sewa Mobil Lepas Kunci di Cirebon 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

const ListSevice: FC = () => {
  return (
    <div className="list-section-service">
      {content.map((item, index) => {
        return <List key={index} list={item} imageIcon={ceklisIcon}/>;
      })}
    </div>
  );
};

export default ListSevice;
