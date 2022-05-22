import React from 'react'
import { logout, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();
  const currentUser = useAuth();
  const handleLogout = async () => {
   
    try {
      await logout();
      navigate("/")
    } catch {
      alert("error");
    }
  
  };
  return (
    <div>
      환영합니다 {currentUser?.email}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Home
