import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { Auth } from "../Auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { setAuthenticated } from "../../redux/reducers/Auth/reducer";
import { useLogout } from "../../hooks";


export const App = () => {
  const { user, auth } = useSelector((state: RootState) => state);
  const logout = useLogout();
  const dispatch = useDispatch();
  let logoutTimer = useRef<any>();

  useEffect(() => autoAuth(), [user.token]);

  const autoAuth = () => {
    const expirationDuration = new Date(user.expirationDate).getTime() - new Date().getTime();
    if (expirationDuration > 0) {
      dispatch(setAuthenticated(true));
      logoutTimer.current = setTimeout(() => {
        logout();
      }, expirationDuration);
    } else {
      dispatch(setAuthenticated(false));
    }
  };

  const onLogOut = () => {
    clearTimeout(logoutTimer.current);
    logout();
  };

  return (
    <div>
      <Header onLogOut={onLogOut} isLogin={auth.authenticated} />
      <Routes>
        <Route path="/auth" element={<Auth />}>
        </Route>
      </Routes>
    </div>
  );
};