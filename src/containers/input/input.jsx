import React from 'react';
import './input.css';
import { setTypingValue } from '../../actions/index';
import store from '../../store/store';

const Input = ({ value }) => {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="chat__message">
      <input
        className="chat__message-input"
        // value={value}
        onChange={handleChange}
        placeholder="Write a message..."
      />
    </form>
  );
};

export default Input;
