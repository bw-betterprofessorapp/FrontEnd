import { useState } from 'react';


export default function StudentList() {

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
}