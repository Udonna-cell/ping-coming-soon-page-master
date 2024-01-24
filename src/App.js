import illustration from "./images/illustration-dashboard.png";
import logo from "./images/logo.svg";
import "./App.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  return (
    <footer>
      <aside>
        <div className="icon">
          <FaFacebookF />
        </div>
        <div className="icon">
          <FaTwitter />
        </div>
        <div className="icon">
          <FaInstagram />
        </div>
      </aside>
      <p>&copy; Copyright Ping. All rights reserved.</p>
      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Udonna-cell" rel="noreferrer">
          Udonna-cell
        </a>
        .
      </p>
    </footer>
  );
}
function Header() {
  let [input, setInput] = useState();
  let [isError, setIsError] = useState(false);
  let handle = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(input) && input !== "") {
      setIsError(false);
      console.log("Valid email address");
    } else {
      setIsError(true);
      console.log("Invalid email address");
    }

    alert(input);
  };
  let email = (e) => {
    setInput(e.target.value);
  };
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
      </nav>
      <h1>
        We are launching <span>soon!</span>
      </h1>
      <p>Subscribe and get notified</p>
      <form onSubmit={handle}>
        <div>
          <input
            type="email"
            placeholder="Your email address.."
            onChange={email}
          />
          {isError ? (
            <p className="error">please provide a valid email address</p>
          ) : (
            false
          )}
        </div>
        <button type="submit">Notify Me</button>
      </form>
      <figure>
        <img src={illustration} alt="dashboard" />
      </figure>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
