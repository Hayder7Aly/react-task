import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../style/login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
        name,
        email,
        password,
        loggedIn: true
    }))
    localStorage.setItem("user", JSON.stringify({name,email,password, loggedIn: true}))
    navigate("/")
    

  }

  return (
    <div className="container">

      <form className="login" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="title">Login Form</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="registerbtn">Submit</button>
      </form>
    </div>

  );
};

export default Login;
