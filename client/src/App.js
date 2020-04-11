import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import AllArtists from './components/AllArtists';
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <>
    <div>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/all_artists" component={AllArtists} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </div>
  </>
);

export default App;
