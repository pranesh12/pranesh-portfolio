"use client";
import React, { useState } from "react";
import { TbHexagonLetterP } from "react-icons/tb";
const isSmallScreen = window.innerWidth <= 768;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar bg-base-100 fixed z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
              >
                <li>
                  <a href="#top">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#education">Education</a>
                </li>
              </ul>
            )}
          </div>
          {/* <a className="btn btn-ghost text-xl">Pranesh </a> */}
          <button className="invisible  md:visible text-4xl">
            <TbHexagonLetterP />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex items-baseline">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a href="#top">Home</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#contact" className="btn btn-outline btn-sm">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
