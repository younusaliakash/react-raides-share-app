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
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserInfoContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserInfoContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
              <PrivateRoute path="/destination/:vehicleName">
                <Destination></Destination>
              </PrivateRoute>
              <PrivateRoute path="/destination">
                <Destination></Destination>
              </PrivateRoute>
              <Route path="/login">
                <LogIn></LogIn>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </UserInfoContext.Provider>
  );
}

export default App;
