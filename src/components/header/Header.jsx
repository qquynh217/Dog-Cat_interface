import "./Header.scss";
import logo from "@/assets/logo.png";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import InstaIcon from "@/assets/icons/InstaIcon";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <img src={logo} alt="" className="icon" />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          Home
        </NavLink>
        <NavLink
          to="/classification"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          Classification
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/code"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          Source code
        </NavLink>
      </nav>
      <div className="contact">
        <FacebookIcon className="icon" />
        <InstaIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
