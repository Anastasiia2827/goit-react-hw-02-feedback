import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';

import { FeedbackButton } from './FeedbackButton';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <GlobalStyle />,
      <FeedbackButton
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
        ></FeedbackButton>
    );
  }
};
