import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileNav from "./components/mobileNav";
import Navbar from "./components/navbar";
import HomePage from "./components/home";

function App() {
	return (
		<Router>
			<Switch>
				<>
					<div className="vh-100 d-flex flex-column">
						<Route path="/" component={Navbar} />
						<Route exact path="/" component={HomePage} />
						<Route
							path="/AddContact"
							component={() => (
								<>
									<div className="d-flex m-auto"></div>
								</>
							)}
						/>
						<Route
							path="/About"
							component={() => (
								<>
									<div className="d-flex m-auto"></div>
								</>
							)}
						/>
						<Route path="/" component={MobileNav} />
					</div>
				</>
			</Switch>
		</Router>
	);
}

export default App;
