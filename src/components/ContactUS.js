import React, { useState, useEffect } from "react";
import "./ContactUS.css";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [displayPopup, setDisplayPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to PHP backend using fetch or Axios
    try {
      const response = await fetch("http:localhost:5050/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      // Handle the response from the server if needed
      const data = await response.json();
      console.log("Response from server:", data);

      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something Went Wrong");
      // Handle errors if any
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const openPopup = () => {
    setDisplayPopup(true);
    console.log("open");
  };

  const closePopup = () => {
    setDisplayPopup(false);
    console.log("close");
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("popup")) {
      setDisplayPopup(false);
      console.log("close");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="backDrop">
      <div className="popup">
        <div className="popup-content">
          <h2>Get in Touch</h2>
          <form className="contactUS" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <br />
            <input className="send" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ContactUS;
