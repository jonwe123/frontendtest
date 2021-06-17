import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Homeicons from "./components/Homeicons";
import Info from "./components/Info";
import Gallery from "./components/Gallery";
import Testbackend from "./components/Testbackend";

function App() {
  return (
    <>
      <Navbar />
      <Testbackend />
      {/* <Header />
      <Homeicons />
      <Info />
      <Gallery /> */}
    </>
  )
}


export default App;
