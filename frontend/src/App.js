import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import CreateNote from "./components/CreateNote"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Notes" element={<Notes />}></Route>
        <Route path="/Notes/:noteNum" element={<Notes />}></Route>
        <Route path="/CreateNote" element={<CreateNote />}></Route>
      </Routes>
    </Router>
);
}

export default App;
