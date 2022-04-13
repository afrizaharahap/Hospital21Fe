import React, { useEffect, useState } from "react";
import axios from "axios";

function Roles(props) {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function getRoles() {
      //const result = await axios("http://localhost:5000/api/doctors");
      const result = await axios("https://localhost:7185/api/Roles");
      setRoles(result.data);
    }
    getRoles();
  });
  return (
    <div>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Roles;
