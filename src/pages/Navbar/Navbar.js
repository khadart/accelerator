import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // For the icons
import "./Navbar.css"; // Optional custom styles
import usericon from "../../assets/usericon.svg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 "
      style={{
        borderRadius: "10px 10px 0px 0px",
        backgroundColor: "#262626",
        height: "65px",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}

        <h3
          className="navbar-brand"
          style={{ fontSize: "24px", fontWeight: "700" }}
        >
          TMM
          <span style={{ fontSize: "20px", fontWeight: "400" }}>
            Accelerator
          </span>{" "}
        </h3>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          {/* Settings Button */}
          <button
            className="btn btn-dark" style={{ backgroundColor: "#262626",border:'none'}}
            onClick={() => alert("Settings clicked!")}
          >
            <i className="bi bi-gear"></i>
          </button>

          {/* User Profile Dropdown */}
          <div className="dropdown" >
            <button
              className="btn btn-dark dropdown-toggle d-flex align-items-center"
              type="button"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "#262626",border:'none'}}
            >
              {/* Name and Role */}
              <div className="text-end me-2">
                <span
                  className="d-block"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Stanley Jhob
                </span>
                <small
                  className="text"
                  style={{
                    color: "#B2B2B2",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Admin
                </small>
              </div>

              <img
                src={usericon} // Replace with actual profile image URL
                alt="User Profile"
                className="rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              />
            </button>

            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
