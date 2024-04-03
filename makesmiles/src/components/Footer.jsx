import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Maharashtra,India</li>
          <li>makesmiles@gmail.com</li>
          <li>+92 123123123</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        
      </div>
    </footer>
  );
};

export default Footer;
