// Components
import React from 'react';
import Nav from '../../utility/Nav/Nav';

// Utility
import { useWindowSize } from '../../../hooks/windowSize';
import { scrollToBottom } from '../../../logic/helpers';

// Images
import joonas from '../../../images/joonas.png';
import halfCircle from '../../../images/halfCircle.png';

// Styles
import {
  Wrapper,
  Content,
  ImgContainer,
  Img,
  Header,
  SubHeader,
  ContactButton,
  imgOpacity
} from './styles';

function Landing() {
  const width = useWindowSize();

  return (
    <Wrapper>
      <Nav />
      <Content
        style={{
          alignItems: width < 1000 && 'center',
          paddingLeft: width < 1000 && 0,
          justifyContent: width < 1000 && 'center'
        }}
      >
        <Header
          style={{
            flexDirection: width < 1000 && 'column',
            alignItems: width < 1000 && 'center'
          }}
        >
          <h1
            style={{
              lineHeight: width < 1000 && 0,
              fontSize: width < 600 && '4em'
            }}
          >
            DEVELOPER
          </h1>
          <h1 style={{ color: '#0cecc8', fontSize: width < 600 && '4em' }}>
            DESIGNER
          </h1>
        </Header>

        <SubHeader
          style={{
            fontSize: width < 1000 && '2em',
            textAlign: width < 1000 && 'center'
          }}
        >
          We create web & mobile apps
          <br /> from design to finished product
        </SubHeader>
        <ContactButton
          onClick={scrollToBottom}
          style={{
            padding: width < 1000 ? '0.5em 1.5em' : '0.5em 2.5em'
          }}
        >
          Contact
        </ContactButton>
      </Content>
      <ImgContainer
        style={{
          height: width > 1535 ? '50em' : width < 500 ? '40em' : '46em'
        }}
      >
        <Img
          alt="landing_image"
          src={joonas}
          style={{
            ...(width < 1220 && imgOpacity)
          }}
        />
      </ImgContainer>

      <img
        alt="circle"
        src={halfCircle}
        style={{
          width: width < 1000 && '10em',
          height: 'auto',
          position: 'absolute',
          zIndex: -1,
          marginTop: '-15em'
        }}
      />
    </Wrapper>
  );
}

export default Landing;
