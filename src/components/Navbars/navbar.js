import { NavLink } from "react-router-dom";
import Themes from "../themes";
import "../css/navbar.css";

export default function Navbar(props) {

	return (
		<nav id="navbar" className="navbar navbar-expand-md navbar-dark py-sm-2 py-1 sticky-top">
			<div className="container-fluid">
				<NavLink className="navbar-brand brand" to="/">
					Contact <span style={{ color: "#ffff00" }}>Manager</span>
				</NavLink>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								className="nav-link px-3 mx-md-2"
								activeClassName="active">
								<i className="fas fa-house-user"></i> Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link px-3 mx-md-2"
								activeClassName="active"
								to="/AddContact">
								<i className="fas fa-user-plus"></i> New
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link px-3 mx-md-2"
								activeClassName="active"
								to="/About">
								<i className="fas fa-users-cog"></i> About
							</NavLink>
						</li>
						<li className="nav-item dropdown theme-tag">
							<div
								className="nav-link px-3 mx-md-2 dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<i className="fas fa-palette"></i> Theme
							</div>
							<ul
								className="dropdown-menu position-absolute"
								style={{ left: "-50px" }}
								aria-labelledby="navbarDropdown">
								{Themes.map((theme, index) => (
									<li className="px-3 py-1" key={index}>
										<span
											className={`dropdown-item theme no-filter ${
												props.themeNo() === index ? "active-theme" : ""
											}`}
											style={{ background: theme.color }}
											onClick={() => props.setThemeNo(index)}>
											{theme.name}
										</span>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
