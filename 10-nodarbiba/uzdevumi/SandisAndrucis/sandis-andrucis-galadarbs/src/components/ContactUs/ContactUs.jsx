import { useState } from "react"
import { useForm } from "react-hook-form"
import "./ContactUs.css";
import Button from "../Button/Button";

const ContactUs = () => {
    const [isSent, setIsSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const apiUrl = "http://localhost:8081/contact-us";
        fetch(apiUrl, {
            headers: {
                Accept: "application.json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        })
        .then(async (res) => {
            const data = await res.json();
            if(res.ok) {
                setIsSent(true)
            } else {
                throw new Error(`Server responded with an error ${data.message}`)
            }
        })
        .catch((error) => {
            console.log(error)
        });
    };

    const contactForm = () => {
        return (
        <form className="contact-us" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-us__title">Feel free to leave a comment..</div>
            <div className="contact-us__input-fields">
                <input className="contact-us__input" placeholder="name" {...register("name", {required: true})}></input>
                {errors.name && <span className="contact-us__error">This field is required</span>}
                <input className="contact-us__input" placeholder="email" {...register("email", {required: "Email is required", validate:{matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email address must be a valid address"}})}></input>
                {errors.email?.message && <span className="contact-us__error">{errors.email.message}</span>}
                <textarea className="contact-us__input-area" placeholder="comment" {...register("message", {required: true})}></textarea>
                {errors.message && <span className="contact-us__error">This field is required</span>}
            </div>
            <Button classNa="btn-primary" text="Send" type="submit"/>
        </form>
        );
    };

    const sentSuccess = () => {
        return (
            <div className="contact-us__sent-success">
                <div className="contact-us__sent-success--text">We have received your message</div>
            </div>
        );
    };

    return <>{!isSent ? contactForm() : sentSuccess()}</>;
};

export default ContactUs;