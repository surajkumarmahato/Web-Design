import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for JS components like carousel

import Footer from "./MyComponent/Footer";
import LoginPage from "./MyComponent/LoginPage";
import Home from "./MyComponent/Home";
import Header from "./MyComponent/Header";
import NavAdmin from "./MyComponent/NavAdmin";
import Dashboard from "./MyComponent/Dasboard";
import Project from "./MyComponent/Project";
import User from "./MyComponent/User";
import RegMain from "./MyComponent/RegMain";
import CustReg from "./MyComponent/CustReg";
import AssoReg from "./MyComponent/AssoReg";
import FreeLanReg from "./MyComponent/FreeLanReg";
import LandOwnerReg from "./MyComponent/LandOwnerReg";
import Booking from "./MyComponent/Booking";
import Gallery from "./MyComponent/Gallery";
import ViewUser from "./MyComponent/User/ViewUser";
import AddUser from "./MyComponent/User/AddUser";
import AddPerm from "./MyComponent/User/AddPerm";
import Payout from "./MyComponent/Payout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/dashboard" element={<NavAdmin />} />
        <Route path="/dashboardi" element={<Dashboard />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/view" element={<ViewUser />} />
        <Route path="/user/prem" element={<AddPerm />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/registration/customer" element={<CustReg />} />
        <Route path="/registration/associate" element={<AssoReg />} />
        <Route path="/registration/freelancer" element={<FreeLanReg />} />
        <Route path="/registration/landowner" element={<LandOwnerReg />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {/* <NavAdmin/> */}
      {/* <Dashboard/> */}
      {/* <User /> */}
      {/* <ViewUser/> */}
      {/* <AddUser/> */}
      {/* < AddPerm/> */}
      {/* <Project/> */}
      {/* <RegMain/> */}
      {/* <CustReg/> */}
      {/* <AssoReg/> */}
      {/* <FreeLanReg/> */}
      {/* <LandOwnerReg/> */}
      {/* <Booking/> */}
      {/* <Gallery/> */}
      {/* <Payout/> */}

      <Footer />
    </Router>
  );
}

export default App;
