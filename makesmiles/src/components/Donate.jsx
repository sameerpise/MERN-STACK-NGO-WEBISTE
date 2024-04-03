import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
 const [amount ,setamount] =useState("")
  const [message, setMessage] = useState("");
  const styel ={
    position:"relative",
    fontSize: "35px",
    textalign: "center",
    left:"13rem"
  }
  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/Donet",
        { name, email,phone,amount, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setamount("");
        
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <section className="donate">
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSendMessage}>
            <h1 className="text-center" style={styel}>Doner-Form</h1>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                value={phone}
                placeholder="phone Numbers"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="number"
                value={amount}
                placeholder="Amount want to donet"
                onChange={(e) => setamount(e.target.value)}
              />
              
            </div>
            <textarea
              rows="10"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
