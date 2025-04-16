import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import MainPage from './MyComponent/MainPage';
import BlockOption from './MyComponent/BlockOption';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <Header/>
      <MainPage/>
      {/* <BlockOption/> */}
      <Footer/>
    </>
  );
}

export default App;
