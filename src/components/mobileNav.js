import { NavLink } from "react-router-dom";
import "./css/navbar.css";

export default function MobileNav(props) {
	return (
		<nav id="navbar" className="navbar mobile-navbar navbar-expand navbar-dark pb-0 pt-1">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav w-100 d-flex justify-content-around fs-5">
						<li className="nav-item">
							<NavLink
								className="nav-link px-3 mx-md-2"
								activeClassName="mobile-nav-active"
								to="/AddContact">
								<i className="fas fa-user-plus"></i>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								className="nav-link px-3 mx-md-2"
								activeClassName={
									sessionStorage.getItem("Active") === "false"
										? "mobile-nav-active"
										: ""
								}
								onClick={() => {
									sessionStorage.setItem("Active", false);
								}}>
								<i className="fas fs-4 fa-address-book"></i>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link px-3 mx-md-2"
								activeClassName="mobile-nav-active"
								to="/About">
								<i className="fas fa-users-cog"></i>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
