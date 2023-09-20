import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { setLogout } from "state";

const Navbar = () => {
  const dispatch = useDispatch();
  const [button1Text, setButton1Text] = useState("Are you a Provider?");
  const [button2Text, setButton2Text] = useState("Logout?");

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}></ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button
            className="btn-3"
            onMouseEnter={() => setButton1Text("Contact us")}
            onMouseLeave={() => setButton1Text("Are you a Provider?")}
          >
            {button1Text}
          </button>
        </Link>
        <button
          className="btn-3"
          onClick={() => dispatch(setLogout())}
          onMouseEnter={() => setButton2Text("You sure?")}
          onMouseLeave={() => setButton2Text("Logout?")}
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
