// Components
import React from 'react';

// Styles
import { Wrapper, Text } from './styles';

function Footer() {
  return (
    <Wrapper>
      <Text>
        Ⓒ Joonas Järvinen {new Date().getFullYear()}, all rights reserved.
      </Text>
    </Wrapper>
  );
}

export default Footer;
