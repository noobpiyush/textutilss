import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";



export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.tittle}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href='#'>Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to='/about'>{props.aboutText}</Link> */}
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
       <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
       </div>
    </div>
  </div>
</nav>
    </div>
  )
}


NavBar.prototype = {
  tittle: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

NavBar.defaultProps={tittle:'piyushgreat',
aboutText:'hey'}