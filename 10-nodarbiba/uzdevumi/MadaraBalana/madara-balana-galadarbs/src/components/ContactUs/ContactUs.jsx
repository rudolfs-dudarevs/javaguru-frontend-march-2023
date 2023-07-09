import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../Button/Button";
import "./ContactUs.css";

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const apiUrl = "http://localhost:8081/contact-us";
    console.log("Form data", data);
    fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const data = await res.json();

        if(res.ok) {
          console.log(data.message);
          setIsSent(true);
        }

        throw new Error(`Server responded with an error: ${data.message}`);
    })
      
      .catch((error) => {
        console.log(error);
      });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const ContactForm = () => {
    return (
    <>    
      <form className="contact-us" onSubmit={handleSubmit(onSubmit)}>
      <h2 id="contact" className="contact-us__title">Do you want to write us something?</h2>        
        <div className="contact-us__form">
        <input className="contact-us__input" placeholder="Name Surname"
        {...register("name", { required: true })} />
        {errors.name && (<span className="contact-us__error">This field is required</span>)}

        <input className="contact-us__input" placeholder="Your@email.com"
        {...register("email", { required: "This field is required",
          pattern: {
            value: emailRegex,
            message: "Incorrect e-mail address",
          },
        })} />
        {errors.email && (<span className="contact-us__error">{errors.email.message}</span>)}

        <textarea className="contact-us__input-area" placeholder="Leave your message here"
        {...register("message", { required: true })} />
        {errors.message && (<span className="contact-us__error">This field is required</span>)}

        <Button variant="primary" type="submit" text="Send" />
        </div>
      </form>
    </>
  );
};

const sentSuccess = () => {
  return (
    <div className="contact-us__sent-success">Thank you! We will answer as soon as possibe!</div>
  );
};

return <> {!isSent ? ContactForm() : sentSuccess()}</>;
};

export default ContactUs;