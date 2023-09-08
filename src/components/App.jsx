import { GlobalStyles } from './GlobalStyles';
import { Section } from './section/section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Wrap } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const defaultProps = {
    step: 1,
    initvalue: 0,
  };
  const [good, setGood] = useState(defaultProps.initvalue);
  const [neutral, setNeutral] = useState(defaultProps.initvalue);
  const [bad, setBad] = useState(defaultProps.initvalue);
  const incrementGood = () => {
    setGood(good + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };
  const totalStats = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    if (good === 0) {
      return 0;
    } else {
      return ((good / totalStats())*100).toFixed(1);
    }
  };
    return (
      <Wrap>
        <Section title="Please leave feedback">
          <FeedbackOptions feedback={{incrementGood, incrementNeutral, incrementBad}} />
        </Section>
        <Section title="Statistics">
          <Statistics
            data={[good, neutral, bad]}
            total={totalStats()}
            percentage={positivePercentage()}
          />
        </Section>
        <GlobalStyles />
      </Wrap>
    );
}
