import React from 'react';


const Form = ({ onSubmit, children, className }) => (
  <form
    className={className}
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit(e);
    }}
  >
    {children}
  </form>
);

export default Form;
