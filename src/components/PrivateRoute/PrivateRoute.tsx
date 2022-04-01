import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

export const PrivateRoute = () => {
  const isAuth: boolean = useSelector((state: RootState) => state.auth.authenticated);
  return isAuth ? (<Outlet />) : (<Navigate to="/auth" />);
};