import React from "react";
import StudentList from "./StudentList.js";
import Messanger from "./Messanger.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FormikLogInForm from "./LogIn";
import FormikSignUpForm from "./SignUp";
import LandingPage from "./LandingPage";

export default function AppRouter() {

  const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )

       <Route 
        path="/messages" 
        render={props => <Messanger {...props} />}
      />


    </div>
  return (
    <Container className="app-router">
      <Switch>
        <Route path="/login" component={FormikLogInForm} />
        <Route path="/signup" component={FormikSignUpForm} />
        <PrivateRouter path="/landingpage" component={LandingPage} />
      </Switch>
    </Container>
  );
}
