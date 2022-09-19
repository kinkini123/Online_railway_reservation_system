import App from "./App";
import Home from "./Home";

import About from "./About";

import Landpg from "./Landpg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Trainlist from "./component1/Trainlist";
import Registration from "./component2/Registration";
import Userlist from "./component2/Userlist";
import Contact from "./Contact";
import Adminlogin from "./component2/Adminlogin";

import Bookinglist from "./component4/Bookinglist";
import Addbooking from "./component4/Addbooking";

import Profile from "./component2/Profile";

import Fullticket from "./component4/Fullticket";
import Addtrain from "./component1/Addtrain";
import Trainlist1 from "./component1/Trainlist1";
import Adminprofile from "./component2/Adminprofile";
import SignUp1 from "./component2/SignUp1";
import Bookingbyemail from "./component4/Bookingbyemail";
import { Logout } from "./Logout";
import TrainDetails from "./component1/TrainDetails";


function Land() {
  return (
    <div>
      <BrowserRouter>
        <Landpg />
        <Routes>
          {/* Land-Page Home, About */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/train" element={<Trainlist />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/user/edit/id" element={<Registration />} />
          <Route path="/UserList" element={<Userlist />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/TrainDetails" element={<TrainDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Adminprofile" element={<Adminprofile />} />
          <Route path="/Booking" element={<Bookinglist />} />
          <Route path="/Addbooking" element={<Addbooking />} />
      
          <Route path="/fullticket" element={<Fullticket />} />
          <Route path="/bookingbyemail" element={<Bookingbyemail />} />
          <Route path="/user/edit/:id" element={<SignUp1 />} />
          <Route path="/Logout" element={<Logout />} />

          <Route path="/addTrain" element={<Addtrain />} />
          <Route path="/trainlist1" element={<Trainlist1 />} />
          <Route path="/trainlist/edit/:id" element={<Addtrain />} />
          <Route path="/booking/edit/:id" element={<Addbooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Land;
