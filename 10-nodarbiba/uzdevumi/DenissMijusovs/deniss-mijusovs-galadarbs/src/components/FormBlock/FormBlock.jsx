import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import "./FormBlock.css";

function FormBlock() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="contact-us" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">Contact Us</h2>
      {errors.name && (
        <span className="contact-us__error">{errors.name.message}</span>
      )}
      <input
        className="contact-us__input"
        placeholder="Name"
        {...register("name", { required: "This field is required" })}
        autoComplete="name"
      />

      {errors.email && (
        <span className="contact-us__error">{errors.email.message}</span>
      )}
      <input
        className="contact-us__input"
        placeholder="Email"
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email format",
          },
        })}
        autoComplete="email"
      />

      {errors.message && (
        <span className="contact-us__error">{errors.message.message}</span>
      )}
      <textarea
        className="contact-us__input-area"
        placeholder="Message..."
        {...register("message", { required: "This field is required" })}
        autoComplete="off"
      />

      <Button variant="primary" type="submit">
        Send
      </Button>
    </form>
  );
}

export default FormBlock;
