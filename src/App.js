import React from "react";
import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
