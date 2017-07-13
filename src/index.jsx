import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat.jsx';

// React Initialization
const root = document.getElementById('example');
console.log(root);
if (root) {
  ReactDOM.render(<Chat/>, root);
}
