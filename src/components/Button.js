import React from 'react';

const Button = ({ id, className, onClick, children }) => {
  return (
    <button id={id} className={className} onClick={() => onClick(children)}>
      {children}
    </button>
  );
};

export default Button;
