import React from "react";
import { useTheme } from "../ThemeContext"; // Go up one level to Landing folder

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      {/* ===== HERO TOP SECTION ===== */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" style={{ color: 'var(--text-color)' }}>

            <h1 className="fw-bold fs-1 display-3">
              Messy Matters - Your Data,
              <br />
              Our Priority
            </h1>

            <p className="mt-3" style={{ color: 'var(--secondary-text)' }}>
              Learn how Messy Matters safeguards your personal information
              and ensures your privacy is protected.
            </p>

          </div>
        </div>
      </div>

      {/* ===== PRIVACY MISSION SECTION ===== */}
      <div className="container py-5">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
              src="/privacyimg.jpg"
              alt="privacy"
              className="img-fluid rounded-4"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7" style={{ color: 'var(--text-color)' }}>

            <p className="mb-2" style={{ color: 'var(--success-color)' }}>
              Commitment to Privacy
            </p>

            <h2 className="fw-bold fs-1 display-4 mb-3">
              Our Privacy Mission
            </h2>

            <p style={{ color: 'var(--secondary-text)' }}>
              At Messy Matters, we prioritize your privacy and data
              security above all else.
            </p>

            <p className="mb-4" style={{ color: 'var(--secondary-text)' }}>
              Our policies are designed to give you peace of mind
              while using our mobile application.
            </p>

            <hr style={{ borderColor: 'var(--border-color)' }} />

            {/* STATS */}
            <div className="row mt-4">

              <div className="col-6 col-md-3 mb-3">
                <p className="mb-1" style={{ color: 'var(--secondary-text)' }}>Established</p>
                <h3 className="fw-bold">2023</h3>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <p className="mb-1" style={{ color: 'var(--secondary-text)' }}>Users Protected</p>
                <h3 className="fw-bold">10,000+</h3>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <p className="mb-1" style={{ color: 'var(--secondary-text)' }}>Global reach</p>
                <h3 className="fw-bold">50+ Countries</h3>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <p className="mb-1" style={{ color: 'var(--secondary-text)' }}>Security audits</p>
                <h3 className="fw-bold">Quarterly</h3>
              </div>

            </div>

            <p className="mt-3" style={{ color: 'var(--success-color)', cursor: 'pointer' }}>
              Learn more about our privacy policies →
            </p>

          </div>

        </div>
      </div>

    </>
  );
};

export default Hero;