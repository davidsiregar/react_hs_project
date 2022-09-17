import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Dashboard from "../Page/Dashboard/Dashboard";
import Class from "../Page/Class/Class";
import Contact from "../Page/Contact/Contact";
import Register from "../Page/Auth/Register/Register";
import Login from "../Page/Auth/Login/Login";
import "./Navbar.css";

import Logo from "../../assests/img.png";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav>
        {/* <div
        style={{ backgroundImage: `url(${backImage})` }}
      ></div> */}
        <ul className="nav_menu">
          <li>
            <Link to="/">
              <img src={Logo} alt="test" />
            </Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/class">Kelas</Link>
          </li>
          <li>
            <Link to="/contact">Hubungi Kami</Link>
          </li>
          <li>
            <Link to="/register">Daftar</Link>
          </li>
          {/* <li>
            <Link to="/login">Masuk</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/class" element={<Class />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
