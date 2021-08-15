import { NavLink } from "react-router-dom";
import "./css/navbar.css";

export default function Navbar() {

	const theme = angle => {
		document.body.style.filter = `hue-rotate(${angle}deg)`;
		let img = document.getElementsByTagName("img");
		let noFilter = document.getElementsByClassName("no-filter");
		for (let i = 0; i < img.length; i++) img[i].style.filter = `hue-rotate(-${angle}deg)`;
		for (let i = 0; i < noFilter.length; i++)
			noFilter[i].style.filter = `hue-rotate(-${angle}deg)`;
	};

	return (
		<nav id="navbar" className="navbar navbar-expand-md navbar-dark py-sm-2 py-1">
			<div className="container-fluid">
				<NavLink className="navbar-brand brand" to="/">
					Contact <span style={{ color: "#ffff00" }}>Manager</span>
				</NavLink>
				{/* <button
					className="navbar-toggler shadow-sm d-none"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon small"></span>
				</button> */}
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
								className="dropdown-menu  position-absolute"
								style={{ left: "-75px" }}
								aria-labelledby="navbarDropdown">
								<li className="px-3 py-1">
									<span
										className="dropdown-item theme no-filter"
										style={{ background: "#438cf9" }}
										onClick={() => theme(0)}>
										Default
									</span>
								</li>
								<li className="px-3 py-1">
									<span
										className="dropdown-item theme no-filter"
										style={{ background: "#a96dff" }}
										onClick={() => theme(45)}>
										Theme 1
									</span>
								</li>
								<li className="px-3 py-1">
									<span
										className="dropdown-item theme no-filter"
										style={{ background: "#f95bc5" }}
										onClick={() => theme(90)}>
										Theme 2
									</span>
								</li>
								<li className="px-3 py-1">
									<span
										className="dropdown-item theme no-filter"
										style={{ background: "#04a7a9" }}
										onClick={() => theme(315)}>
										Theme 3
									</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
