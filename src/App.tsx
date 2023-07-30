import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Greet } from './component/greet/Greet';
import { Application } from './component/application/Application';
import { Skills } from './component/skills/Skills';

function App() {
  const skills = ['html', 'css', 'javascript']
  return (
    <div className="App">
      <Greet />
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
