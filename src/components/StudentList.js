import React from "react";
import { Card, Image, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

const StudentList = props => {
  return (
    <Container className="studentlist-container">
      {props.students[0] &&
        props.students[0].map((student, i) => {
          return (
            <Card className="student" key={i}>
              <Card.Content>
                <Card.Header className="student-header">
                  {student.name}
                </Card.Header>
                <Card.Content>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Class:</span>{" "}
                      {student.class}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Project:</span>{" "}
                      {student.project}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Paper:</span>{" "}
                      {student.paper}
                    </li>
                  </ul>
                  <Card.Description>{student.info}</Card.Description>
                </Card.Content>
              </Card.Content>
            </Card>
          );
        })}
    </Container>
  );
};

export default StudentList;
