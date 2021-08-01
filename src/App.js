import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/home";

function App() {
    return (
        <Router>
            <Switch>
                <>
                    <div className="vh-100 d-flex flex-column">
                        <Navbar />
                        <Route exact path="/" component={HomePage} />
                    </div>
                </>
            </Switch>
        </Router>
    );
}

export default App;
