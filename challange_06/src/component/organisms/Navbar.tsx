import React, { FC } from "react";
import { NavItem, OffCanvas } from "..";
import { Logo } from "..";

const Navbar: FC = () => {
  let token;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    token = localStorage.getItem('token')
  }

  return (
    <div className="navbar sticky-top">
      <div className="container py-2">
        {
          token ? <h4 className='fw-bold'>{token}</h4> : <Logo />
        }
        <NavItem costomeStyle="nav d-lg-flex align-items-center d-none" />
        <OffCanvas/>
      </div>
    </div>
  );
};

export default Navbar;
