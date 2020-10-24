import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './photosS.css';

function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '16px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const photosMe = () => {
    return(
        <div >
        <Carousel afterChange={onChange}>
            <div style={contentStyle}></div>
        </Carousel>
        </div>
        

    );
}

export default photosMe;