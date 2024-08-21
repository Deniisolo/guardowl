"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export type NavProps = {
  // types...
};

const Nav: React.FC<NavProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
<div className='relative'>
      {/* Botón del menú hamburguesa solo en móviles */}
      <button onClick={toggleMenu} className='text-2xl p-2 block md:hidden'>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Menú desplegable en móviles */}
      <div className={`absolute top-12 right-0 w-1/2 h-96 bg-customBg border border-r-2 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='flex flex-col p-4'>
          <li className='p-2 hover:bg-hoverBg  cursor-pointer '>About</li>
          <li className='p-2 hover:bg-hoverBg cursor-pointer'>Team</li>
          <li className='p-2 hover:bg-hoverBg cursor-pointer'>Social Media</li>
          <li className='p-2 hover:bg-hoverBg cursor-pointer'>Download</li>
        </ul>
      </div>

      {/* Menú en pantallas grandes (visible siempre) */}
      <ul className='hidden md:flex space-x-4 bg-customBg'>
        <img src="" alt="" />
        <li className='p-2 hover:bg-hoverBg cursor-pointer text-customText font-semibold'>About</li>
        <li className='p-2 hover:bg-hoverBg cursor-pointer text-customText font-semibold'>Team</li>
        <li className='p-2 hover:bg-hoverBg cursor-pointer text-customText font-semibold'>Social Media</li>
        <li className='p-2 hover:bg-hoverBg cursor-pointer text-customText font-semibold'>Download</li>
      </ul>
    </div>
  );
};

export default Nav; 