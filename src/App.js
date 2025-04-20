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
import Project2 from './MyComponent/Project2';
import User from './MyComponent/User';
import RegMain from './MyComponent/RegMain';
import CustReg from './MyComponent/CustReg';
import AssoReg from './MyComponent/AssoReg';
import FreeLanReg from './MyComponent/FreeLanReg';
import LandOwnerReg from './MyComponent/LandOwnerReg';

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
        <Route path="/Project2" element={<Project2/>} />


        
      </Routes>

      {/* <Dashboard/> */}
      {/* <Project/> */}
      {/* <AssoReg/> */}
      {/* <FreeLanReg/> */}
      {/* <LandOwnerReg/> */}
      {/* <LandOwnerReg/> */}

      <Footer />
    </Router>
  );
}

export default App;
