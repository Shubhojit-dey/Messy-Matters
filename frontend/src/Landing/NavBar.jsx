import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // ThemeContext is in the same folder

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.jpeg"
            alt="logo"
            style={{ height: "40px"}}
            className="img-fluid rounded-3"
          />
        </Link>

        {/* Center Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: 'var(--text-color)' }}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/universities" style={{ color: 'var(--text-color)' }}>
                For universities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: 'var(--text-color)' }}>
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
              justifyContent: 'center'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: 'var(--success-color)',
              color: isDarkMode ? 'black' : 'white',
              borderRadius: "30px",
              padding: "8px 20px",
              fontWeight: "500",
              border: 'none'
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;