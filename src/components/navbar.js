import { NavLink } from "react-router-dom";
import "./css/navbar.css";

export default function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand brand" to="/">
                    Contact <span style={{ color: "#ffff00" }}>Manager</span>
                </NavLink>
                <button
                    className="navbar-toggler shadow-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon small"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav ms-auto mt-2 mt-md-0">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                className="nav-link px-3 mx-md-2"
                                activeClassName="active"
                            >
                                <i className="fas fa-house-user"></i> Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 mx-md-2"
                                activeClassName="active"
                                to="/AddContact"
                            >
                                <i className="fas fa-user-plus"></i> New
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link px-3 mx-md-2"
                                activeClassName="active"
                                to="/About"
                            >
                                <i className="fas fa-users-cog"></i> About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
