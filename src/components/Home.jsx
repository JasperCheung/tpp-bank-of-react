// src/components/Home.jsx

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Home extends Component {
  render() {
    return (
      <div>
        <img src="https://uiowa.edu/university-shared-services/sites/uiowa.edu.university-shared-services/files/styles/large/public/Bank.png?itok=KBY-4Kak" alt="bank"/>
        <h1>Bank of React</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>

      </div>
    );
  }
}

export default Home;
