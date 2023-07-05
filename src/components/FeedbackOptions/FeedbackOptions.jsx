import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackOption,
  FeedbackItem,
} from './FeedbackOptions.styled.';

export default function FeedbackOptions({ options, onClick }) {
  return (
    <FeedbackList>
      {options.map(name => (
        <FeedbackItem key={name}>
          <FeedbackOption name={name} onClick={onClick} type="button">
            {name}
          </FeedbackOption>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
