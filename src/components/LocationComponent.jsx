import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Location = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong>Location</strong>: {user.location || "Not provided"}
      </h2>
    </div>
  );
};

export default Location;
