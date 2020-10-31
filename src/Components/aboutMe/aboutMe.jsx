import React from 'react';
import {Image, Typography } from 'antd';
import {text} from '../Texts/textos';
import Me from './me.jpeg';
import Insta from './instagram-tile.svg';
import Linked from './linkedin-tile.svg';
import 'antd/dist/antd.css';
import './aboutMeStyle.css';

const AboutMe = () => {

    const {Title} = Typography; 

    return(
        <div className="foraGrid">
            
            <div className="conteudo">
                <div ><Image className="eu" src={Me} /></div>
               <a id="about" style={{cursor:'auto'}}><div className='infoLayout' style={{textAlign: 'justify', paddingLeft: '2vw', paddingRight: '3vw', paddingTop: '1vh', paddingBottom: '2vh'}}>
                    <Title level={3}>About Me</Title> <Title level={4} >
                        {text[0].['body']}
                    </Title>
                    <div><a href="https://www.instagram.com/danielsilvamarto/" target="_blank"> <Image className="imgMax"  preview={false} src={Insta}/></a><a href="https://www.linkedin.com/in/danielsilvamarto/" target="_blank"><Image className="imgMax"  preview={false} src={Linked}/></a></div></div></a>
            </div>
        </div>
    )
}

export default AboutMe;