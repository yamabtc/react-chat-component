import React from 'react';
import ReactDOM from 'react-dom';
import {register} from './applozic';
import Applozic from './applozic';

window.React = React;
window.ReactDOM = ReactDOM;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.applozic = new Applozic(props.appID);

    register({
      userId: 'Kevin',
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
    );
  }
}

export default Chat;
