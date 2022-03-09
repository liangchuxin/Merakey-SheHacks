import React, { useState } from "react";
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
//   Redirect,
// } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import GameDetails from "./components/gameDetails";
import PlayGame from "./components/playGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/games/demo" element={<GameDetails />} />
          <Route path="/games/demo/play" element={<PlayGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
