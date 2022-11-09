import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import "../style/home.css"
import { useNavigate } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(selectUser)
    
 

    const handleLogout = () => {
      dispatch(logout())
      navigate("/login")
      localStorage.clear()
    }


  return (
    <div className='container'>
      <div className='content'>

        <h1>Welcome <span className='user_name'>{user ? user.name : ""}</span></h1>
        <button className='logout_button' onClick={() => handleLogout()}>Logout</button>
      </div>

    </div>
  )
}

export default Home