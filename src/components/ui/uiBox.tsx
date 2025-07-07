import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const uiBox = ({ children, className }: BoxProps) => {
  return (
    <div className={`box-type ${className || ''}`}>
      {children}
    </div>
  );
};

export default uiBox;