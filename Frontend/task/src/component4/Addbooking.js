import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthService from "../services/auth.service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bookingservice from "../services/bookingservice";
import { isEmail } from "validator";
let p = localStorage.getItem("username");
let no=localStorage.getItem("train_no");



const Addbooking = () => {
  const [train_no, setTrainNo] = useState("");
  const [train_name, setTrainName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [emailId, setEmailId] = useState("");
  const [start_from, setStartFrom] = useState("");
  const [coach_no, setCoachNo] = useState("");
  const [seat_no, setSeatNo] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const saveBooking = (e) => {
    e.preventDefault();

    const booking = {
      train_no,
      train_name,
      fname,
      lname,
      age,
      start_from,
      destination,
      emailId,
      coach_no,
      seat_no,
      id
    };
    
    if (id) {
      //update
      bookingservice
        .update(booking)
        .then((response) => {
          console.log("booking data updated successfully", response.data);
          localStorage.setItem("email", booking.emailId);
          localStorage.setItem("train_name", booking.train_name);
          localStorage.setItem("train_no", booking.train_no);
          localStorage.setItem("fname", booking.fname);
          localStorage.setItem("lname", booking.lname);
          localStorage.setItem("age", booking.age);
          localStorage.setItem("bookingId", booking.id);
          localStorage.setItem("start_from", booking.start_from);
          localStorage.setItem("destination", booking.destination);
          localStorage.setItem("id1", booking.id);
          window.location.href = "/fullticket";
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      bookingservice
        .create(booking)
        .then((response) => {
          console.log("booking added successfully", response.data);
          localStorage.setItem("email", booking.emailId);
          localStorage.setItem("train_name", booking.train_name);
          localStorage.setItem("train_no", booking.train_no);
          localStorage.setItem("fname", booking.fname);
          localStorage.setItem("lname", booking.lname);
          localStorage.setItem("age", booking.age);
          localStorage.setItem("bookingId", booking.id);
          localStorage.setItem("start_from", booking.start_from);
          localStorage.setItem("destination", booking.destination);
          localStorage.setItem("coach_no", booking.coach_no);
          localStorage.setItem("seat_no", booking.seat_no);
          window.location.href = "/fullticket";

          // localStorage.setItem("email", booking.emailId);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      bookingservice
        .get(id)
        .then((bookings) => {
          setTrainNo(bookings.data.train_no);
          setTrainName(bookings.data.train_name);
          setFname(bookings.data.fname);
          setLname(bookings.data.lname);
          setAge(bookings.data.age);
          setStartFrom(bookings.data.start_from);
          setDestination(bookings.data.destination);
          setEmailId(bookings.data.emailId);
          setSeatNo(bookings.data.seat_no);
          setCoachNo(bookings.data.coach_no);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <>
      {" "}
      <div style={{ backgroundColor: "#ddccff" }}>
        <Form id="registrationform">
          <h5
            style={{
              textAlign: "center",
              // textShadow: "2px 2px black",
              color: "balck",
            }}
          >
            Add Booking
          </h5>

          {/* <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>Train No.:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Train No"
              value={no}
              onChange={(e) => setTrainNo(e.target.value)}
              required
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>
              Enter Train Names
            </Form.Label>
            <Form.Control
              type="text"
              // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              placeholder="Enter Train Name"
              value={train_name}
              onChange={(e) => setTrainName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>
              Enter First Name
            </Form.Label>
            <Form.Control
              required
              type="text"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>
              Enter Last Name
            </Form.Label>
            <Form.Control
              required
              type="text"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "#000066" }}>Age</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>Start From</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Start From"
              value={start_from}
              onChange={(e) => setStartFrom(e.target.value)}
            />
          </Form.Group> */}
          {/* <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>Destination</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Destinations"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "#000066" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              placeholder="Enter email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
            <Form.Text className="text" style={{ color: "coral" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>Enter Seat NO.</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="seat Number"
              value={seat_no}
              onChange={(e) => setSeatNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ color: "#000066" }}>
              Enter Coach NO.
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Coach Number"
              value={coach_no}
              onChange={(e) => setCoachNo(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          {/* <Button
          onClick={(o) => saveUser(o)}
          variant=" #2c7f86;"
          type="submit"
          id="submit"
        >
          Submit
        </Button> */}
          <Button
            onClick={(o) => saveBooking(o)}
            //variant=" #2c7f86;"
            type="submit"
            id="submit"
          >
            Confirm Booking
          </Button>
          <Link to="/profile">
            <button className="btn btn-warning ml-2">Back </button>
          </Link>
        </Form>
      </div>
      {/* {/* </section> */}
    </>
  );
};

export default Addbooking;
