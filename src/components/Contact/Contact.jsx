import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wg8d85i",
        "template_bahqltc",
        form.current,
        "Z6yFaola5362OURx6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <span>Get in touch</span>
        <span>Contact</span>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
