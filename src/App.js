import React, { useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm.js";

const h = React.createElement;

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const saveData = (employeeData) => {
    localStorage.setItem("employees", JSON.stringify(employeeData));
  };

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  return h(
    "div",
    { className: "app-shell" },
    h(
      "header",
      { className: "app-header" },
      h(
        "div",
        null,
        h("p", { className: "app-kicker" }, "Employee Management System"),
        h("h1", null, "New Employee")
      ),
      h(
        "nav",
        { className: "app-nav", "aria-label": "Primary navigation" },
        h(NavLink, { to: "/employees/new" }, "Employee Form")
      )
    ),
    h(
      "main",
      { className: "app-main" },
      h(
        Routes,
        null,
        h(Route, {
          path: "/",
          element: h(Navigate, { to: "/employees/new", replace: true })
        }),
        h(Route, {
          path: "/employees/new",
          element: h(EmployeeForm, { addEmployee })
        }),
        h(Route, {
          path: "*",
          element: h(Navigate, { to: "/employees/new", replace: true })
        })
      )
    )
  );
}

export default App;
