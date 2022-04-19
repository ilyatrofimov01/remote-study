import React, { useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../Header";
import { Auth } from "../Auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { setAuthenticated } from "../../redux/reducers/Auth/reducer";
import { useLogout } from "../../hooks";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { VideoPage } from "../VideoPage";
import { HomePage } from "../HomePage";
import { axiosAuthInterceptor } from "../../utils";
import { CoursesPage } from "../CoursesPage";
import { CreateNewCoursePage } from "../CreateNewCoursePage";

export const App = () => {
  const { user, auth } = useSelector((state: RootState) => state);
  const logout = useLogout();
  const dispatch = useDispatch();
  let logoutTimer = useRef<any>();

  useEffect(() => {
    axiosAuthInterceptor();
  }, [localStorage.getItem("user")]);

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
      <div className="container-lg">
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/videos" element={<PrivateRoute />}>
            <Route path="/videos" element={<VideoPage />} />
          </Route>
          <Route path="/courses" element={<PrivateRoute />}>
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/create-new" element={<CreateNewCoursePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};