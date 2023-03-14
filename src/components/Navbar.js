import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const btnStyle= {
  //   height:"20px",
  //   width:"20px",
  //   borderRadius: "50%",
  //   marginRight: "10px"
  // }

  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          {/* <ul style={{listStyle:"none"}}>
            <li><button type="button" style={btnStyle}></button></li>
          </ul> */}
          {/* <ul className="navbar-nav mb-2 mb-lg-0">
            <li><button type="button" style={{...btnStyle, backgroundColor: "black"}} onClick={()=> props.toggleMode("black")}></button></li>
            <li><button type="button" style={{...btnStyle, backgroundColor: "#2C3333"}} onClick={()=> props.toggleMode("#2C3333")}></button></li>
            <li><button type="button" style={{...btnStyle, backgroundColor: "#1A120B"}} onClick={()=> props.toggleMode("#1A120B")}></button></li>
            <li><button type="button" style={{...btnStyle, backgroundColor: "#3A1078"}} onClick={()=> props.toggleMode("#3A1078")}></button></li>
          </ul> */}

          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps= {
    title: "Title",
    about: "About"
}
