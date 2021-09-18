import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="navbar navbar-dark bg-dark">
      <div className="container">
        <p className="mb-0">&copy; {year}, bookwriter.</p>

        <nav className="nav ms-auto">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/create" className="nav-link" activeClassName="active">
            New Book
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
