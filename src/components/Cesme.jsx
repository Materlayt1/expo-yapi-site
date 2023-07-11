import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Img1 from '../assets/çeşme/cesme1.jpg';
import Img2 from '../assets/çeşme/cesme2.jpg';
import Img3 from '../assets/çeşme/cesme3.jpg';
import Img4 from '../assets/çeşme/cesme4.jpg';
import Img5 from '../assets/çeşme/cesme5.jpg';
import Img6 from '../assets/çeşme/cesme6.jpg';
import Img7 from '../assets/çeşme/cesme7.jpg';
import Img8 from '../assets/çeşme/cesme8.jpg';
import Img9 from '../assets/çeşme/cesmedıs1.jpg';
import Img10 from '../assets/çeşme/cesmedıs2.jpg';
import Img11 from '../assets/çeşme/cesmedıs3.jpg';
import Img12 from '../assets/çeşme/cesmedıs4.jpg';
import { Fade, Slide } from 'react-reveal';

const Cesme = () => {
  const images = [
    {
      original: Img1,
      thumbnail: Img1
    },
    {
      original: Img2,
      thumbnail: Img2
    },
    {
      original: Img3,
      thumbnail: Img3
    },
    {
      original: Img4,
      thumbnail: Img4
    },
    {
      original: Img5,
      thumbnail: Img5
    },
    {
      original: Img6,
      thumbnail: Img6
    },
    {
      original: Img7,
      thumbnail: Img7
    },
    {
      original: Img8,
      thumbnail: Img8
    },
    {
      original: Img9,
      thumbnail: Img9
    },
    {
      original: Img10,
      thumbnail: Img10
    },
    {
      original: Img11,
      thumbnail: Img11
    },
    {
      original: Img12,
      thumbnail: Img12
    }
  ];

  return (
    <div className="cesme">
      <Slide left> <Fade>
      <h1 className="text-center my-5 cesme-header">ÇEŞME VİLLALARI</h1>
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
      </Fade></Slide>
    </div>
  );
};

export default Cesme;
