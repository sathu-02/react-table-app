import React from "react";
import "./App.css";

const App = () => {
  const data = [
    { id: 1, name: "Alice", age: 28, salary: 55000 },
    { id: 2, name: "Bob", age: 32, salary: 62000 },
    { id: 3, name: "Charlie", age: 25, salary: 48000 },
    { id: 4, name: "Diana", age: 29, salary: 59000 },
    { id: 5, name: "Ethan", age: 35, salary: 70000 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
