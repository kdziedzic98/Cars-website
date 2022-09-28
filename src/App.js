import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
