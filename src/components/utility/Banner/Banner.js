// Components
import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { hideBanner } from '../../../redux/actions/banner';

// Styles
import { Wrapper, Text } from './styles';

function Banner() {
  const { show, text, color } = useSelector(state => state.bannerReducer);
  return show ? <Hm text={text} color={color} /> : null;
}

function Hm({ text, color }) {
  const dispatch = useDispatch();
  const [animatedProps, set, stop] = useSpring(() => ({
    top: -70,
    onRest: animData => animData.top === -71 && dispatch(hideBanner())
  }));
  set({ top: 0 });
  const hideImmidieately = () => set({ top: -71 });

  useEffect(() => {
    const timer = setTimeout(() => {
      set({ top: -71 });
    }, 5000);
    return () => {
      stop();
      clearTimeout(timer);
    };
  });

  return (
    <Wrapper
      onClick={() => hideImmidieately()}
      style={{
        ...animatedProps,
        backgroundColor: color
      }}
    >
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default Banner;
