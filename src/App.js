import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navs from "./components/Navbars";
import HomePage from "./components/home";
import AddContact from "./components/addContact";

function App() {
	return (
		<Router>
			<Switch>
				<>
					<div className="vh-100 d-flex flex-column">
						<Route path="/" component={Navs} />
						<Route exact path="/" component={HomePage} />
						<Route path="/AddContact" component={AddContact} />
						<Route
							path="/About"
							component={() => (
								<>
									<div className="d-flex m-auto"></div>
								</>
							)}
						/>
					</div>
				</>
			</Switch>
		</Router>
	);
}

export default App;
