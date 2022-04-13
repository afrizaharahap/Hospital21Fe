import React, { useEffect, useState } from "react";
import axios from "axios";

function Doctors(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function getDoctors() {
      //const result = await axios("http://localhost:5000/api/doctors");
      const result = await axios("https://localhost:7185/api/Doctors");
      setDoctors(result.data);
    }
    getDoctors();
  });
  return (
    <div>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Doctors;
