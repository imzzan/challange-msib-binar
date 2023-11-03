import React, { FC } from "react";
import { Corousel } from "..";
import Image from "next/image";
import { imgLeftBtn, imgRightBtn } from "@/assets";

const Testimoni: FC = () => {
  return (
    <section className="testimoni" id="section-testimoni">
      <div className="container">
        <h1 className="judul-all text-center">Testimonial</h1>
        <p className="text-all text-center">
          Berbagai review positif dari para pelanggan kami
        </p>
        <div id="carouselExample" className="carousel slide mx-auto">
          <Corousel />
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <Image src={imgLeftBtn} alt="left-btn" aria-hidden="true"/>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <Image src={imgRightBtn} alt="right-btn" aria-hidden="true"/>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
