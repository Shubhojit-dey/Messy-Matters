import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // ThemeContext is in the same folder

const developers = [
  { name: "Sayandwip", img: "/dev1.jpg",link:"https://www.linkedin.com/in/sayandwip-debnath-6896332a5/" },
  { name: "Shubhojit", img: "/dev2.webp",link:"https://www.linkedin.com/in/shubhojit-dey/" },
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="pt-5 pb-4">
      <div className="container">
        {/* TOP LINKS */}
        <div className="row mb-5 text-center">
          <div className="col">
            <div className="d-flex justify-content-center gap-4">
              {/* <Link 
                className="text-decoration-none" 
                to="/about"
                style={{ color: 'var(--secondary-text)' }}
              >
                About
              </Link> */}
              {/* <Link 
                className="text-decoration-none" 
                to="/universities"
                style={{ color: 'var(--secondary-text)' }}
              >
                For Universities
              </Link> */}
              <Link 
                className="text-decoration-none" 
                to="/"
                style={{ color: 'var(--secondary-text)' }}
              >
                Privacy Policy
              </Link>
              <Link 
                className="text-decoration-none" 
                to="/terms"
                style={{ color: 'var(--secondary-text)' }}
              >
                Terms of Service
              </Link>
              <Link 
                className="text-decoration-none" 
                to="/support"
                style={{ color: 'var(--secondary-text)' }}
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'var(--border-color)' }} />

        {/* MAIN FOOTER */}
        <div className="row align-items-center mt-5">
          {/* LEFT */}
          <div className="col-lg-4 mb-4">
            <img
              src="/logo.jpeg"
              alt="logo"
              style={{ width: "50px" }}
              className="mb-3 img-fluid rounded-3"
            />
            <p className="mb-1" style={{ color: 'var(--secondary-text)' }}>© 2026 Messy Matters.</p>
            <p style={{ color: 'var(--secondary-text)' }}>Empowering Students Worldwide.</p>
          </div>

          {/* CENTER */}
          <div className="col-lg-4 text-center mb-4">
            <h4 className="mb-3">Socials</h4>

            <div className="d-flex justify-content-center gap-4 fs-4">
              <Link to="https://x.com/Mr_shubhojit" style={{ color: 'var(--text-color)' }}>
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="https://www.instagram.com/sayandwip__/" style={{ color: 'var(--text-color)' }}>
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/sayandwip-debnath-6896332a5/" style={{ color: 'var(--text-color)' }}>
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4 text-center text-lg-end">
            <h4 className="mb-3">Our developers</h4>

            <div className="d-flex justify-content-center justify-content-lg-end gap-4">
              {developers.map((dev, index) => (
                <div key={index} className="text-center">
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="rounded-circle mb-2"
                    width="60"
                    height="60"
                    style={{ objectFit: 'cover' }}
                    onClick={() => window.open(dev.link, "_blank")}
                  />
                  <p className="mb-0 small" style={{ color: 'var(--secondary-text)' }}>{dev.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;