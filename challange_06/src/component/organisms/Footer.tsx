import { emailIcon, fbIcon, igIcon, twitchIcon, twitterIcon } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import { Logo } from "..";

const content = {
  infoPerusahaan: [
    "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000",
    "binarcarrental@gmail.com",
    "081-233-334-808",
  ],
  navItem: ["Our services", "Why Us", "Testimonial", "FAQ"],
  sosialMedia: [fbIcon, igIcon, twitterIcon, emailIcon, twitchIcon],
};

const Footer : FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div>
              {content.infoPerusahaan.map((item, index) => {
                return (
                  <p key={index} className="text-all">
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div>
              {content.navItem.map((item, index) => {
                return (
                  <p key={index} className="text-all">
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div>
              <p className="text-all">Connect with us</p>
              <div className="d-flex gap-3">
                {content.sosialMedia.map((item, index) => {
                  return (
                    <div key={index}><Image src={item} alt="icon-sisial-media" /></div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <div>
              <p className="text-all">Copyright Binar 2022</p>
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
