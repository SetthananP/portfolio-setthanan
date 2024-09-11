import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul className={`mx-24 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 flex flex-row ${menu ? 'block' : 'hidden'}`}>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Experience">Experience</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => { openMenu(!menu); setShowMenu(!showMenu); }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => { openMenu(!menu); setShowMenu(!showMenu); }}
        />
      )}
    </nav>
  );
};

export default Navbar;
