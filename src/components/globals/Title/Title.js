// Components
import React from 'react';

// Utility
import { useWindowSize } from '../../../hooks/windowSize';

// Styles
import { Wrapper } from './styles';

function Title({ children }) {
  const width = useWindowSize();
  return (
    <Wrapper style={{ fontSize: width < 1000 && '3em' }}>{children}</Wrapper>
  );
}

export default Title;
