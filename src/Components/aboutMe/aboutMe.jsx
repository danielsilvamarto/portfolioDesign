import React from 'react';
import {Image, Typography } from 'antd';
import Me from './me.jpg';
import 'antd/dist/antd.css';
import './aboutMeStyle.css';

const AboutMe = () => {

    const {Title} = Typography; 

    return(
        <div className="sobreMim">
            <div className="conteudo">
                <div className="euImagem"><Image className="eu" src={Me} /></div>
                <div style={{textAlign: 'justify', paddingLeft: '2vw', paddingRight: '3vw', paddingTop: '2vh', paddingBottom: '2vh'}}><Title level={3}>About Me</Title><Title level={4} >I like to think of myself as someone who is eager to learn new subjects and to develop my skills, like
this website. This website is my first project in ReactJs, CSS and JavaScript. I spent my quarentine
doing courses of React and JavaScript. However, I believe that teamwork is the answer for any problem
we may encounter in any professional career.</Title></div>
            </div>
        </div>
    )
}

export default AboutMe;