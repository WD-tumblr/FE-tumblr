import React from 'react';
import OptionItem from './OptionsItem';
import './Options.scss';

const Options = ({ options, optionId }) => (
  <ul>
    {options.map(({ buttonText, handler }, i) => (
      <OptionItem
        key={i}
        buttonText={buttonText}
        onClick={() => handler(optionId)}
      />
    ))}
  </ul>
);

export default Options;
