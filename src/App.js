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
import Gallery from './MyComponent/GalleryView';
import ViewUser from './MyComponent/ViewUser';
import AddUser from './MyComponent/AddUser';
import AddPerm from './MyComponent/AddPerm';
import Payout from './MyComponent/Payout';
import GalleryView from './MyComponent/GalleryView';
import GalleryAdd from './MyComponent/GalleryAdd';
import AddProject from './MyComponent/AddProject';
import AddProperty from './MyComponent/AddProperty';
import ViewProperty from './MyComponent/ViewProperty';
import NavCust from './MyComponent/NavCust';
import DocCust from './MyComponent/DocCust';
import AddExp from './MyComponent/AddExp';
import ViewExp from './MyComponent/ViewExp';
import AllotLet from './MyComponent/AllotLet';
import PosLet from './MyComponent/PosLet';
import RegLet from './MyComponent/RegLet';

function App() {
  return (

    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/logout" element={<LoginPage/>} />
        <Route path="/dashboardi" element={<Dashboard/>} />
        <Route path="/user/add" element={<AddUser/>} />
        <Route path="/user/view" element={<ViewUser/>} />
        <Route path="/user/prem" element={<AddPerm/>} />
        <Route path="/project/addproperty" element={<AddProperty/>} />
        <Route path="/project/viewproperty" element={<ViewProperty/>} />
        <Route path="/project/addproject" element={<AddProject/>} />
        <Route path="/registration/customer" element={<CustReg/>} />
        <Route path="/registration/associate" element={<AssoReg/>} />
        <Route path="/registration/freelancer" element={<FreeLanReg/>} />
        <Route path="/registration/landowner" element={<LandOwnerReg/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/gallery/galleryview" element={<GalleryView/>} />
        <Route path="/gallery/galleryadd" element={<GalleryAdd/>} />
        <Route path="/docs" element={<DocCust/>} />
        <Route path="/expenses/addexpenses" element={<AddExp/>} />
        <Route path="/expenses/viewexpenses" element={<ViewExp/>} /> */}
      </Routes>
      {/* <AddProject/> */}
      {/* <AddProperty/> */}
      {/* <ViewProperty/> */}
      {/* <Dashboard/> */}
      {/* <CustReg/> */}
      <AssoReg/>
      {/* <FreeLanReg/> */}
      {/* <AddUser/> */}
      {/* <LandOwnerReg/> */}
      {/* <Booking/> */}
      {/* <GalleryView/> */}
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
