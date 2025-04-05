import { Link } from "react-router-dom";
import { useState } from "react";
import navlogo from "/eshoplogo.png";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navOptions = (
    <>
      <li className="hover:text-primary"><Link to="/">Home</Link></li>
      <li className="hover:text-primary"><Link to="/fashions">Fashions</Link></li>
      <li className="hover:text-primary"><Link to="/man">Man</Link></li>
      <li className="hover:text-primary"><Link to="/women">Women</Link></li>
      <li className="hover:text-primary"><Link to="/gadgets">Gadgets</Link></li>
      <li className="hover:text-primary"><Link to="/dashboard">Dashboard</Link></li>
    </>
  );

  return (
    <>
    <div className="sticky top-0 z-50"> 
      {/* Top Navbar */}
      <div className="border-b-2 bg-[#ECF0F1]">
        <div className="flex justify-between items-center w-11/12 mx-auto py-4">
          {/* Logo & Dropdown Menu */}
          <div className="flex items-center gap-4 md:gap-10">
            <button onClick={toggleMenu} className="lg:hidden text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="flex items-center text-xl font-semibold">
              <img src={navlogo} alt="Eshopper Logo" className="w-10 h-10" />
              <span className="text-primary">E</span>shopper
            </div>
            <label className="hidden md:flex items-center gap-2 lg:w-[350px] md:w-[200px] input input-bordered rounded-lg">
              <input type="text" className="grow" placeholder="Search Products..." />
              <FaSearch className="h-4 w-4 opacity-70" />
            </label>
          </div>
          {/* Icons & Authentication */}
          <div className="flex items-center gap-4">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register" className="hidden md:block"><button>Register</button></Link>
            <FaSearch className="md:hidden cursor-pointer" />
            <CiHeart className="text-2xl cursor-pointer" />
            <FaCartPlus className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 top-20 w-64 h-screen  bg-slate-200 shadow-lg lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">{navOptions}</ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="navbar bg-[#ECF0F1] hidden lg:flex justify-center  border-b-2">
        <ul className="menu menu-horizontal px-1 flex gap-4">{navOptions}</ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;
