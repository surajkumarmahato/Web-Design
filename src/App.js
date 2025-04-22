import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for JS components like carousel


import Footer from './MyComponent/Footer';
import LoginPage from './MyComponent/LoginPage';
import Home from './MyComponent/Home';
import Header from './MyComponent/Header';
import NavAdmin from './MyComponent/NavAdmin';
import Dashboard from './MyComponent/Dasboard';
import Project from './MyComponent/Project';
import User from './MyComponent/User';
import RegMain from './MyComponent/RegMain';
import CustReg from './MyComponent/CustReg';
import AssoReg from './MyComponent/AssoReg';
import FreeLanReg from './MyComponent/FreeLanReg';
import LandOwnerReg from './MyComponent/LandOwnerReg';
import Booking from './MyComponent/Booking';
import Gallery from './MyComponent/Gallery';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/logout" element={<LoginPage/>} />
        <Route path="/dashboard" element={<NavAdmin/>} />
        <Route path="/dashboardi" element={<Dashboard/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/Project" element={<Project/>} />
      </Routes>
      {/* <NavAdmin/> */}
      {/* <Dashboard/> */}
      {/* <User /> */}
      {/* <Project/> */}
      {/* <RegMain/> */}
      {/* <CustReg/> */}
      {/* <AssoReg/> */}
      {/* <FreeLanReg/> */}
      {/* <LandOwnerReg/> */}
      {/* <Booking/> */}
      {/* <Gallery/> */}

      <Footer />
    </Router>
  );
}

export default App;
