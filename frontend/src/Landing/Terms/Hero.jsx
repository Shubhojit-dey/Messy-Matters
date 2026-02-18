import React from "react";

const Hero = () => {
  return (
    <div className="container py-4 px-3 px-md-4" style={{ maxWidth: "900px" }}>

      {/* Top text */}
      <p className="text-secondary">Welcome to Plan Sync</p>

      <h1 className="display-3 fw-bold mb-4">
        Our Terms of Service
      </h1>

      <p className="mb-3">
        By using Plan Sync, you agree to comply with our terms and conditions.
      </p>

      <p className="mb-3">
        We are committed to protecting your data and providing a secure platform.
      </p>

      <p className="mb-5">
        Please read the terms carefully to understand your rights and responsibilities.
      </p>

      {/* Sections */}
      <div className="mb-4 d-flex align-items-start gap-3">
        <div style={{ fontSize: "28px", color: "#22c55e" }}>👤</div>
        <div>
          <h4 className="mb-1">User Agreement</h4>
          <p className="text-secondary mb-0">
            Your obligations as a user of Plan Sync.
          </p>
        </div>
      </div>

      <div className="mb-4 d-flex align-items-start gap-3">
        <div style={{ fontSize: "28px", color: "#22c55e" }}>🛡️</div>
        <div>
          <h4 className="mb-1">Privacy Policy</h4>
          <p className="text-secondary mb-0">
            How we handle your personal information.
          </p>
        </div>
      </div>

      <div className="mb-4 d-flex align-items-start gap-3">
        <div style={{ fontSize: "28px", color: "#22c55e" }}>⚙️</div>
        <div>
          <h4 className="mb-1">Support</h4>
          <p className="text-secondary mb-0">
            Get help and support when you need it.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Hero;