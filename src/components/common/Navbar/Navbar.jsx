import "./Navbar.css";

import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

import {
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";

import logo from "../../../assets/navlogo.png";

import { AuthContext } from "../../../context/AuthContext";

import MobileMenu from "./MobileMenu";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useContext(AuthContext);

  /* =============================
     Scroll Effect
  ============================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =============================
     Close Profile Dropdown
  ============================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  /* =============================
     Close Mobile Menu on Route Change
  ============================== */

  useEffect(() => {
    setMenuOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  /* =============================
     Logout
  ============================== */

  const handleLogout = () => {
    logout();

    setMenuOpen(false);
    setShowDropdown(false);

    navigate("/");
  };

  /* =============================
     Navbar Theme
  ============================== */

  const isTransparent =
    location.pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`nav-header ${
          isTransparent
            ? "nav-header-transparent"
            : "nav-header-scrolled"
        }`}
      >
        <div className="container nav-container">

          {/* Logo */}

          <NavLink
            to="/"
            className="nav-logo"
          >
            <img
              src={logo}
              alt="Infynex Logo"
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

            <NavLink to="/employers">
              Employers
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>
          </nav>

          {/* Right Side */}

          <div className="nav-actions">

            <NavLink
              to="/employers"
              className="nav-hire-btn"
            >
              Hire Talent
            </NavLink>

            {!user ? (
              <NavLink
                to="/login"
                className="nav-login-btn"
              >
                Login / Register
              </NavLink>
            ) : (
              <div
                className="nav-user-menu"
                ref={dropdownRef}
              >
                <button
                  className="nav-user-btn"
                  onClick={() =>
                    setShowDropdown(
                      !showDropdown
                    )
                  }
                  aria-label="User Menu"
                >
                  <FaCircleUser className="nav-user-icon" />
                </button>

                <ProfileDropdown
                  user={user}
                  showDropdown={showDropdown}
                  handleLogout={handleLogout}
                />
              </div>
            )}

          </div>

          {/* Mobile Menu Button */}

          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        user={user}
        handleLogout={handleLogout}
      />
    </>
  );
}

export default Navbar;