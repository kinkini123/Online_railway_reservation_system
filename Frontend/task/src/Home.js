import React, { Component } from "react";
import "./my_css.css";

import m1 from "./images/Bhutan.webp";
import b from "./images/b.jpg";
import k from "./images/desert.jpg";
import s from "./images/puri.jpg";
import images1 from "./images/social.JPG";
import p from "./images/1001.jpg";
export class Home extends Component {
  render() {
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <br></br>
      <br></br> */}
        <h6 style={{ textAlign: "center", color: "white", fontSize: "100px" }}>
          INDIAN RAILWAYS
        </h6>
        <p style={{ textAlign: "center", color: "white", fontSize: "30px" }}>
          SAFETY | SECURITY
        </p>
        {/* <div
          class="row"
          style={{
            marginTop: "12rem",
            marginLeft: "0px",
            marginRight: "1rem",
            padding: "10px 1px 1px 0px",
          }}
        >
          {" "}
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              color: "#003366",
            }}
          >
            Available Packages
          </h3>
          <div class="col-sm-3" style={{ paddingLeft: "100px" }}>
            <img
              class="card-img-top"
              src={m1}
              alt="Card image cap"
              style={{
                height: "10rem",
                width: "15rem",
                border: "solid",
                borderColor: "black",
                borderWidth: "2px",
              }}
            />
            <div class="card-body">
              <h6
                class="card-title"
                style={{
                  backgroundColor: "white",
                  width: "15rem",
                  fontSize: "smaller",
                  textAlign: "center",
                }}
              >
                Feel the Mountains.
              </h6>
            </div>
          </div>
          <div class="col-sm-3" style={{ paddingLeft: "75px" }}>
            <img
              class="card-img-top"
              src={k}
              alt="Card image cap"
              style={{
                height: "10rem",
                width: "15rem",
                border: "solid",
                borderColor: "black",
                borderWidth: "2px",
              }}
            />
            <div class="card-body">
              <h6
                class="card-title"
                style={{
                  backgroundColor: "white",
                  width: "15rem",
                  fontSize: "smaller",
                  textAlign: "center",
                }}
              >
                Dream with Desert
              </h6>
            </div>
          </div>
          <div
            class="col-sm-3"
            style={{ paddingRight: "75px", paddingLeft: "25px" }}
          >
            <img
              class="card-img-top"
              src={s}
              alt="Card image cap"
              style={{
                height: "10rem",
                width: "15rem",
                border: "solid",
                borderColor: "black",
                borderWidth: "2px",
              }}
            />

            <div class="card-body">
              <h6
                class="card-title"
                style={{
                  backgroundColor: "white",
                  width: "15rem",
                  fontSize: "smaller",
                  textAlign: "center",
                }}
              >
                Savour the Sea
              </h6>
            </div>
          </div>
          <div class="col-sm-3" style={{ paddingRight: "75px" }}>
            <img
              class="card-img-top"
              src={b}
              alt="Card image cap"
              style={{
                height: "10rem",
                width: "15rem",
                border: "solid",
                borderColor: "black",
                borderWidth: "2px",
              }}
            />
            <div class="card-body">
              <h6
                class="card-title"
                style={{
                  backgroundColor: "white",
                  width: "15rem",
                  fontSize: "smaller",
                }}
              >
                Experience the calmness
              </h6>
            </div>
          </div>
        </div> */}

        <footer id="footer">
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
    );
  }
}

export default Home;
