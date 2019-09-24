import React from 'react';
import Badge from './Badge';
import { BadgeProvider } from './badgeContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <BadgeProvider>
        <Badge />
      </BadgeProvider>
    </div>
  );
}

export default App;
