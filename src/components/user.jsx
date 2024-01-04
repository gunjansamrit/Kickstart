// UserDetail.js

import React from "react";
// import { useParams } from "react-router-dom";
import "./user.css"; // Import the associated CSS file

export const User = () => {
  return (
    <div className="user-detail">
      <h2>User Details</h2>
      <p>
        <strong>ID:</strong> 1234
      </p>
      <p>
        <strong>Name:</strong> Dark Shadow
      </p>
      <p>
        <strong>Email:</strong> Darkshadow@demon.com
      </p>
    </div>
  );
};

export default User;
