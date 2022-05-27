import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="nav-container">
        <img src="Images/logo.jpg" alt="logo" className="nav-logo" />

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="#"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              หน้าแรก
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="#"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              เกี่ยวกับฉัน
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="#"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              คลังพระเครื่อง
            </NavLink>
          </li>
        </ul>
        <div className="register">
          <button>สมัครสมาชิก</button>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
