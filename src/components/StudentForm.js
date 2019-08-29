import React from "react";
import { Form, Button, Header, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

 const StudentForm = props => {
  const changeHandler = e => {
    props.fieldState[1]({
      ...props.fieldState[0],
      [e.target.name]: e.target.value
    });
  };

   const submitForm = event => {
    event.preventDefault();

     const newStudent = props.fieldState[0];

     props.fieldState[0].name === "" ||
    props.fieldState[0].class === "" ||
    props.fieldState[0].project === "" ||
    props.fieldState[0].paper === ""
      ? alert("All fields are required.")
      : props.createNewStudent(newStudent);
  };

   return (
    <Form onSubmit={event => submitForm(event)}>
      <Container>
        <Header>Add A New Student</Header>
      </Container>
      <Container className="form-fields">
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={props.fieldState[0].name}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Class</label>
          <input
            placeholder="Class"
            name="class"
            value={props.fieldState[0].class}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Project</label>
          <input
            placeholder="Project"
            name="project"
            value={props.fieldState[0].project}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Form.Field>
          <label>Paper</label>
          <input
            placeholder="Paper"
            name="paper"
            value={props.fieldState[0].paper}
            onChange={event => changeHandler(event)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Container>
    </Form>
  );
};
export default StudentForm;