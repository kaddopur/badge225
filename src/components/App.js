import React from 'react';
import Badge from './Badge';
import Form from './Form';
import { BadgeProvider } from '../contexts/badgeContext';
import './App.css';

function App() {
  return (
    <div id="App">
      <BadgeProvider>
        <Badge />
        <Form />
      </BadgeProvider>
    </div>
  );
}

export default App;
