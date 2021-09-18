import "./Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="navbar fixed-top navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Book CRUD
        </NavLink>

        <nav className="nav">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faHome} className="me-1" /> Home
          </NavLink>
          <NavLink to="/create" className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={faPlus} className="me-1" /> New Book
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
