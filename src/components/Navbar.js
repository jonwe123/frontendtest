import React from "react"
import logo from "./img/Yook3.png"

const Navbar = () => {
  return (
    <nav id="mynav" className="navbar navbar-expand-sm navbar-light bg-light py-2">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          <img src={logo} className="logo" alt="" />
          {/* <img src="img/Yook3.png" width="40" height="40" alt=""> */}
          <h3 className="d-inline align-self-center">Yookmon</h3>

        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a href="index.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="images.html" className="nav-link">Images</a>
            </li>
            <li className="nav-item">
              <a href="services.html" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li>
              <a href="#" className="nav-item">
                <button type="button" className="btn btn-sm btn-primary navbutton">Sign Up</button>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                <i className="fas fa-user"></i>
              </a>
              <div className="dropdown-menu">
                <a href="profile.html" className="dropdown-item">
                  <i className="fas fa-user-circle"></i>Profile
                </a>
                <a href="setting.html" className="dropdown-item">
                  <i className="fas fa-cog"></i>Settings
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar