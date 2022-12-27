import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good }</p>
      <p>Neutral: {neutral }</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: { positive}% </p>
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number
}