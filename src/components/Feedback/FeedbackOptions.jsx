import PropTypes from "prop-types";

import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ props, onLeaveFeedback }) => {
  const feedbackBtn = Object.keys(props);
  return (
    <ul>{feedbackBtn.map(props => (
      <li key={props}>
        <button className={css.btn} type="button" onClick={() => onLeaveFeedback(props)}>{props}</button>
      </li>
    ))}</ul>
  )
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  props: PropTypes.objectOf(PropTypes.number)
}