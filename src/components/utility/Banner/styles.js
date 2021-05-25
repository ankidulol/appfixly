import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled(animated.div)`
  position: fixed;
  width: 100%;
  box-shadow: 0px 1px 10px #bcbcbc;
  z-index: 3;
`;

const Text = styled.p`
  font-family: KanitMedium;
  font-size: 1.1em;
  text-align: center;
  color: #fff;
  margin: 1em;
`;

export { Wrapper, Text };
