import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="w-5/6 mx-auto flex justify-between">
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <p className="text-slate-200">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
        </div>
        <div>
          <h4 className="text-slate-200 font-bold mb-6">About</h4>
          <div className="flex flex-col text-slate-200">
            <Link>Home</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-slate-200 font-bold mb-6">Company</h4>
          <div className="flex flex-col text-slate-200">
            <Link>Why Choose Us</Link>
            <Link>About</Link>
          </div>
        </div>
        <div>
          <h4 className="text-slate-200 font-bold mb-6">Support</h4>
          <div className="text-slate-200 flex flex-col">
            <Link>Support</Link>
            <Link>Services</Link>
            <Link>Accesbility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
