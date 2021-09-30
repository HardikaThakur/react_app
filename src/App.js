import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Overloading from "./components/overloading";
import Overriding from "./components/overriding";

function App() {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to={"/"}>
              ProgrammingWorld
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" to={"/"}>
                    Overloading
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/overriding"}>
                    Overriding
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Overloading} />
          <Route path="/overriding" component={Overriding} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
