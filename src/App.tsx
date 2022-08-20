import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar/navbar';
import Container from '@mui/material/Container';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GiftcardPage from './components/pages/GiftCards';

const theme = {
  spacing: 8,
}

function App() {
  return (
    <div className="App">
      <StyledEngineProvider>
        <Container>

        <Router>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<GiftcardPage/>} />
          </Routes>
        </Router>
          
        </Container>
      </StyledEngineProvider>
      
      
    </div>
  );
}

export default App;
