import React, { Component } from "react";
import "../EmployeeForm.css";

const h = React.createElement;

const emptyEmployee = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  employmentType: "Full time",
  startDate: ""
};

class EmployeeForm extends Component {
  state = {
    ...emptyEmployee,
    statusMessage: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      statusMessage: ""
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const employeeName = `${this.state.firstName} ${this.state.lastName}`.trim();

    this.setState({
      ...emptyEmployee,
      statusMessage: `${employeeName} was added successfully.`
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      department,
      position,
      employmentType,
      startDate,
      statusMessage
    } = this.state;

    return h(
      "section",
      { className: "employee-form-panel", "aria-labelledby": "employee-form-title" },
      h(
        "div",
        { className: "employee-form-heading" },
        h(
          "div",
          null,
          h("p", { className: "section-label" }, "Employee record"),
          h("h2", { id: "employee-form-title" }, "Create Employee Profile")
        ),
        h("span", { className: "record-badge" }, "Draft")
      ),
      h(
        "form",
        { className: "employee-form", onSubmit: this.handleSubmit },
        h(
          "div",
          { className: "form-grid" },
          h(
            "label",
            null,
            "First Name",
            h("input", {
              type: "text",
              name: "firstName",
              value: firstName,
              onChange: this.handleChange,
              autoComplete: "given-name",
              required: true
            })
          ),
          h(
            "label",
            null,
            "Last Name",
            h("input", {
              type: "text",
              name: "lastName",
              value: lastName,
              onChange: this.handleChange,
              autoComplete: "family-name",
              required: true
            })
          ),
          h(
            "label",
            null,
            "Email",
            h("input", {
              type: "email",
              name: "email",
              value: email,
              onChange: this.handleChange,
              autoComplete: "email",
              required: true
            })
          ),
          h(
            "label",
            null,
            "Phone",
            h("input", {
              type: "tel",
              name: "phone",
              value: phone,
              onChange: this.handleChange,
              autoComplete: "tel"
            })
          ),
          h(
            "label",
            null,
            "Department",
            h(
              "select",
              {
                name: "department",
                value: department,
                onChange: this.handleChange,
                required: true
              },
              h("option", { value: "" }, "Select department"),
              h("option", { value: "Human Resources" }, "Human Resources"),
              h("option", { value: "Finance" }, "Finance"),
              h("option", { value: "Engineering" }, "Engineering"),
              h("option", { value: "Sales" }, "Sales"),
              h("option", { value: "Operations" }, "Operations")
            )
          ),
          h(
            "label",
            null,
            "Position",
            h("input", {
              type: "text",
              name: "position",
              value: position,
              onChange: this.handleChange,
              required: true
            })
          ),
          h(
            "label",
            null,
            "Employment Type",
            h(
              "select",
              {
                name: "employmentType",
                value: employmentType,
                onChange: this.handleChange
              },
              h("option", { value: "Full time" }, "Full time"),
              h("option", { value: "Part time" }, "Part time"),
              h("option", { value: "Contract" }, "Contract"),
              h("option", { value: "Internship" }, "Internship")
            )
          ),
          h(
            "label",
            null,
            "Start Date",
            h("input", {
              type: "date",
              name: "startDate",
              value: startDate,
              onChange: this.handleChange,
              required: true
            })
          )
        ),
        h(
          "div",
          { className: "form-actions" },
          statusMessage &&
            h(
              "p",
              { className: "form-status", role: "status" },
              statusMessage
            ),
          h("button", { type: "submit" }, "Submit Employee")
        )
      )
    );
  }
}

export default EmployeeForm;
