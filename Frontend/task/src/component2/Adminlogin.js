import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import auth from "../services/auth.service";
import Form from "react-bootstrap/Form";
import images1 from "../images/social.JPG";

const Adminlogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const Regi = (e) => {
    e.preventDefault();

    const val = {
      username,
      password,
    };

    auth
      .auth(val)
      .then((response) => {
        console.log("Feedback added successfully", response.data);
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("username", val.username);
        
        window.location.href = "/Adminprofile";
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div id="loginform">
      <Form id="form">
        <h3
          style={{
            textAlign: "center",
            textShadow: "2px 2px black",
            color: "white",
          }}
        >
         Admin  LOGIN
        </h3>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label style={{ color: "white", fontSize: "45px" }}>
            USERNAME
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "white", fontSize: "45px" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <button
          class="btn btn-primary"
          onClick={(e) => {
            Regi(e);
          }}
        >
          Login
        </button>
      </Form>
      <div>
        <footer id="footer1">
          <ul class="navbar-nav">
            <li>
              Get connected with us on
              <img
                src={images1}
                alt="My Image"
                style={{ height: "3rem", width: "27rem" }}
              />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Adminlogin;
