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

const Form = () => {
  return (
    <form>
      <ColorSelect />
    </form>
  );
};

export default Form;
