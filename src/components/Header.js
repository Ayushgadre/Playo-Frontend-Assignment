import React, { useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

// Import the PNG image
import Logo from "../Assets/Photo.png";

const Header = () => {
  useEffect(() => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
          toggle.classList.toggle("bx-x");
          bodypd.classList.toggle("body-pd");
          headerpd.classList.toggle("body-pd");
        });
      }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");

    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    return () => {};
  }, []);

  return (
    <header className="header" id="header">
      <div className="header_toggle">
        <RiMenu3Line className="bx bx-menu me-4" id="header-toggle" />
        <FaSearch className="fs-4 text-dark fw-bold" />
      </div>

      <div className="header_img">
        {/* Use the imported Logo image */}
        <img src={Logo} alt="Header Logo" />
      </div>
    </header>
  );
};

export default Header;
