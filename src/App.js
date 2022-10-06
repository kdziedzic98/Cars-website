import "./App.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurOffers from "./pages/OurOffers";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/offers" element={<OurOffers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
