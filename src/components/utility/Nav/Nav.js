// Components
import React, { useState } from 'react';

// Utility
import { useWindowSize } from '../../../hooks/windowSize';
import { scrollToBottom, scrollToMiddle } from '../../../logic/helpers';

// Images
import icon from '../../../images/appfixly_icon.png';

// Styles
import {
  Wrapper,
  WrapperMobile,
  Burger,
  NavBtn,
  Dropdown,
  Buttons
} from './styles';

import { HiMenuAlt3 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

function Nav() {
  const width = useWindowSize();
  const [show, setShow] = useState(false);

  const funcAndClose = func => {
    func();
    setShow(false);
  };

  return (
    <Wrapper>
      {width < 1000 ? (
        <WrapperMobile>
          <img
            alt="icon"
            src={icon}
            style={{
              width: 'auto',
              height: '4em'
            }}
          />

          {show ? (
            <Dropdown>
              <div>
                <NavBtn onClick={() => funcAndClose(scrollToMiddle)}>
                  PROJECTS
                </NavBtn>
                <NavBtn onClick={() => funcAndClose(scrollToBottom)}>
                  CONTACT
                </NavBtn>
              </div>
              <Burger onClick={() => setShow(false)}>
                <RiCloseLine size={40} color="#323232" />
              </Burger>
            </Dropdown>
          ) : (
            <Burger onClick={() => setShow(true)}>
              <HiMenuAlt3 size={40} color="#323232" />
            </Burger>
          )}
        </WrapperMobile>
      ) : (
        <>
          <div>
            <img
              alt="icon"
              src={icon}
              style={{
                width: 'auto',
                height: '5em'
              }}
            />
          </div>
          <Buttons>
            <NavBtn onClick={scrollToMiddle}>PROJECTS</NavBtn>
            <NavBtn onClick={scrollToBottom}>CONTACT</NavBtn>
          </Buttons>
        </>
      )}
    </Wrapper>
  );
}

export default Nav;
