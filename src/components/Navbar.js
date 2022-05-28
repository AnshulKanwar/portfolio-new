import { Link } from "gatsby";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="font-light text-slate-400">
      <div className="flex justify-end md:justify-center px-20 py-12">
        <button className="md:hidden text-2xl">
          <HiMenu />
        </button>
        <div className="w-full hidden md:flex justify-evenly">
          <span className="hover:text-slate-900"><Link to="#About">About</Link></span>
          <span className="hover:text-slate-900"><Link to="#Skills">Skills</Link></span>
          <span className="hover:text-slate-900"><Link to="#Projects">Projects</Link></span>
          <span className="hover:text-slate-900"><Link to="#Contact">Contact</Link></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
