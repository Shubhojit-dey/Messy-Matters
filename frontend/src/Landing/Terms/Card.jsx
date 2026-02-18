import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="container py-4 px-3">

      <h4 className="mb-4 fw-bold">
        Our commitment is to provide a reliable and secure service for all users.
      </h4>

      <div className="image-card">

        <img
          src="/card.jpg"
          alt="Plan Sync"
          className="card-image"
        />

        <div className="overlay">
          <div className="overlay-content">
            <h3 className="mb-1">Messy Matters Team</h3>
            <p className="mb-0">
              ℹ️ For more details, visit our Help Center.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Card;