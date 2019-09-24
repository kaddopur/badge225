import React from 'react';
import './Form.css';
import { useBadgeState, useBadgeDispatch } from './badgeContext';

const ColorSelect = () => {
  const colors = [
    { value: '#ffa700', name: 'Turmeric' },
    { value: '#1ac567', name: 'Mulah' },
    { value: '#0f69ff', name: 'Dory' },
    { value: '#ff0080', name: 'Malibu' },
    { value: '#11d3cd', name: 'Sea Foam' }
  ];

  const { color } = useBadgeState();
  const dispatch = useBadgeDispatch();

  return (
    <select
      value={color}
      onChange={e =>
        dispatch({ type: 'updateColor', payload: { color: e.target.value } })
      }
    >
      {colors.map(color => (
        <option key={color.value} value={color.value}>
          {color.name}
        </option>
      ))}
    </select>
  );
};

const NameTextArea = () => {
  const { name } = useBadgeState();
  const dispatch = useBadgeDispatch();

  return (
    <textarea
      value={name}
      onChange={e =>
        dispatch({
          type: 'updateName',
          payload: { name: e.target.value.trim() }
        })
      }
    ></textarea>
  );
};

const Form = () => {
  return (
    <form id="Form">
      <ColorSelect />
      <NameTextArea />
    </form>
  );
};

export default Form;
