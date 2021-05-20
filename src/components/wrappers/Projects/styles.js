import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  z-index: -2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1em;
`;

const Button = styled.div`
  padding: 1em;
  cursor: pointer;
`;

export { Wrapper, Container, Button };
