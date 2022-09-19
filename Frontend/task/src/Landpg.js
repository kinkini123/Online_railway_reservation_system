import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import trainService from "./services/trainservice";
import getByTrainName from "./services/trainservice";
import { useEffect, useState } from "react";

import AuthService from "./services/auth.service";
import { useHistory, useNavigate } from "react-router-dom";

import images1 from "./images/1004.jpg";

import "./my_css.css";
import { Link } from "react-router-dom";

// import images from "./images/81.jpeg";
let user = localStorage.getItem("username");
let s = false;
if (user != undefined) {
  s = true;
}

function Landpg() {
  const [train, setTrain] = useState([]);
  const [train_name, setTrainName] = useState([]);

  function Search() {
    localStorage.setItem("n", train_name);
    window.location.href = "/TrainDetails";
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <img
                  src={images1}
                  alt="My Image"
                  style={{ height: "56px", width: "5rem" }}
                />
              </li>
            </ul>
            <Nav.Link href="/" id="nav">
              Home
            </Nav.Link>
            <Nav.Link href="/about" id="nav">
              About
            </Nav.Link>
            <Nav.Link href="/contact" id="nav">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/train" id="train">
              TRAIN
            </Nav.Link>

            <Nav.Link
              href="/registration"
              id="nav"
              style={{ color: "#000066" }}
            >
              REGISTRATION
            </Nav.Link>
            <Nav.Link id="profile" style={{ color: "black" }}>
              <b> {user}</b>
            </Nav.Link>
            <Button id="login">
              <Link
                to="/login"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Log In
              </Link>
            </Button>
            <li className="nav-item">
              <a
                href="/Adminlogin"
                className="nav-link"
                style={{ color: "#000066" }}
              >
                <b> Admin Login</b>
              </a>
            </li>
            {s ? (
              <button
                // style={{ marginLeft: "88rem", marginTop:"10px" }}
                className="btn btn-danger "
                style={{ width: "7rem", height: "35px"}}
                onClick={(e) => {
                  window.location.href = "/Logout";
                }}
              >
                LOGOUT
              </button>
            ) : (
              <> </>
            )}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search By Train Name"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setTrainName(e.target.value)}
            />
            <button
              type="button"
              style={{ width: "70px", height: "32px", textAllign: "center" }}
              class="btn btn-warning homecontactbtn1"
              onClick={Search}
            >
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Landpg;
