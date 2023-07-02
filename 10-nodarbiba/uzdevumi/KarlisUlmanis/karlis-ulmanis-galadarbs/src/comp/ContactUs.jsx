import { useForm } from "react-hook-form"
import Buttons from "./buttons"
import "./ContactUs.css"

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = () => {
        console.log("sent")
    }

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

export default ContactUs