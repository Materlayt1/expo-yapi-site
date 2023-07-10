import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Img1 from '../assets/kusadasi/kusadası.jpg';
import Img2 from '../assets/kusadasi/kusadasi2.jpg';
import Img3 from '../assets/kusadasi/kusadasi3.jpg';
import Img4 from '../assets/kusadasi/kusadasi4.jpg';
import Img5 from '../assets/kusadasi/kusadasi5.jpg';
import Img6 from '../assets/kusadasi/kusadası6.jpg';
import Img7 from '../assets/kusadasi/kusadası7.jpg';
import Img8 from '../assets/kusadasi/kusadası8.jpg';



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
    }
    
  ];

  return (
    <div className="cesme">
      <h1 className="text-center my-5 cesme-header">KUŞADASI VİLLALARI</h1>
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
      <div className="sub-footerr">
        <p className="footer-bottom">&copy; 2023 Expo Yapi. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default Cesme;
