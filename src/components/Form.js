import React, { useState } from "react";
import "../App.css";
import "./Form.css";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
  });

  const [message, setMessage] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    date: "",
  });

  const updateStates = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateData(e);
  };

  const validateData = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => {
      const errorsObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstname":
          if (!value) {
            errorsObj[name] = "Please fill the field";
          }
          break;
        case "lastname":
          if (!value) {
            errorsObj[name] = "Please fill the field";
          }
          break;
        case "email":
          if (!value) {
            errorsObj[name] = "Please fill the field";
          }
          break;
        case "password":
          if (!value) {
            errorsObj[name] = "Please fill the field";
          }
          break;
        case "confirmpassword":
          if (!value) {
            errorsObj[name] = "Please fill the field";
          } else if (input.password !== value) {
            errorsObj[name] = "Passwords do not match";
          }
          break;
        case "date":
          if (!value) {
            errorsObj[name] = "Please fill the field";
          }
          break;
        default:
          break;
      }
      return errorsObj;
    });
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-names-wrapper">
          <input
            type="text"
            name="name"
            className="names"
            placeholder="First name"
            value={input.name}
            onChange={updateStates}
            onBlur={validateData}
          />
          {message.name && <p className="form-message">{message.name}</p>}
          <input
            type="text"
            name="lastname"
            className="names"
            placeholder="Last name"
            value={input.lastname}
            onChange={updateStates}
            onBlur={validateData}
          />
        </div>
        {message.lastname && <p className="form-message">{message.lastname}</p>}
        <input
          type="text"
          name="email"
          className="email"
          placeholder="Email"
          value={input.email}
          onChange={updateStates}
          onBlur={validateData}
        />
        {message.email && <p className="form-message">{message.email}</p>}
        <input
          type="password"
          name="password"
          className="password"
          placeholder="Password"
          value={input.password}
          onChange={updateStates}
          onBlur={validateData}
        />
        {message.password && <p className="form-message">{message.password}</p>}
        <input
          type="password"
          name="confirmpassword"
          className="password2"
          placeholder="Confirm password"
          value={input.confirmpassword}
          onChange={updateStates}
          onBlur={validateData}
        />
        {message.confirmpassword && (
          <p className="form-message">{message.confirmpassword}</p>
        )}
        <div className="form-date-wrapper">
          <label htmlFor="date" className="tips">
            Date of birth:
          </label>
          <input
            type="date"
            name="date"
            className="date"
            value={input.date}
            onChange={updateStates}
            onBlur={validateData}
          />
          {message.date && <p className="form-message">{message.date}</p>}
        </div>
        <div className="form-sex-wrapper">
          <label htmlFor="form-sex-wrapper" className="tips">
            Sex:
          </label>
          <div className="sex-wrapper2">
            <div className="male-container">
              <label htmlFor="Male">Male</label>
              <input type="radio" className="sex" name="sex" value="Male" />
            </div>
            <div className="female-container">
              <label htmlFor="Female">Female</label>
              <input type="radio" className="sex" name="sex" value="Female" />
            </div>
          </div>
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
