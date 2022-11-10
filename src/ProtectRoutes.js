import React from 'react'
import { useLocation } from "react-router"
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const useAuth = async () => {
    const dispatch = useDispatch()
    const user = await JSON.parse(localStorage.getItem('user'));
    
    if(user){
        dispatch(login(user))

    }
    return user && user.loggedIn


};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;

