import  { useEffect, useState } from "react";
import navlogo from "/eshoplogo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="footer bg-secondary text-base-content md:p-20 p-6 mt-8 flex flex-wrap gap-8 justify-between">
        {/* Logo & Description */}
        <aside className="max-w-xs">
          <div className="flex items-center text-2xl font-semibold mb-2">
            <img src={navlogo} alt="Eshopper Logo" className="w-10 h-10 mr-2" />
            <span className="text-primary">E</span>shopper
          </div>
          <p className="text-sm mt-2">
            Eshopper is your one-stop destination for trendy electronics and cloths.
            Discover unbeatable deals, fast delivery and a seamless shopping experience.
            <br />
            Shop smart, shop easy — only at <span className="text-primary">Eshopper</span>.
          </p>
        </aside>

        {/* Contact Info */}
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <p className="text-sm ">Address : 86/A Gulshan Dhaka</p>
          <p className="text-sm ">Email : Eshopper@email.com</p>
          <p className="text-sm ">Opening Time:Mon-Sat, 8.00AM - 12.00 PM</p>
        </nav>

        {/* Useful Links */}
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Latest Items</a>
        </nav>

        {/* Store Locations */}
        <nav>
          <h6 className="footer-title">Our Store</h6>
          <a className="link link-hover">New York</a>
          <a className="link link-hover">California</a>
          <a className="link link-hover">London SF</a>
          <a className="link link-hover">Chicago</a>
          <a className="link link-hover">Las Vegas</a>
        </nav>

        {/* Newsletter & Social Links */}
        <nav className="w-full sm:w-auto">
          <h6 className="footer-title">Join Our Newsletter</h6>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Email Address"
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <button className="btn btn-primary w-full max-w-xs transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-xl hover:text-primary transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-xl hover:text-primary transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl hover:text-primary transition" />
            </a>
          </div>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <hr />
      <footer className="footer footer-center bg-secondary text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Eshopper</p>
        </aside>
      </footer>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-5 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
