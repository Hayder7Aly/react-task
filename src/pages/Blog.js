import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { blogList } from "../config/data";
import "../style/blog.css"
import Article from "../components/Article";

const Blog = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [blog, setBlog] = useState()

  useEffect(() => {
    const article = blogList.find(blog => blog.id === +id)
    setBlog(article)

  },[id])

  

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/login", {replace: true});
  };
  return (
    <div>
      <div className="navbar">
        <h1>
          Welcome <span className="user_name">{user ? user.name : ""}</span>
        </h1>
        <button className="logout_button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>

      {
        blog ? <Article  {...blog}/> : ""
      }

    </div>
  );
};

export default Blog;
