import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper'
import './App.css';
import Counter from './Couter';

function App() {
  return (
    <Counter/>
  )
}

function App1() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
      <Wrapper>
        <Hello name={name} color="orange" isSpecial/>
        <div style={style}>{name}</div>
      </Wrapper>
  );
}

export default App;