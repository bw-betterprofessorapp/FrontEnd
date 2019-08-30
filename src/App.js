import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";




function App() {
  return (
    <Container className="App" style={{
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
      <Container className='page-header' style={{
        display: 'flex'
      }}>
                <Header style={{
                  fontSize: '3rem',
                  color: '#c42847',
                  margin: '10px 500px 0 650px'
                }}>Better Professor</Header>
                <NavLink to='/login' style={{textDecoration: 'none', color: '#c42847', fontSize: '1.3rem', margin: '5px'}}>Log In</NavLink>
                <NavLink to='/signup' style={{textDecoration: 'none', color: '#c42847', fontSize: '1.3rem', margin: '5px'}}>Sign Up</NavLink>
            </Container>
            <main>
      <Header />
      <TabNav />
    </main>
      <AppRouter />
    </Container>
  );
}

export default App;