import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import userservice from "../services/userservice";
import images1 from "../images/social.JPG";
const Registration = () => {
  const [username, setName] = useState("");
  const [emailId, setEmail] = useState("");

  const [password, setPass] = useState("");
  const [age, setAge] = useState("");

  const [gender, setGender] = useState("");
  const [ph_no, setPhone] = useState("");
  const [roles, setRoles] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveUser = (e) => {
    e.preventDefault();

    const user = { username, emailId, password, age, gender, ph_no, roles, id };

    if (id) {
      //update
      userservice
        .update(user)
        .then((response) => {
          console.log("user data updated successfully", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      userservice
        .create(user)
        .then((response) => {
          console.log("user added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      userservice
        .get(id)
        .then((user) => {
          setName(user.data.username);
          setEmail(user.data.emailId);
          setPass(user.data.password);
          setAge(user.data.age);
          setGender(user.data.gender);
          setPhone(user.data.ph_no);
          setRoles(user.data.roles);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  // function SubmitBtn() {
  //   if (username && emailId && password && age && gender && ph_no && roles)
  //     return (
  //       <Button
  //         onClick={(o) => saveUser(o)}
  //         variant="success"
  //         type="submit"
  //         id="submit"
  //       >
  //         <Link to="/"> Submit</Link>
  //       </Button>
  //     );
  //   else
  //     return (
  //       <Button
  //         onClick={(o) => saveUser(o)}
  //         variant="warning"
  //         type="submit"
  //         id="submit"
  //         disabled
  //       >
  //         Submit
  //       </Button>
  //     );
  // }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ backgroundColor: "#ddccff" }}>
      <Form id="registrationform">
        <h5
          style={{
            textAlign: "center",
            // textShadow: "2px 2px black",
            color: "balck",
          }}
        >
          REGISTRATION
        </h5>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#000066" }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "#000066" }}>Email address</Form.Label>
          <Form.Control
            type="email"
            
            placeholder="Enter email"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text" style={{ color: "coral" }}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#000066" }}>Password</Form.Label>
          <Form.Control
            required
            type="password"
          
            placeholder="Password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#000066" }}>Gender</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#000066" }}>Mobile No.</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Mobile No."
            value={ph_no}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#000066" }}>
            Roles(user/admin)
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="user/admin"
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
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

        <Button variant="primary" onClick={handleShow}>
          Submit
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Want to Register ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>If yes , Click on Save Changes</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(o) => saveUser(o)}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Save Changes
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
      <div>
        <footer id="footer2">
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

export default Registration;
