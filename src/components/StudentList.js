import React, { useState } from 'react';
import StudentForm from './StudentForm.js';
import { Accordian, Icon } from 'semantic-ui-react'

function StudentList() {

  // Keep track of and update the student list
  const [ newStudents, setnewStudents ] = useState(
    [{
      id: 1,
      firstname: 'Jillian',
      lastname: 'Hartmann',
      email: 'Imelda_Mann47@gmail.com', 
    },
  
    {id: 2,
    firstname: 'Mckayla',
    lastname: 'Steuber',
    email: 'Antonio_Hilpert58@yahoo.com',
    },

    {id: 3,
    firstname: 'Holden',
    lastname: 'Gusikowski',
    email: 'Melisa_King0@yahoo.com'
    }]
  );

  // Keep track of and update the student to edit
  const [ studentToEdit, setStudentToEdit ] = useState({});

  // Adds a new student to our list
  // Runs when the form is submitted
  const addNewStudent = (student) => {
    setnewStudents([...newStudents, student]);
  };

  // Edit a student in our list
  // Runs when the form is submitted
  const editStudent = (updatedStudent, idx) => {
    setnewStudents([...newStudents][idx] = updatedStudent );
  }

const StudentList = props => {
  return (
    <div className="StudentList">
    <h1>Students</h1>
      {/* Map over the list of students and return a div with student info for
            each student */}
      {newStudents.map( (student, idx) => {
        return (
          <div key={idx}>
            <p>ID: {student.id}</p>
            <p>First Name: {student.firstname}</p>
            <p>Last Name: {student.lastname}</p>
            <p>Email: {student.email}</p>
            <p><i 
              className="fas fa-edit fa-lg"
              value={idx}
              onClick={(e) => setStudentToEdit([...newStudents][idx])}></i>
              </p>
          </div>
        )
      })}
      <StudentForm 
        addNewStudent={addNewStudent} 
        studentToEdit={studentToEdit}
        editStudent={editStudent}
      />  
    </div>
  );
}

export default StudentList;
