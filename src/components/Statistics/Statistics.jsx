import React from 'react';
import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsText } from './Statistics.styled';

export default function Statistics({ options, total, positivePercentage }) {
  return (
    <StatsList>
      {options.map(([key, value]) => (
        <StatsItem key={key}>
          <StatsText>{key}:</StatsText>
          <span>{value}</span>
        </StatsItem>
      ))}
      <StatsItem>
        <StatsText>Total: </StatsText>
        <span>{total}</span>
      </StatsItem>
      <StatsItem>
        <StatsText>Positive feedback:</StatsText>
        <span>{total === 0 ? 0 : positivePercentage}%</span>
      </StatsItem>
    </StatsList>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
