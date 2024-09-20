import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

export const Box = () => {
  const theme = useContext(ThemeContext); // Get theme from context

  return (
    <div style={{backgroundColor: theme.primary.main }}>
      Theme Context
    </div>
  );
};
