import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import getAll from "../services/bookingservice";
const Bookinglist = () => {
  const [booking, setBooking] = useState([]);

  const init = () => {
    getAll
      .getAll()
      .then((response) => {
        console.log("Printing all booking ", response.data);
        setBooking(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
  const handleDelete = (id) => {
    console.log("Printing id", id);
    getAll
      .remove(id)
      .then((response) => {
        console.log("Booking has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  return (
    <div className="showcase">
      <h3
        style={{
          color: "black",
          fontWeight: "bolder",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        List of Booking
      </h3>
      <hr />
      <div className="tlist">
        <table className="table table-bordered table-dark table-striped">
          <thead className="thead-light">
            <tr>
              <th> Train Name</th>
              <th> Train No</th>
              <th> FirstName</th>
              <th> LastName</th>
              <th> Age</th>
              <th> Start from</th>
              <th> Destination</th>
              <th> emailId</th>
              <th> seat no</th>
              <th> coach no</th>

            
            </tr>
          </thead>
          <tbody>
            {booking.map((bookings) => (
              <tr key={bookings.id}>
                <td>{bookings.train_name}</td>
                <td>{bookings.train_no}</td>
                <td>{bookings.fname}</td>
                <td>{bookings.lname}</td>
                <td>{bookings.age}</td>
                <td>{bookings.start_from}</td>
                <td>{bookings.destination}</td>
                <td>{bookings.emailId}</td>
                <td>{bookings.seat_no}</td>
                <td>{bookings.coach_no}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-warning" to="/Adminprofile">
        Back to Profile
      </Link>
    </div>
  );
};

export default Bookinglist;
