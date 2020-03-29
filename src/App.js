import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Thanks for becoming a customer. Click below to Sign the MSA and SO
          </p>
          <a
            className="App-link"
            href="https://app.hellosign.com/s/EpvA0XWl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign MSA
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
