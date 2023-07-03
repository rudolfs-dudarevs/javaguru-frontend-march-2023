import { useState } from "react"
import { useForm } from "react-hook-form"
import Buttons from "./buttons"
import "./ContactUs.css"

const ContactUs = () => {
    const [ isSent, setIsSent ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data);
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
            <div id="contactUs" className="contact-us">

            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

                <input 
                    className="contact-input" 
                    placeholder="Your Name" 
                    {...register("name", {required: true})} />
                    {errors.name && <span className="contact-error">This field is required</span>}
                
                <input 
                    className="contact-input" 
                    placeholder="Your e-mail" 
                    {...register("email", { pattern: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/ })} />
                    {errors.email && <span className="contact-error">Please enter valid e-mail addres</span>}
                
                <textarea 
                    className="contact-input" 
                    placeholder="Your message" 
                    {...register("message", {required: true})}  />
                    {errors.message && <span className="contact-error">This field is required</span>}

            <Buttons text="Send" className="btn-primary" type="submit" />

            </form>

        </div>
        )
    }

 const sentSucces = () => {
    return (
        <div id="contactUs" className="contact-us">
           <div className="contact-succes"> We have receved your message! </div>
        </div>
    )
 }

 return <>{!isSent ? contactForm() : sentSucces()}</>;
}

export default ContactUs