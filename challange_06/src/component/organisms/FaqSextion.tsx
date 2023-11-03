import React, { FC } from "react";
import { Accordion } from "..";

const FaqSextion : FC = () => {
  return (
    <section className="faq-section" id="section-faq">
      <div className="container">
        <div className="d-lg-flex justify-content-center align-items-start g-lg-3">
          <div className=" w-100 w-lg-50">
            <h1 className="judul-all text-center text-lg-start">
              Frequently Asked Question
            </h1>
            <p className="text-all text-center text-lg-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default FaqSextion;
