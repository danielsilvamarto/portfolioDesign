import React, { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';
import { photos } from '../toDo/photos/photos';
import Carousel, { Modal, ModalGateway } from "react-images";
import './photosS.css';
import 'antd/dist/antd.css';


const PhotosMe = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    };


    return(
        <div >
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
            ): null}
        </ModalGateway>
        </div>
        

    );
}

export default PhotosMe;