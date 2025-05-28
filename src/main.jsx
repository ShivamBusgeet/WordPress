// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import BlogList from "./components/BlogList";
import SinglePost from "./components/SinglePost";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>
);
