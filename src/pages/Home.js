import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "../style/home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import { blogList } from "../config/data";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/login", {replace: true});
  };


  return (
    <div className="main-container-blog">
      <Navbar handleLogout={() => handleLogout()} user={user} />

      <div className="main">
      <h1 className="blogsTitle">Blogs</h1>
      <ul className="cards">
        {blogList.map((blog,id) => <Blog {...blog} key={id}/>)}
      </ul>

          
      </div>


    </div>
  );
};

export default Home;
