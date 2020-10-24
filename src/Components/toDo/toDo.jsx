import React from 'react';
import { Image, Typography } from 'antd';
import 'antd/dist/antd.css';
import './ss.css';
import ImgCode from "./code.png";
import ImgPhoto from "./photography.png";
import ImgVideo from "./videographer.png";

import 'antd/dist/antd.css';
import './ss.css';

const ToDo = () => {

    const {Title} = Typography; 

    console.log(Error);
    return(
    <div className="toDoForma">
        <div className="toDo">
            <div className="titulos"><div className="iconesCaixa"><Image className="iconesI" src={ImgPhoto} preview={false}/></div><Title level={5}>PHOTOGRAPHY</Title></div>
            <div className="titulos"><div className="iconesCaixa"><Image className="iconesI" src={ImgVideo} preview={false}/></div><Title level={5}>VIDEO</Title></div>
            <div className="titulos"><div className="iconesCaixa"><Image className="iconesI" src={ImgCode} preview={false}/></div><Title level={5}>WEB DEVELOPING</Title></div>
        </div>
    </div>
    );
};

export default ToDo;