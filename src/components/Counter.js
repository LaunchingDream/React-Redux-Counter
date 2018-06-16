import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

const defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

const Counter = ({
  number, color, onIncrement, onDecrement, onSetColor,
}) => (
  <div
    className="Counter"
    onClick={onIncrement}
    onContextMenu={
      (e) => {
        e.preventDefault();
        onDecrement();
      }
    }
    onDoubleClick={onSetColor}
    style={{ backgroundColor: color }}
    role="button"
  >
    {number}
  </div>
);

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;

