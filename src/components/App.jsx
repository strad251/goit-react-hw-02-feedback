import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    onFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = total => {
    if (!total) return;
    const { good } = this.state;
    return Math.floor((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total);
    return (
      <Section title="Please leave feedback">
      <FeedbackOptions 
      props={this.state}
          onLeaveFeedback={this.onFeedback} />
        {total ? (
           <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
        />) :(
      <Notification message="There is no feedback"></Notification>)}
      </Section>
    )
  }
}
