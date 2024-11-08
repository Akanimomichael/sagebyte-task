import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
  const { user, setUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input
          className="input"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-item">
        <label className="label">Update Location: </label>
        <input
          className="input"
          name="location"
          value={user.location}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default UserForm;
