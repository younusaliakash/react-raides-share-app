import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import Destination from "./Components/Destination/Destination";
import NotFound from "./Components/NotFound/NotFound";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/destination/:vehicleName">
              <Destination></Destination>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
