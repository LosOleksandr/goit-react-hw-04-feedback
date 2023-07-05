import { React, useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Container, Message } from 'App.styled';

export default function App() {
  const [options, setOption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onBtnClick = evt => {
    const name = evt.target.name;
    setOption({
      ...options,
      [name]: (options[name] += 1),
    });
  };

  const total = Object.values(options).reduce(
    (acc, value) => (acc += value),
    0
  );

  const positivePercentage = ((options.good / total) * 100).toFixed();

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys(options)} onClick={onBtnClick} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            options={Object.entries(options)}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Message>No feedback given!</Message>
        )}
      </Section>
    </Container>
  );
}
