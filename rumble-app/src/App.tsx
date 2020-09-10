import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';


const StyledDiv = styled.div`
  width: 30px;
  height: 30px;
  background: red;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledDiv>
          abcd
        </StyledDiv>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactaa
        </a>
      </header>
    </div>
  );
}

export default App;
