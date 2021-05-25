// Components
import React, { useState } from 'react';
import Title from '../../globals/Title/Title';
import ImageCarousel from '../../utility/ImageCarousel/ImageCarousel';

// Images
import mitch from '../../../images/MitchJonesNewDesign.png';
import mitch2 from '../../../images/MitchJones-Website.png';
import landingTemplate from '../../../images/LandingTemplate.png';

import taskler from '../../../images/TasklerPreview.png';
import chessTap from '../../../images/ChessTapPreview.png';

import amazonBadge from '../../../images/amazon-badge.png';

// Styles
import { Wrapper, Container, Button } from './styles';

function Projects() {
  const [webProject, setWebProject] = useState(true);

  const webProjectImageData = [
    { src: mitch, text: '' },
    { src: landingTemplate, text: '' },
    { src: mitch2, text: '' }
  ];

  const mobileProjectImageData = [
    {
      src: taskler,
      text: amazonBadge,
      url: 'https://www.amazon.com/gp/product/B093Z2BY25'
    },
    {
      src: chessTap,
      text: amazonBadge,
      url: 'https://www.amazon.com/gp/product/B08S7CC5R1'
    }
  ];

  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      <Container>
        <Button onClick={() => setWebProject(true)}>
          <h2 style={{ color: webProject && '#0cecc8' }}>WEB</h2>
        </Button>
        <Button onClick={() => setWebProject(false)}>
          <h2 style={{ color: !webProject && '#0cecc8' }}>MOBILE</h2>
        </Button>
      </Container>
      {webProject ? (
        <ImageCarousel imageData={webProjectImageData} />
      ) : (
        <ImageCarousel imageData={mobileProjectImageData} />
      )}
    </Wrapper>
  );
}

export default Projects;
