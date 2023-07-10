import React from 'react';
import Img from "../assets/basında.jpg";
import Logo from "../assets/logo.jpg"
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Basın = () => {
    const images = [
        {
            original: Img,
            thumbnail: Img,
          
        },{
            original: Img,
            thumbnail: Img
          },
    ];

    return (
        <div className="cesme">
            <h1 className="text-center my-5 cesme-header">BASINDA BİZ</h1>
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
            <div className="sub-footerr">
                <p className="footer-bottom">&copy; 2023 Expo Yapi. Tüm hakları saklıdır.</p>
            </div>
        </div>
    );
};

export default Basın;
