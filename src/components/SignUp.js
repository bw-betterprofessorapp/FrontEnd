import React from "react";
import { withFormik, Form, Field } from "formik";
import { Container, Segment, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const SignUp = ({ errors, touched }) => {
 
  return (
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
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}
    >
      <Header style={{ fontSize: "2.5rem", color: "#c42847", margin: "20px" }}>
        Welcome Professor!
      </Header>
      <Header style={{ fontSize: "1.8rem", color: "#de3c4b", margin: "20px" }}>
        Fill Out the Sections Below to Sign Up
      </Header>
      <Form
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          padding: "0 25%",
          justifyContent: "space-between",
          alignItems: "space-around",
          margin: "20px",
          height: '100%'
        }}
      >
        <Header style={{ fontSize: "1.2rem", color: "#de3c4b" }}>
          All Fields Are Required
        </Header>
        {/* <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>
            First Name
          </Segment>
        <Field type="text" name="firstName" style={{
          height: '20px',
          margin: '5px 0'
        }}/>
        {touched.firstName && errors.firstName && (
          <Segment className="error">{errors.firstName}</Segment>
        )}
        <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>Last Name</Segment>
        <Field type="text" name="lastName" style={{
          height: '20px',
          margin: '5px 0'
        }}/>
        {touched.lastName && errors.lastName && (
          <Segment className="error">{errors.lastName}</Segment>
        )} */}
        <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0 10px 0'
          }}>Email Address(Username)</Segment>
        <Field type="email" name="username" style={{
          height: '20px',
          margin: '5px 0 10px 0'
        }}/>
        {touched.username && errors.username && (
          <Segment className="error">{errors.username}</Segment>
        )}
        {/* <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>Username</Segment>
        <Field type="text" name="username" style={{
          height: '20px',
          margin: '5px 0'
        }}/>
        {touched.username && errors.username && (
          <Segment className="error">{errors.username}</Segment>
        )} */}
        <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0 10px 0'
          }}>Password</Segment>
        <Field type="password" name="password" style={{
          height: '20px',
          margin: '5px 0 10px 0'
        }}/>
        {touched.password && errors.password && (
          <Segment className="error">{errors.password}</Segment>
        )}
        {/* <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>College/University</Segment>
        <Field type="text" name="college" style={{
          height: '20px',
          margin: '5px 0'
        }}/>
        {touched.college && errors.college && (
          <Segment className="error">{errors.college}</Segment>
        )}
        <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>Subject</Segment>
        <Field type="text" name="subject" style={{
          height: '20px',
          margin: '5px 0'
        }}/>
        {touched.subject && errors.subject && (
          <Segment className="error">{errors.subject}</Segment>
        )}
        <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>I want to use Better Professor To</Segment>
        <Field component="select" name="reason" style={{
          height: '20px',
          margin: '5px 0',
          width: '70%'
        }}>
          <option>Select a Reason</option>
          <option value="Better Communicate with my Students">
            Better Communicate with my Students
          </option>
          <option value="Be More Organized and Punctual">
            Be More Organized and Punctual
          </option>
          <option value="Consolidate My Planning into One Place">
            Consolidate My Planning into One Place
          </option>
          <option value="Other">Other</option>
        </Field>
        {touched.reason && errors.reason && (
          <Segment className="error">{errors.reason}</Segment>
        )}
        <Segment style={{
          display: 'flex', 
          justifyContent:'flex-start', 
          color: '#000022',
          margin: '5px 0'
          }}>If 'Other', Please Explain</Segment>
        <Field type="text-area" name="other" style={{
          height: '50px',
          margin: '5px 0',
        }}/>
        {touched.other && errors.other && (
          <Segment className="error">{errors.other}</Segment>
        )}
        <label>
          <Field type="checkbox" name="terms" checked={values.terms}/>
          I Agree to BetterProfessor's Terms and Conditions
          {touched.terms && errors.terms && (
            <Segment className="error">{errors.terms}</Segment>
          )}
        </label> */}
        <button className="form-button">Sign Up!</button>
      </Form>
      <Container className="login-link" style={{ margin: '10px'}}>
        <Segment>Already have an account?</Segment>
        <NavLink to="/login" style={{textDecoration: 'none', color: '#c42847', fontSize: '1.3rem'}}>Log In</NavLink>
      </Container>
    </Container>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(values) {
    return {
      // firstName: values.firstName || "",
      // lastName: values.lastName || "",
      // email: values.email || "",
      username: values.username || "",
      password: values.password || "",
      // college: values.college || "",
      // subject: values.subject || "",
      // reason: values.reason || "",
      // other: values.other || "",
      // terms: values.terms || false
    };
  },
  //=====VALIDATION SCHEMA=====
   validationSchema: Yup.object().shape({
  //   firstName: Yup.string().required("First name can not be left blank"),
  //   lastName: Yup.string().required("Last name can not be left blank"),
  //   email: Yup.string()
  //     .email("Please enter a valid email address")
  //     .required("Email can not be left blank"),
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Please enter a valid password"),
  //   college: Yup.string().required(
  //     "Please indicate at which college/university you teach"
  //   ),
  //   subject: Yup.string().required("Please enter the subject you teach"),
  //   reason: Yup.string().required(
  //     "Please select the reason for creating this account"
  //   ),
  //   terms: Yup.bool()
  //     .oneOf([true], "Please accept the Terms and Conditions")
  //     .required()
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
