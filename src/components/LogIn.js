import React from "react";
import { withFormik, Form, Field } from "formik";
import { Container, Segment, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const LogIn = ({ errors, touched }) => {
  return (
    <Container
      className="Login-Page"
      style={{
        margin: "50px",
        width: "800px",
        height: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: "space-around",
        alignContent: "space-around",
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}
    >
      <Header style={{ fontSize: "2.5rem", color: "#c42847", margin: "20px" }}>
        Welcome Back Professor!
      </Header>
      <Header style={{ fontSize: "1.8rem", color: "#de3c4b", margin: "20px" }}>
        Please Log In to Continue
      </Header>
      <Form
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          padding: "0 25%",
          justifyContent: "space-between",
          alignContent: "center",
          margin: "20px"
        }}
      >
        <Segment style={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: '#000022',
            margin: '5px 0'
        }}>Username: </Segment>
        <Field type="text" name="username" style={{
            height: '20px',
            margin: '5px 0'
        }}/>
        {touched.username && errors.username && (
          <Segment className="error">{errors.username}</Segment>
        )}
        <Segment style={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: '#000022',
            margin: '5px 0'
        }}>Password: </Segment>
        <Field type="password" name="password" style={{
            height: '20px',
            margin: '5px 0 10px 0'
        }}/>
        {touched.password && errors.password && (
          <Segment className="error">{errors.password}</Segment>
        )}
        <button className="form-button">Log In</button>
      </Form>
      <Container className="signup-link" style={{
          margin: '10px'
      }}>
        <Segment>Don't have an account?</Segment>
        <NavLink
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#c42847",
            fontSize: "1.3rem",
            margin: "5px"
          }}
        >
          Sign Up
        </NavLink>
      </Container>
    </Container>
  );
};

const FormikLogInForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || ""
    };
  },
  //=====VALIDATION SCHEMA=====
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string().required("Please enter a valid password")
  }),
  //=====END OF VALIDATION SCHEMA=====
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://betterprofessor.herokuapp.com/api/login", values)
      .then(res => {
        console.log("HTTP POST Response: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => {
        console.log('ERROR: ', err);
        resetForm();
      });
  }
})(LogIn);

export default FormikLogInForm;