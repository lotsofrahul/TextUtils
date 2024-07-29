import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.bgMode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>
                {props.first_variable}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div onClick={()=>{props.toggleMode('primary')}} className="bg-primary rounded mx-2" style={{height:'25px',
          width:'25px',cursor:'pointer'}}></div>
            <div onClick={()=>{props.toggleMode('success')}} className="bg-success rounded mx-2" style={{height:'25px',
          width:'25px',cursor:'pointer'}}></div>
            <div onClick={()=>{props.toggleMode('danger')}} className="bg-danger rounded mx-2" style={{height:'25px',
          width:'25px',cursor:'pointer'}}></div>
            <div onClick={()=>{props.toggleMode('secondary')}} className="bg-secondary rounded mx-2" style={{height:'25px',
          width:'25px',cursor:'pointer'}}></div>
            <div onClick={()=>{props.toggleMode('warning')}} className="bg-warning rounded mx-2" style={{height:'25px',
          width:'25px',cursor:'pointer'}}></div>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
      <div className="form-check form-switch" onClick={props.toggleMode2}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        {/* text-light class can also be managed by => props.mode === 'light'?'dark':'light' */}
        <label className={`form-check-label mx-2 text-${props.textMode}`}  htmlFor="flexSwitchCheckDefault">
          YellowDarkMode
        </label>
      </div>
      {/* <div className="form-check form-switch" onClick={props.toggleMode}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        {/* text-light class can also be managed by => props.mode === 'light'?'dark':'light' */}
        {/* <label className={`form-check-label mx-2 text-${props.textMode}`}  htmlFor="flexSwitchCheckDefault">
          RedDarkMode
        </label> */}
      {/* </div> */}
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  first_variable: PropTypes.string,
};

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     first_variable: PropTypes.string
// };

Navbar.defaultProps = {
  title: "Set Title here",
};
