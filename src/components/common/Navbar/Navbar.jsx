import "./Navbar.css";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

import { FaBars } from "react-icons/fa";

import {
  useState,
  useEffect,
} from "react";



import logo from "../../../assets/navlogohd.png";

import MobileMenu from "./MobileMenu";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  /* =============================
      Close Mobile Menu
  ============================= */

  useEffect(() => {

    setMenuOpen(false);

  }, [location.pathname]);

  return (
    <>

      <header className="nav-header">

        <div className="container nav-container">

          {/* Logo */}

          <NavLink
            to="/"
            className="nav-logo"
          >
            <img
              src={logo}
              alt="Infynex Global"
            />
          </NavLink>

          {/* Navigation */}

          <nav className="nav-links">

            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/services">
              Services
            </NavLink>

            <NavLink to="/industries">
              Industries
            </NavLink>

            <NavLink to="/employers">
              Employers
            </NavLink>

            <NavLink to="/careers">
              Careers
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

          </nav>

          {/* Desktop Button */}

          <div className="nav-actions">

            <NavLink
              to="/contact"
              className="nav-hire-btn"
            >
              Hire Talent
            </NavLink>

          </div>

          {/* Mobile Menu */}

          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars />
          </button>

        </div>

      </header>

      {/* Mobile Drawer */}

      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
      />

    </>
  );
}

export default Navbar;