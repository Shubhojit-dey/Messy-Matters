import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const developers = [
  { name: "Sayandwip", img: "/dev1.jpg", link: "https://www.linkedin.com/in/sayandwip-debnath-6896332a5/" },
  { name: "Shubhojit", img: "/dev2.webp", link: "https://www.linkedin.com/in/shubhojit-dey/" },
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="pt-4 pb-4">
      <div className="container">
        {/* TOP LINKS */}
        <div className="row mb-4 text-center">
          <div className="col">
            <div className="d-flex flex-wrap justify-content-center gap-3 gap-sm-4">
              <Link 
                className="text-decoration-none" 
                to="/"
                style={{ color: 'var(--secondary-text)', fontSize: '0.95rem' }}
              >
                Privacy Policy
              </Link>
              <Link 
                className="text-decoration-none" 
                to="/terms"
                style={{ color: 'var(--secondary-text)', fontSize: '0.95rem' }}
              >
                Terms of Service
              </Link>
              <Link 
                className="text-decoration-none" 
                to="/support"
                style={{ color: 'var(--secondary-text)', fontSize: '0.95rem' }}
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'var(--border-color)' }} />

        {/* MAIN FOOTER */}
        <div className="row align-items-center mt-4">
          {/* LEFT */}
          <div className="col-lg-4 mb-4 text-center text-lg-start">
            <img
              src="/logo.jpeg"
              alt="logo"
              style={{ width: "45px" }}
              className="mb-3 img-fluid rounded-3"
            />
            <p className="mb-1" style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>© 2026 Messy Matters.</p>
            <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>Empowering Students Worldwide.</p>
          </div>

          {/* CENTER */}
          <div className="col-lg-4 text-center mb-4">
            <h4 className="mb-3" style={{ fontSize: '1.2rem' }}>Socials</h4>

            <div className="d-flex justify-content-center gap-4 fs-5">
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
            <h4 className="mb-3" style={{ fontSize: '1.2rem' }}>Our developers</h4>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 gap-sm-4">
              {developers.map((dev, index) => (
                <div key={index} className="text-center" style={{ maxWidth: '80px' }}>
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="rounded-circle mb-2"
                    width="55"
                    height="55"
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => window.open(dev.link, "_blank")}
                  />
                  <p className="mb-0 small" style={{ color: 'var(--secondary-text)', fontSize: '0.8rem' }}>{dev.name}</p>
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