import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './MyComponent/Footer';
import LoginPage from './MyComponent/LoginPage';
import BlockOption from './MyComponent/BlockOption';
import Home from './MyComponent/Home';
import Header from './MyComponent/Header';
import AllDashboard from './MyComponent/AllDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blocks" element={<BlockOption />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/logout" element={<LoginPage/>} />
        <Route path="/dashboard" element={<AllDashboard/>} />


      </Routes>
      <Footer />
    </Router>
    // <AllDashboard/>
  );
}

export default App;
