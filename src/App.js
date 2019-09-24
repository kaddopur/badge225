import React from 'react';
import Badge from './Badge';
import Form from './Form';
import { BadgeProvider } from './badgeContext';

import './App.css';

// https://www.pentagram.com/work/yahoo/story?fbclid=IwAR0DK3rJZIqnIsNGagz1YO0YFyHK3Xb0hjNRg-0Qufwg9XdAdz0WoAg8egc

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
