import { NavList } from "./NavbarList";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
export const HeaderMenu = () => {
  return (
    <header>
      <nav className="navbar mt-5  navbar-expand-md">
        <img className="logo mx-auto" src={logo} alt="logo" />
        <div className="container-fluid mt-lg-4">
          <span></span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {NavList.map((list) => {
                return (
                  <li className="nav-item">
                    <Link to={list.links} className="nav-link">
                      {list.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
