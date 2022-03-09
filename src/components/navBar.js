import "../styles/navBar.scss";
import logo from "../images/logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img className="logo" src={logo} />
        </div>
        <div className="navigation">
          <ul>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Subjects</a>
            </li>
            <li>
              <a href="#">Upgrade</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
