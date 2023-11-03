import React, { FC } from "react";
import { Card } from "..";
import { clockIcon, priceIcon, profesionalIcon, thumbIcon } from "@/assets";

const content = [
  {
    id: 1,
    title: "Mobil Lengkap",
    text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    icon: thumbIcon,
  },
  {
    id: 2,
    title: "Harga Murah",
    text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    icon: priceIcon,
  },
  {
    id: 3,
    title: "Layanan 24 Jam",
    text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    icon: clockIcon,
  },
  {
    id: 4,
    title: "Sopir Profesional",
    text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    icon: profesionalIcon,
  },
];

const WrapCard: FC = () => {
  return (
    <div className="row gap-lg-0 gap-4">
      {content.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.icon}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default WrapCard;
