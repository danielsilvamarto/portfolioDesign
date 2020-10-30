import React, { useState, useCallback } from 'react';
import { Image, Typography } from 'antd';
import Gallery from 'react-photo-gallery';
import { photos } from '../toDo/photos/photos';
import Carousel, { Modal, ModalGateway } from "react-images";
import Photoshop from './Adobe_Photoshop_CC_icon.svg';
import Lightroom from './lightroom-cc.svg';
import './photosS.css';
import 'antd/dist/antd.css';
import {text} from '../Texts/textos';


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

    const {Title} = Typography; 


    return(
        <div className="galeria3">
        
        <div style={{width:'99vw', padding:'15px', justifyContent:'center', alignSelf:'center', textAlign:'center'}}><Title  level={3}>PHOTOGRAPHY</Title></div>
        <div className="textoOrdem"><Title  level={4}>{text[1].body}</Title></div>
        <div className="texto" >
          <div style={{padding:'15px', justifyContent:'center'}}><Image preview={false} className="imgSize" src={Photoshop} /></div>
          <div style={{padding:'15px', justifyContent:'center'}}><Image preview={false} className="imgSize" src={Lightroom}/></div>
        </div>
        <div style={{paddingTop:'10vh'}}>
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
        </div>
        

    );
}

export default PhotosMe;