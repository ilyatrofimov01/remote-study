import React from "react";
import { NavDropdown } from "react-bootstrap";
import { logo, noProfileImage } from "../../assets/img";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = ({ onLogOut, isLogin }: { onLogOut: Function, isLogin: boolean }) => {

  return (
    <nav className="header__container">
      <div className="header__nav-controls">
        <NavLink to={"/"} className="header__title">
          <img src={logo} alt="logo" />
          <h2>RemoteStudy</h2>
        </NavLink>
        <ul>
          <li className="header__link">
            <NavLink to={"/"}> Home </NavLink>
          </li>
          <li className="header__link">
            <NavLink to={"/videos"}> Videos </NavLink>
          </li>
          <li className="header__link">
            <NavLink to={"/price"}> Price </NavLink>
          </li>
        </ul>
      </div>

      {isLogin ?
        (<NavDropdown
          title={<img src={noProfileImage} className="profile-image" alt="profile image" />}>
          <NavDropdown.Item>My Profile</NavDropdown.Item>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => onLogOut()}>Log out</NavDropdown.Item>
        </NavDropdown>)
        :
        (<div className="sign-link__container">
            <NavLink className="sign-link" to={"/auth"}>Sign In</NavLink>
          </div>
        )}
    </nav>
  );
};
