// Components
import React, { useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Utility
import { useWindowSize } from '../../../hooks/windowSize';

// Styles
import { Caret, Container, Img, badge } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function ImageCarousel({ imageData }) {
  const width = useWindowSize();
  const carouselPosition = useRef(0);

  const handleCarouselChange = index => {
    carouselPosition.current = index;
  };

  useEffect(() => {
    handleCarouselChange(0);
  });

  return (
    <Carousel
      onChange={handleCarouselChange}
      selectedItem={carouselPosition.current}
      showArrows
      swipeable={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <Caret width={width} onClick={clickHandler}>
            <HiChevronLeft size={40} color="#bdbdbd" />
          </Caret>
        )
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <Caret right width={width} onClick={clickHandler}>
            <HiChevronRight size={40} color="#bdbdbd" />
          </Caret>
        )
      }
    >
      {imageData.map(({ src, text, url }, index) => {
        return (
          <Container key={index}>
            <Img
              style={{
                width: width < 1300 ? '100%' : '70%'
              }}
              src={src}
            />
            <a target="_blank" rel="noreferrer" href={url && url}>
              {text.startsWith('/') ? (
                <img alt="badge" style={badge} src={text} />
              ) : (
                <p>{text}</p>
              )}
            </a>
          </Container>
        );
      })}
    </Carousel>
  );
}

export default ImageCarousel;
