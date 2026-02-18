import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={() => setIsOpen(false)}>
          <img
            src="/logo.jpeg"
            alt="logo"
            style={{ height: "40px" }}
            className="img-fluid rounded-3"
          />
        </Link>

        {/* Hamburger Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          style={{
            border: `1px solid var(--secondary-text)`,
            backgroundColor: 'transparent'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/about" 
                style={{ color: 'var(--text-color)' }}
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/universities" 
                style={{ color: 'var(--text-color)' }}
                onClick={() => setIsOpen(false)}
              >
                For universities
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/contact" 
                style={{ color: 'var(--text-color)' }}
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="d-flex align-items-center gap-3">
          <button 
            className="btn rounded-circle" 
            onClick={toggleTheme}
            style={{ 
              backgroundColor: isDarkMode ? 'transparent' : '#f3f4f6',
              border: isDarkMode ? '1px solid var(--text-color)' : '1px solid #d1d5db',
              color: 'var(--text-color)',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="btn d-none d-sm-block" /* Hide on extra small, show on small and up */
            style={{
              backgroundColor: 'var(--success-color)',
              color: isDarkMode ? 'black' : 'white',
              borderRadius: "30px",
              padding: "8px 20px",
              fontWeight: "500",
              border: 'none',
              whiteSpace: 'nowrap'
            }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=in.co.cardlink.plansync",
                "_blank",
              )
            }
          >
            Download now →
          </button>

          {/* Mobile download button - shows only on extra small */}
          <button
            className="btn d-sm-none" /* Show on extra small only */
            style={{
              backgroundColor: 'var(--success-color)',
              color: isDarkMode ? 'black' : 'white',
              borderRadius: "30px",
              padding: "6px 12px",
              fontWeight: "500",
              border: 'none',
              fontSize: '0.85rem',
              whiteSpace: 'nowrap'
            }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=in.co.cardlink.plansync",
                "_blank",
              )
            }
          >
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;