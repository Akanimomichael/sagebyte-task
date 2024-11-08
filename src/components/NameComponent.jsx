import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Name = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong>Name</strong>: {user.name || "Not provided"}
      </h2>
    </div>
  );
};

export default Name;
