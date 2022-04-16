import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const userFeedbacks = Object.values(this.state);
    return userFeedbacks.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.floor((positive / totalFeedbacks) * 100);
  };

  onLeaveFeedback = event => {
    const { target } = event;
    const btnType = target.getAttribute('name');

    for (let key in this.state) {
      if (btnType === key) {
        this.setState(prevState => {
          return {
            [key]: prevState[key] + 1,
          };
        });
      }
    }
  };

  render() {
    const options = Object.keys(this.state);
    const feedbackValues = Object.values(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {feedbackValues.some(value => value > 0) ? (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              totalFeedback={this.countTotalFeedback()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
