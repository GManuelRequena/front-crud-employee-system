import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                <td>
                  <button className="btn btn-primary mx-2">View</button>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editEmployee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
