import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./ProtectRoutes";
import Blog from "./pages/Blog";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>

      <Route element={<ProtectedRoutes />}>
        <Route path="/"  element={<Home />} />
        <Route path="/blog/:id"  element={<Blog />} />
      </Route>

        <Route path="/login" element={<Login />}  />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
