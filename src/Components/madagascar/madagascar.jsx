import React from 'react';
import './madagascarStyle.css';
import { Image, Typography } from 'antd';
import {text} from '../Texts/textos';
import Gtana from './GroupTana.jpg';
import MeSyd from './Me_Syd.jpg';
import Women from './womenKianjavato.jpg';
import GMananjary from './groupMananjary.jpg';

const {Title} = Typography;


const Madagascar = () => {
    return(
        <div className="madaMain">
            <div className="infoDisplay">
                <div className="textDisplay">
                   <Title level={3} className="texto2" style={{textAlign: "center"}}> Volunteer Work</Title> 
                   <Title level={4} style={{textAlign: "justify"}}>{text[5].body}<a href="https://madagascarpartnership.org/" target="_blank"> Madagascar Biodiversity Partnership </a>{text[6].body}  </Title>
                </div>
               
                
            </div>
             <div className="infoDisplay2">
            <div><Image className="eu2" src={Gtana} />
             <Image className="eu2" src={MeSyd} /></div>
            <div><Image className="eu2" src={Women} />
             <Image className="eu2" src={GMananjary} /></div>
             
             
            </div>
        </div>
    );
}

export default Madagascar;