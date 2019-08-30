import React from "react";
import { withFormik, Form, Field } from "formik";
import { Container, Segment, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const SignUp = ({ errors, touched }) => {
  return (
    <Container className="page-wrapper">
      <Container
        className="page-header"
        style={{
          display: "flex"
        }}
      >
        <Header
          style={{
            fontSize: "3rem",
            color: "#c42847",
            margin: "10px 500px 0 405px",
            whiteSpace: 'nowrap'
          }}
        >
          Better Professor
        </Header>
        <NavLink
          to="/login"
          style={{
            textDecoration: "none",
            color: "#c42847",
            fontSize: "1.6rem",
            margin: "10px",
            whiteSpace: 'nowrap'
          }}
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#c42847",
            fontSize: "1.6rem",
            margin: "10px",
            whiteSpace: 'nowrap'
          }}
        >
          Sign Up
        </NavLink>
      </Container>
      <Container
        className="Signup-Page"
        style={{
          margin: "50px",
          width: "800px",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          alignItems: "space-around",
          alignContent: "space-around",
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <Header
          style={{ fontSize: "2.5rem", color: "#c42847", margin: "20px" }}
        >
          Welcome Professor!
        </Header>
        <Header
          style={{ fontSize: "1.8rem", color: "#de3c4b", margin: "20px" }}
        >
          Fill Out the Sections Below to Sign Up
        </Header>
        <Form
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            padding: "0 25%",
            justifyContent: "space-between",
            alignItems: "space-around",
            margin: "20px 0",
            height: "100%",
            backgroundColor: "white",
            width: "100%",
            borderRadius: "0"
          }}
        >
          <Header style={{ fontSize: "1.2rem", color: "#de3c4b" }}>
            All Fields Are Required
          </Header>
          <Segment
            style={{
              display: "flex",
              justifyContent: "flex-start",
              color: "#000022",
              margin: "5px 0",
              border: "none",
              padding: "5px 0",
              boxShadow: "none"
            }}
          >
            Email Address(Username):
          </Segment>
          <Field
            type="email"
            name="username"
            style={{
              height: "20px",
              margin: "5px 0"
            }}
          />
          {touched.username && errors.username && (
            <Segment className="error">{errors.username}</Segment>
          )}
          <Segment
            style={{
              display: "flex",
              justifyContent: "flex-start",
              color: "#000022",
              margin: "5px 0",
              border: "none",
              padding: "5px 0",
              boxShadow: "none"
            }}
          >
            Password:
          </Segment>
          <Field
            type="password"
            name="password"
            style={{
              height: "20px",
              margin: "5px 0"
            }}
          />
          {touched.password && errors.password && (
            <Segment className="error">{errors.password}</Segment>
          )}
          <button className="form-button">Sign Up!</button>
        </Form>
        <Container className="login-link" style={{ margin: "10px" }}>
          <Segment
            style={{
              border: "none",
              boxShadow: "none",
              padding: "5px"
            }}
          >
            Already have an account?
          </Segment>
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "#c42847",
              fontSize: "1.3rem",
              border: "none",
              padding: "5px"
            }}
          >
            Log In
          </NavLink>
        </Container>
      </Container>
    </Container>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || ""
    };
  },
  //=====VALIDATION SCHEMA=====
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Please enter a valid password")
  }),
  //=====END OF VALIDATION SCHEMA=====
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://betterprofessor.herokuapp.com/api/register", values)
      .then(res => {
        console.log("HTTP POST Response: ", res);
        setStatus(res.data);
        resetForm();
      });
  }
})(SignUp);

export default FormikSignUpForm;
