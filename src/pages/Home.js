import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/employees");
    setEmployees(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Working Since</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.workingSince}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
