import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Header = () => {
  return (
    <header className=" bg-slate-300">
      <nav className="flex justify-between items-center w-5/6 mx-auto">
      <div className=" p-2">
        <img className="h-12" src={logo} alt="logo"/>
      </div>
      <div className="flex gap-5">
        <Link className="text-base font-bold hover:text-orange-900" to="/">Home</Link>
        <Link className="text-base font-bold hover:text-orange-900" to="/services">Services</Link>
        <Link className="text-base font-bold hover:text-orange-900" to="/blogs">Blogs</Link>
        <Link className="text-base font-bold hover:text-orange-900" to="/about">About</Link>
        <Link className="text-base font-bold hover:text-orange-900" to="/contact">Contact</Link>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div></div>
        <button className="border-2 p-2 rounded border-black font-bold hover:bg-black hover:text-slate-200">Appointment</button>
      </div>
    </nav>
    </header>
  );
};

export default Header;
