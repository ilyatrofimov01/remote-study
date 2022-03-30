import { AuthService } from "../../services/Auth/AuthService";
import { logOutUser } from "../../redux/reducers/User/reducer";
import { setAuthenticated } from "../../redux/reducers/Auth/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    AuthService.logout();
    dispatch(logOutUser());
    dispatch(setAuthenticated(false));
    navigate("/auth");
  };
};