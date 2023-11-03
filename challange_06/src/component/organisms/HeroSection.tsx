"use client";
import React, { FC } from "react";
import { HeroContent } from "..";
import { imageCar } from "../../assets";
import Image from "next/image";

const HeroSection: FC = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="d-flex align-items-center">
        <div className="d-lg-flex align-items-center">
          <HeroContent />
          <div>
            <Image
              src={imageCar}
              width={1500}
              height={1500}
              alt="image-car"
              className=" img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
