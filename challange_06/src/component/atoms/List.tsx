import Image from "next/image";
import React, { FC } from "react";

interface ImageProps {
  list: string | number;
  imageIcon?: any;
}

const List: FC<ImageProps> = ({ list, imageIcon }: ImageProps) => {
  return (
    <div className=" d-flex gap-1">
      <Image src={imageIcon} alt="ceklis" />
      <span className="text-all ms-1">{list}</span>
    </div>
  );
};

export default List;
