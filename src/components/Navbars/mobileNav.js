import { NavLink } from "react-router-dom";
import Themes from "../themes";
import "../css/navbar.css";

export default function MobileNav(props) {

	const ThemeStyle = theme => {
		const { color } = theme;
		return {
			active: {
				background: `radial-gradient(circle,${color},${color},#fff,${color},${color})`,
				padding: "10px",
			},
			inactive: { border: `5px solid ${color}`, padding: "5px" },
		};
	};

	return (
		<nav
			id="navbar"
			className="navbar mobile-navbar navbar-expand navbar-dark pb-0 pt-1 position-absolute w-100"
			style={{ bottom: "0" }}>
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav w-100 d-flex justify-content-around fs-5">
						<li className="nav-item">
							<NavLink
								className="nav-link px-3 mx-md-2"
								activeClassName="mobile-nav-active"
								to="/About">
								<i className="fas fa-users-cog"></i>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								className="nav-link px-3 mx-md-2"
								activeClassName="mobile-nav-active"
								onClick={() => {
									sessionStorage.setItem("Active", false);
								}}>
								<i className="fas fs-4 fa-address-book"></i>
							</NavLink>
						</li>
						<li className="nav-item dropdown theme-tag">
							<div
								className="nav-link px-3 mx-md-2 dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<i className="fas fa-palette"></i>
							</div>
							<ul
								className="dropdown-menu position-absolute"
								style={{}}
								aria-labelledby="navbarDropdown">
								{Themes.map((theme, index) => (
									<li className="p-1" key={index}>
										<div
											className="theme no-filter rounded-circle mx-auto"
											style={
												props.themeNo() === index
													? ThemeStyle(theme).active
													: ThemeStyle(theme).inactive
											}
											onClick={() => props.setThemeNo(index)}></div>
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
