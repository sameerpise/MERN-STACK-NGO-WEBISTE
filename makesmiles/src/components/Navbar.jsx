import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import {FaLinkedin} from "react-icons/fa6";
import '../css/navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const style ={
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "tomato",
    padding: "9px 8px",
    borderRadius: "10px",
    // margin: "10px 0px",
  }
  const style2 ={
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "bold",
    backgroundColor: "#e74c3c",
    padding: "9px 8px",
    borderRadius: "10px",
    // margin: "10px 0px",
  }
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png"  alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
              <ul className="sublinks">
                <li><Link to={"/about"}>sub-menu1</Link></li>
                <li><Link to={"/about"}>sub-menu-2</Link></li>
                <li><Link to={"/about"}>sub-menu-3</Link></li>
              </ul>
            </li>
            <li>
            <Link to={"/members"}>MEMBERS</Link>
            </li>
            <li>
            <Link to={"/ngo"}>Descover NGOS</Link>
            </li>
           
            
            <ul>
          <li style={style2}>
          <Link to={"/donate"} style={style2}>Start Fundriser</Link>
            </li>
            </ul>
          
          </ul>
          <ul>
            <li style={style}>
            <Link to={"/contact"} style={style}>Connect With Us</Link>
            </li>
            {/* <li style={style}>
            <FaLinkedin s/>
            </li> */}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
