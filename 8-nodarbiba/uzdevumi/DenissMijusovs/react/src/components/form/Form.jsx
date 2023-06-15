import React from "react";
import "./Form.css";
import Button from "../button/button";

function Form() {
  return (
    <>
      <form id="user-form" className="form">
        <label className="form-label mt-3" htmlFor="username">
          Enter username
        </label>
        <input
          id="username"
          className="form-control"
          type="text"
          name="username"
        />
        <label className="form-label mt-3" htmlFor="email">
          Enter email
        </label>
        <input id="email" className="form-control" type="email" name="email" />
        <label className="form-label mt-4" htmlFor="password">
          Enter password
        </label>
        <input
          id="password"
          className="form-control"
          type="password"
          name="password"
        />
        <Button />
      </form>
    </>
  );
}

export default Form;
