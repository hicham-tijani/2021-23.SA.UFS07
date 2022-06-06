import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ placeholder, onData, type }) => {
  function onData(InputEevent){

    console.log=("Input.onInput",InputEevent);
    if(typeof onData== ' function'){
      onData(InputEevent.target.value)
    }

  }
  return (
    <input
      onInput={onInput}
      placeholder={placeholder}
    >
      {label}
    </input>
  );
};

Input.propTypes = {
placeholder: Prototypes.string.isRequired,
onData: PropTypes.func,
isValid: propTypes.bool,
type: PropTypes.string,

};

Input.defaultProps = {
type: 'text',
onData: undefined,
isValid: undefined,
};



