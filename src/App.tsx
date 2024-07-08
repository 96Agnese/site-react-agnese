import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Homepage from "./screen/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Project from "./screen/Project/Project";
import Contact from "./screen/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
