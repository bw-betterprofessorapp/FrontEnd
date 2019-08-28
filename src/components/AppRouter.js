import React from "react";
import { Route } from "react-router-dom";
import StudentList from "./StudentList.js";


 export default function AppRouter(props) {
  return (
    <div>

       <Route 
        path="/students" 
        render={props => <StudentList {...props} />}
      />

    </div>
  );
};