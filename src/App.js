import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <Container
      className="App"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <AppRouter />
    </Container>
  );
}

export default App;
