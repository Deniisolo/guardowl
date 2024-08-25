"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../pics/logoguardowl.png";
export type NavProps = {
  // types...
};

const Nav: React.FC<NavProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      {/* Botón del menú hamburguesa solo en móviles */}
      <button onClick={toggleMenu} className="text-2xl p-2 block md:hidden">
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Menú desplegable en móviles */}
      <div
        className={`absolute top-12 right-0 w-1/2 h-96 bg-customBg border border-r-2 rounded-lg shadow-lg ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col p-4">
        <li className="p-2 hover:bg-hoverBg  cursor-pointer ">
            <Link href="/">
              <p className="text-customText">Home</p>
            </Link>
          </li>
          <li className="p-2 hover:bg-hoverBg  cursor-pointer ">
            <Link href="/aboutus">
              <p className="text-customText">About Us</p>
            </Link>
          </li>
          <li className="p-2 hover:bg-hoverBg cursor-pointer">
            <Link href="/team">
              <p className="text-customText">Team</p>
            </Link>
          </li>
          <li className="p-2 hover:bg-hoverBg cursor-pointer">
            <Link href="/socialmedia">
              <p className="text-customText">Social Media </p>
            </Link>
          </li>
          <li className="p-2 hover:bg-hoverBg cursor-pointer">
            <Link href="/download">
              <p className="text-customText">Download</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú en pantallas grandes (visible siempre) */}
      <ul className="hidden md:flex space-x-4 bg-customBg">
        <a href="/">
          <img src={logo.src} alt="" /> 
        </a>
        <li className="p-5 hover:bg-hoverBg cursor-pointer text-customText font-light ">
          <Link href="/aboutus">
            <p>About Us</p>
          </Link>
        </li>
        <li className="p-5 hover:bg-hoverBg cursor-pointer text-customText font-light">
          <Link href="/team">
            <p>Team</p>
          </Link>
        </li>
        <li className="p-5 hover:bg-hoverBg cursor-pointer text-customText font-light">
          <Link href="/socialmedia">
            <p>Social Media </p>
          </Link>
        </li>
        <li className="p-5 hover:bg-hoverBg cursor-pointer text-customText font-light">
          <Link href="/download">
            <p>Download</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
