import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


// 로그인됐을때만 account 페이지 가기
const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
