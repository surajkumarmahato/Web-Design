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
import Gallery from "./MyComponent/GalleryView";
import ViewUser from "./MyComponent/User/ViewUser";
import AddUser from "./MyComponent/User/AddUser";
import AddPerm from "./MyComponent/User/AddPerm";
import Payout from "./MyComponent/Payout";
import AddProject from "./MyComponent/AddProject";
import AddProperty from "./MyComponent/AddProperty";
import ViewProperty from "./MyComponent/ViewProperty";
import AddExpenses from "./MyComponent/AddExpenses";
import AddExp from "./MyComponent/AddExp";
import ViewExp from "./MyComponent/ViewExp";



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
        <Route path="/project/addproject" element={<AddProject/>} />
        <Route path="/project/addproperty" element={<AddProperty/>} />
        <Route path="/project/viewproperty" element={<ViewProperty/>} />
        <Route path="/registration/customer" element={<CustReg />} />
        <Route path="/registration/associate" element={<AssoReg />} />
        <Route path="/registration/freelancer" element={<FreeLanReg />} />
        <Route path="/registration/landowner" element={<LandOwnerReg />} />
        <Route path="/expenses/viewexp" element={<ViewExp/>}/>
        <Route path="/expenses/addexp" element={<AddExp/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {/* <ViewUser/> */}
      {/* <AddProperty/> */}
      {/* <AddProject/> */}
      {/* <AddProject/> */}
      {/* <User/> */}
      {/* <AddProject/> */}
      {/* <AddProperty/> */}
      {/* <ViewProperty/> */}
      {/* <CustReg/> */}
      {/* <AssoReg /> */}
      {/* <FreeLanReg/> */}
      {/* <LandOwnerReg/> */}

      {/* <Dashboard/> */}

      {/* <AddUser/> */}
      {/* <Booking/> */}

      {/* <NavCust/> */}
      {/* <DocCust/> */}
      {/* <AddExp/> */}
      {/* <Payout/> */}
      {/* <AllotLet/> */}
      {/* <PosLet/> */}
      {/* <RegLet/> */}
      <Footer />
    </Router>
  );
}

export default App;
