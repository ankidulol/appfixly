import styled from 'styled-components';

const Caret = styled.div`
  cursor: pointer;
  ${props =>
    props.width < 1200 &&
    `position: absolute;
     right: ${props.right && 0};
     height: 100%;`}

  z-index: 2;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: auto;
`;

const badge = {
  height: 'auto',
  width: '8em',
  marginTop: '0.5em'
};

export { Caret, Container, Img, badge };
