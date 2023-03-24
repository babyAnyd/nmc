import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Styles/main.css";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { HeaderMenu } from "./Components/Header";
import { Photos } from "./Pages/Photos";
import { FooterEnd } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
        <FooterEnd />
      </Router>
    </div>
  );
}

export default App;
