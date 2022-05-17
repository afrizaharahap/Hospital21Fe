import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function Doctors(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function getDoctors() {
      //const result = await axios("http://localhost:5000/api/doctors");
      const result = await axios("https://localhost:7080/api/Doctors");
      setDoctors(result.data);
    }
    getDoctors();
  });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialist</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(doctor)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Doctors;
