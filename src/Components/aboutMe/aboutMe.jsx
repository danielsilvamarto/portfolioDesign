import React from 'react';
import {Image, Typography } from 'antd';
import {text} from '../Texts/textos';
import Me from './me.jpeg';
import 'antd/dist/antd.css';
import './aboutMeStyle.css';

const AboutMe = () => {

    const {Title} = Typography; 

    return(
        <div className="foraGrid">
            
            <div className="conteudo">
                <div className="euImagem"><Image className="eu" src={Me} /></div>
                <div style={{textAlign: 'justify', paddingLeft: '2vw', paddingRight: '3vw', paddingTop: '2vh', paddingBottom: '2vh'}}>
                    <Title level={3}>About Me</Title><Title level={4} >
                        {text[0].['body']}
                    </Title></div>
            </div>
        </div>
    )
}

export default AboutMe;