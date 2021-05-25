import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const WrapperMobile = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Burger = styled.div`
  cursor: pointer;
`;

const NavBtn = styled.p`
  font-size: 1.7em;
  margin: 1em;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: #0cecc8;
  }
`;

const Dropdown = styled.div`
  box-shadow: 1px 1px 8px #ececec;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  position: absolute;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
`;

export { Wrapper, WrapperMobile, Burger, NavBtn, Dropdown, Buttons };
