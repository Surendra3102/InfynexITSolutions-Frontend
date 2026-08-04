import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

function MobileMenu({
  open,
  setOpen,
  user,
  handleLogout,
}) {
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-overlay ${
          open ? "mobile-overlay-show" : ""
        }`}
        onClick={closeMenu}
      />

      {/* Drawer */}
      <aside
        className={`mobile-menu ${
          open ? "mobile-menu-open" : ""
        }`}
      >
        {/* Header */}
        <div className="mobile-menu-header">
          <h3>Menu</h3>

          <button onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-menu-links">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/industries" onCick={closeMenu}>
            Industries
          </NavLink>

          <NavLink to="/employers" onClick={closeMenu}>
            Employers
          </NavLink>

          <NavLink to="/careers" onClick={closeMenu}>
            Careers
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Bottom */}
        <div className="mobile-menu-footer">
          <NavLink
            to="/hire"
            className="mobile-hire-btn"
            onClick={closeMenu}
          >
            Hire Talent
          </NavLink>

        </div>
      </aside>
    </>
  );
}

export default MobileMenu;