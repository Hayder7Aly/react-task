import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./ProtectRoutes";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>

      <Route element={<ProtectedRoutes />}>
        <Route path="/"  element={<Home />} />
      </Route>

        <Route path="/login" element={<Login />}  />

        <Route
          path="*"
          element={<h1 className="h1-not-found">Page Not Found</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
