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
    <div>
      <label>Color</label>
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
    </div>
  );
};

const NameTextArea = () => {
  const { name } = useBadgeState();
  const dispatch = useBadgeDispatch();

  return (
    <div>
      <label>Name</label>
      <textarea
        value={name}
        onChange={e =>
          dispatch({
            type: 'updateName',
            payload: { name: e.target.value.toLowerCase() }
          })
        }
      ></textarea>
    </div>
  );
};

const PhotoFileInput = () => {
  const inputEl = React.useRef(null);
  const dispatch = useBadgeDispatch();

  return (
    <div>
      <label>File: square image (minimum 300 x 300px)</label>
      <input
        type="file"
        ref={inputEl}
        onChange={() => {
          if (!inputEl.current.files || !inputEl.current.files[0]) {
            return;
          }

          const FR = new FileReader();

          FR.addEventListener('load', loadEvent => {
            dispatch({
              type: 'updatePhoto',
              payload: { photo: loadEvent.target.result }
            });
          });

          FR.readAsDataURL(inputEl.current.files[0]);
        }}
      />
    </div>
  );
};

const Form = () => {
  return (
    <form id="form">
      <h1>Yahoo Badge 22.5° Generator</h1>
      <p>Enter your name, select your color/photo, and just PRINT.</p>
      <cite>
        * Please note that this generator is NOT official and should NOT be used
        in any public situation.
      </cite>
      <div className="container">
        <ColorSelect />
        <NameTextArea />
        <PhotoFileInput />
      </div>
      <button className="print-button" onClick={() => window.print()}>
        Print
      </button>
    </form>
  );
};

export default Form;
