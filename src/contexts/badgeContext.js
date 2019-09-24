import React from 'react';

const BadgeStateContext = React.createContext();
const BadgeDispatchContext = React.createContext();

const initialState = {
  color: '#ffa700',
  name: 'minatozaki\nsana'
};

function getLocalState() {
  if (!localStorage) {
    throw new Error('badgeState must be use with localStorage');
  }

  try {
    const rawState = localStorage.getItem('badgeState');
    if (rawState !== null) {
      return JSON.parse(rawState);
    }
  } catch (e) {
    throw new Error('error parsing badgeState from localStorage');
  }

  return null;
}

function setLocalState(state) {
  if (!localStorage) {
    throw new Error('badgeState must be use with localStorage');
  }

  localStorage.setItem('badgeState', JSON.stringify(state));
}

function badgeReducer(state, action) {
  let newState = null;

  switch (action.type) {
    case 'resetBadge': {
      newState = initialState;
      break;
    }
    case 'updateColor': {
      newState = { ...state, color: action.payload.color };
      break;
    }
    case 'updateName': {
      newState = { ...state, name: action.payload.name };
      break;
    }
    case 'updatePhoto': {
      newState = { ...state, photo: action.payload.photo };
      break;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  setLocalState(newState);
  return newState;
}

function BadgeProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    badgeReducer,
    getLocalState() || initialState
  );
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
