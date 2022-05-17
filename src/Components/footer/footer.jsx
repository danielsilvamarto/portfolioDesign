import React from 'react';
import { Image, Typography } from 'antd';
import './footerStyle.css';

const {Title} = Typography;



const Footer = () => {

    return(
        <div className="footer"><Title level={5} style={{color:"#b8b6b6"}}>Copyright © 2022 Daniel Marto</Title></div>
    );
}

export default Footer;
