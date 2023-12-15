import React, { useState, useEffect } from "react";
import "./Signup.css";

function SignUp() {
  const [activePanel, setActivePanel] = useState("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    // Send form data to PHP backend using fetch or Axios
    try {
      const response = await fetch("http:localhost:5050/contact.php", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle the response from the server if needed
      const data = await response.json();
      console.log("Response from server:", data);

      // Reset form fields after successful submission

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something Went Wrong");
      // Handle errors if any
    }
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http:localhost:5050/contact.php", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      // Handle the response from the server if needed
      const data = await response.json();
      console.log("Response from server:", data);

      // Reset form fields after successful submission

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something Went Wrong");
      // Handle errors if any
    }
  };
  const togglePanel = (panel) => {
    setActivePanel(panel);
  };

  const handleRegisterClick = () => {
    const container = document.getElementById("container");
    container.classList.add("active");
  };

  const handleLoginClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("active");
  };

  return (
    <div className="page">
      <div className="backgroundIMG">
        <div className="container" id="container">
          <div className="form-container sign-up">
            <form onSubmit={handleCreateSubmit}>
              <h1>Create Account</h1>
              <span>Sign up with your email</span>
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button>Sign Up</button>

              <div className="social-icons">{/* Social icons here */}</div>
            </form>
          </div>

          <div className="form-container sign-in">
            <form onSubmit={handleLogInSubmit}>
              <h1>Log In</h1>
              <span>Log in with your email</span>

              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>

          <div className="halfmenu-container">
            <div className="toggle">
              <div
                className={`toggle-panel ${
                  activePanel === "register" ? "to-right" : "to-left"
                }`}
              >
                {activePanel === "register" ? (
                  <>
                    <h1>Welcome to Score Insights</h1>
                    <h3>Come be a part of the team!</h3>
                    <p>Access premium features by creating an account</p>
                    <button
                      className="hidden"
                      onClick={() => {
                        togglePanel("login");
                        handleRegisterClick();
                      }}
                      type="button"
                      id="register"
                    >
                      CREATE AN ACCOUNT
                    </button>
                  </>
                ) : (
                  <>
                    <h1>Welcome Back!</h1>
                    <h4>Coach: "C'mon! You're up, get back in the game"</h4>
                    <p>
                      Enter your credentials to access your personalized
                      settings
                    </p>
                    <button
                      className="hidden"
                      onClick={() => {
                        togglePanel("register");
                        handleLoginClick();
                      }}
                      type="button"
                      id="login"
                    >
                      Log In
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
