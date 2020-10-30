import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Image, Typography } from 'antd';
import { text } from '../Texts/textos';
import Premiere from './afterEffects.png';
import AfterEffects from './premiere.png';
import './videoStyle.css';
import '../Photography/photosS.css';


const video = () => {

    const {Title} = Typography;

    return(
        <div className="galeria3">
        
            <div style={{width:'99vw', padding:'15px', justifyContent:'center', alignSelf:'center', textAlign:'center'}}><Title  level={3}>VIDEOGRAPHY</Title></div>
            <div className="textoOrdem"><Title  level={4}>{text[2].body}</Title></div>
            <div className="texto" >
          <div style={{padding:'15px', justifyContent:'center'}}><Image preview={false} className="imgSize" src={Premiere} /></div>
          <div style={{padding:'15px', justifyContent:'center'}}><Image preview={false} className="imgSize" src={AfterEffects}/></div>
    
        </div>
        <div className="videoLayOut">
            <div className="espacoEntre"><VideoPlayer props="https://www.youtube.com/watch?v=aiPMGmfJwwo&ab_channel=AugustoBaschera"/></div>

            <div className="espacoEntre"><VideoPlayer props="https://www.youtube.com/watch?v=ToZtfc_FPUo&t=9s&ab_channel=P%C3%BAblicoP3"/></div>

            <div className="espacoEntre"><VideoPlayer props="https://youtu.be/qUa5ryk2OlA"/></div>
        </div>
        <div className="videoLayOut">
            
            <div className="espacoEntre"><VideoPlayer props="https://www.youtube.com/watch?v=DDKQiDbGRQQ&feature=youtu.be&ab_channel=DanielMarto"/></div>
            
            <div className="espacoEntre"><VideoPlayer props="https://www.youtube.com/watch?v=SWfjsnRZJBg&feature=emb_logo&ab_channel=P%C3%BAblicoP3"/></div>
            
            <div className="espacoEntre"><VideoPlayer props="https://vimeo.com/131367595"/></div>

        </div>
        </div>
        
          
      
      
    )
}

export default video;