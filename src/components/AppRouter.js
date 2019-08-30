import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FormikLogInForm from "./LogIn";
import FormikSignUpForm from "./SignUp";
import LandingPage from "./LandingPage";

export default function AppRouter() {

  return (
    <Container className="app-router">
      <Switch>
        <Route path="/login" component={FormikLogInForm} />
        <Route path="/signup" component={FormikSignUpForm} />
        <Route path="/landingpage" component={LandingPage} />
      </Switch>
    </Container>
  );
}
