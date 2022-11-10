import React from 'react'

const Navbar = ({user,handleLogout}) => {
  return (
    
    <div className="navbar">
      <h1>
        Welcome <span className="user_name">{user ? user.name : ""}</span>
      </h1>
      <button className="logout_button" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  )
}

export default Navbar