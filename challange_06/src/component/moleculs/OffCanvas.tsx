import React, { FC } from "react";
import {NavItem} from ".";

const OffCanvas: FC = () => {
  return (
    <>
      <button
        className="btn d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end w-50"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <p className="offcanvas-title fw-bold mt-5" id="offcanvasNavbarLabel">
            BCR
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <NavItem costomeStyle="navbar-nav" />
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
