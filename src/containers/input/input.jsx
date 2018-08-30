import React from 'react';
import './input.css';
import { setTypingValue, sendMessage } from '../../actions/index';
import store from '../../store/store';

const Input = () => {
  const state = store.getState();
  const { typing } = store.getState();

  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="chat__message" onSubmit={handleSubmit}>
      <input
        className="chat__message-input"
        onChange={handleChange}
        placeholder="Write a message..."
        value={typing}
      />
    </form>
  );
};

export default Input;
