import React, { FC } from "react";
import { Button } from "..";

const SewaMobil : FC = () => {
  return (
    <section id="section-sewa-mobil">
      <div className="container">
        <div className="sewa-mobil">
          <div>
            <h1 className="text-sewa">Sewa Mobil di Cirebon Sekarang</h1>
            <p className="text-all text-white my-4 my-lg-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="btn-success" nameBtn="Mulai Sewa Mobil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SewaMobil;
