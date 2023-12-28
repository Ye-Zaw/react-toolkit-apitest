import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Userlist from "./pages/Userlist";
import Userdetail from "./pages/Userdetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="user/">Users</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/" element={<Userlist />}></Route>
          <Route path="/user/:myId" element={<Userdetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
