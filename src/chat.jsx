import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {register} from './applozic';

window.React = React;
window.ReactDOM = ReactDOM;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    register({
      userId: 'test',
      displayName: 'test',
      imageLink: 'test',
      email: 'test'
    }, (data) => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Chat;
