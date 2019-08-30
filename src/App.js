import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";


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
