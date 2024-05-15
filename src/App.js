import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MoviePage from "./pages/MoviePage";
import WrongPage from "./pages/WrongPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moviepage/:mood" element={<MoviePage />} />
          <Route path="/wrongpage" element={<WrongPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;