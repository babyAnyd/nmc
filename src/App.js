import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Styles/main.css";
import "./App.css";
import { HeaderMenu } from "./Components/Header";
import { Routed } from "./Components/Routes";
import { FooterEnd } from "./Components/Footer";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner
          style={{ padding: "40px", marginTop: "200px" }}
          animation="border"
          variant="primary"
        />
      ) : (
        <Router>
          <HeaderMenu />
          <Routed />
          <FooterEnd />
        </Router>
      )}
    </div>
  );
}

export default App;
