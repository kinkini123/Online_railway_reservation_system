import React from "react";
import AuthService from "./services/auth.service";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import images1 from "./images/social.JPG";
import p from "./images/21.jpg";
const Contact = () => {
 
  return (
    <div
      classname="main"
      style={{
        backgroundImage: "url(" + p + ")",
        backgroundSize: "cover",
        height: "89vh",
        backdropFilter: "blur",
      }}
    >
      <div className="contact1">
        <h6 style={{ textAlign: "center", color: "#000066", fontSize: "50px" }}>
          You may Contact Us
        </h6>
        <br></br>
        <br></br>
        <br></br>
        <p style={{ textAlign: "center", color: "grey", fontSize: "30px" }}>
          Customer Care Numbers:1225 OR 5287-7895462 / 0214-9864751
          <p>Language: Hindi/English</p>
          <p>Email: care@indianrail.co.in</p>
          <p>Office: 65A R.K Road, New Delhi-110001</p>
        </p>
      </div>
    </div>
  );
};

export default Contact;
