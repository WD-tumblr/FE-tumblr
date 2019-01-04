import React from 'react';
import OptionItem from './OptionsItem';
import './Options.scss';

const Options = ({ options, postCardId }) => (
  <ul>
    {options.map(({ buttonText, handler }, i) => (
      <OptionItem
        key={i}
        buttonText={buttonText}
        onClick={() => handler(postCardId)}
      />
    ))}
  </ul>
);

export default Options;
