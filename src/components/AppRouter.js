import React from "react";
import { Route } from "react-router-dom";
import StudentList from "./StudentList.js";
<<<<<<< HEAD
import Messanger from "./Messanger.js";
=======
>>>>>>> 5caee7e0de1a4156bfdaed21b9851f0dde0ca2d1


 export default function AppRouter(props) {
  return (
    <div>

       <Route 
        path="/students" 
        render={props => <StudentList {...props} />}
      />

<<<<<<< HEAD
       <Route 
        path="/messages" 
        render={props => <Messanger {...props} />}
      />

=======
>>>>>>> 5caee7e0de1a4156bfdaed21b9851f0dde0ca2d1
    </div>
  );
};