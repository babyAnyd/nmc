import { NavList } from "./NavbarList";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
export const HeaderMenu = () => {
  return (
    <header>
      <nav id="nav-main" className="navbar pt-4 pt-lg-5 pt navbar-expand-md ">
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
            <div id="navbar-ul">
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
        </div>
      </nav>
    </header>
  );
};

{
  /* <nav class="navbar navbar-expand-md fixed-top">
  <div class="container-fluid mt-lg-4">
    <a class="navbar-brand" href="#">
      Brand
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCollapse"
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
</nav>; */
}
