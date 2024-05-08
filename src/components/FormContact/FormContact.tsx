import React, { useState } from "react";
import styles from "./FormContact.module.scss";

const FormContact = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Result if message was sent or not
  const [result, setResult] = useState("");

  //Status of while message is being sent
  const [status, setStatus] = useState("Submit");
  function resetEmailForm() {
    setEmailForm({ name: "", email: "", message: "" });
  }
  function handleEmailFormChange(event: any) {
    setEmailForm((prevEmailData) => {
      return {
        ...prevEmailData,
        [event.target.name]: event.target.value,
      };
    });

    if (result.length > 0) {
      setResult("");
    }
  }

  const handleSubmit = async (e: any) => {
    setResult("");
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      let response = await fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();

      if (result.status === "success") {
        setResult("Message Sent!");
        resetEmailForm();
      } else if (result.status === "fail") {
        alert("Uh oh! Message failed to send.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Submit");
      setResult("Uh oh! Issues with submitting message.");
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form method="POST" onSubmit={handleSubmit} id="contact-form" className="contact-form">
        <input
          placeholder="name*"
          type="text"
          name="name"
          required={true}
          value={emailForm.name}
          onChange={handleEmailFormChange}
        />
        <input
          placeholder="email address*"
          value={emailForm.email}
          type="email"
          name="email"
          required={true}
          onChange={handleEmailFormChange}
        />
        <textarea
          maxLength={300}
          placeholder="message (max 300 characters)*"
          name="message"
          required={true}
          value={emailForm.message}
          onChange={handleEmailFormChange}
        />
        <button type="submit">{status}</button>
        <h3>{result}</h3>
      </form>
    </div>
  );
};

export default FormContact;
