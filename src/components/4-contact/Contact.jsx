import "./Contact.css";

import doneanimation from "../../../public/animation/Animation - 1733945325445 (1).json";
import contactanimation from "../../../public/animation/Animation - 1734037229455.json";


import Lottie from "lottie-react";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzyadgq");

  return (
    <section id="contact" className="contactus">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact Me
      </h1>
      <div className="subtitle">
          Have questions? Let's get in touch!
      </div>

      <div className="flex " style={{justifyContent:"space-around"}}>
        <form onSubmit={handleSubmit}>
        <div className="flex">
  <label htmlFor="email">Email  </label>

  <input
    type="email"
    name="email"
    id="email"
    value="youssefmohy865@gmail.com" 
    readOnly 
  />

  <ValidationError prefix="Email" field="email" errors={state.errors} />
</div>


          <div className="flex "  style={{ marginTop: "24px" ,marginBottom:"24px"}}>
            <label htmlFor="message">your message</label>
            <textarea required name="message" id="message"></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting ... " : "submit"}
          </button>

          {state.succeeded && (
            <span
              className="flex"
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                alignItems: "center",
              }}
            >
              <Lottie
                style={{ height: 48, textAlign: "center" }}
                animationData={doneanimation}
              />
              Your message sent successfully
            </span>
          )}
        </form>

        <div className="animation flex ">
          {" "}
          <Lottie
          className="contact-animation"
            style={{ height: 355 }}
            animationData={contactanimation}

          />
         
        </div>
      </div>
    </section>
  );
}
