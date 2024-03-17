import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import React from "react";

export default function HeaderComponent() {
  return (
    <Navbar fluid rounded className="bg-[#253C95] text-white shadow-lg sticky top-0 z-40 rounded-none">
      <div className="container mx-auto flex items-center justify-between">
        <NavbarBrand href="https://istad.co/">
          <img
            className="mr-3 h-6 sm:h-9"
            src="../asset/img/logo.png"
            alt="Cstad Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CSTAD
          </span>
        </NavbarBrand>
        <NavbarCollapse>
          <NavbarLink className="text-white active" href="/" >
            Home
          </NavbarLink>
          <NavbarLink className="text-white" href="#">Enroll</NavbarLink>
          <NavbarLink className="text-white" href="#">Course</NavbarLink>
          <NavbarLink className="text-white" href="#">IT News</NavbarLink>
          <NavbarLink className="text-white" href="#">Job Opprtunity</NavbarLink>
          <NavbarLink className="text-white" href="#">About Us</NavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
