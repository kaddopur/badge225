import React from 'react';

const BadgeStateContext = React.createContext();
const BadgeDispatchContext = React.createContext();

function badgeReducer(state, action) {
  switch (action.type) {
    case 'updateColor': {
      return { ...state, color: action.payload.color };
    }
    case 'updateName': {
      return { ...state, name: action.payload.name };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function BadgeProvider({ children }) {
  const initialState = {
    color: '#ffa700',
    name: 'minatozaki\nsana',
    photo: ''
  };
  const [state, dispatch] = React.useReducer(badgeReducer, initialState);
  return (
    <BadgeStateContext.Provider value={state}>
      <BadgeDispatchContext.Provider value={dispatch}>
        {children}
      </BadgeDispatchContext.Provider>
    </BadgeStateContext.Provider>
  );
}

function useBadgeState() {
  const context = React.useContext(BadgeStateContext);
  if (context === undefined) {
    throw new Error('useBadgeState must be used within a BadgeProvider');
  }
  return context;
}

function useBadgeDispatch() {
  const context = React.useContext(BadgeDispatchContext);
  if (context === undefined) {
    throw new Error('useBadgeDispatch must be used within a BadgeProvider');
  }
  return context;
}

export { BadgeProvider, useBadgeState, useBadgeDispatch };
