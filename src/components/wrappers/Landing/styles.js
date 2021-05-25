import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  padding-left: 2em;
  flex-direction: column;
  height: 43em;
`;

const Header = styled.div`
  display: flex;

  > h1 {
    font-size: 6em;
  }
`;

const SubHeader = styled.p`
  font-family: KanitMedium;
  font-size: 3em;
  margin-bottom: 3.3em;
`;

const ContactButton = styled.div`
  cursor: pointer;
  font-family: OswaldBold;
  font-size: 1.7em;
  border: 3px solid #000;
  width: fit-content;
  color: #000;
  background-color: #fff;
  transition: 0.3s;

  :hover {
    color: #fff;
    background-color: #000;
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
  position: absolute;
  width: 40em;
  margin: 0px;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Img = styled.img`
  position: absolute;
  width: auto;
  height: 100%;
`;

const imgOpacity = {
  zIndex: -1,
  opacity: 0.1,
  right: '-17em'
};

export {
  Wrapper,
  Content,
  ImgContainer,
  Img,
  Header,
  SubHeader,
  ContactButton,
  imgOpacity
};
