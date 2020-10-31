import React from 'react';
import {  Menu, Typography } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

import Video from '../videography/video';
import Photography from '../Photography/photos';
import Web from '../webDev/webdev';
import 'antd/dist/antd.css';
import './ss.css';


import 'antd/dist/antd.css';
import './ss.css';


const ToDo = () => {

    const {Title} = Typography; 

    console.log(Error);
    return(
    <div className="toDoForma">
        <div className="toDo">
        
        <Link  to="/"><div className="menuBox"><Title style={{paddingBottom:'0px'}} level={5}>PHOTOGRAPHY</Title></div></Link>
        <Link  to="/video"><div className="menuBox" href="/video"><Title style={{paddingBottom:'0px'}} level={5}>VIDEOGRAPHY</Title></div></Link>
        <Link  to="/web"><div className="menuBox" href="/web"><Title style={{paddingBottom:'0px'}} level={5}>WEB</Title></div></Link>
        
        </div>
        <div className="galeria">
        <Switch>
         <Route path="/" exact><Photography/></Route>
         <Route path="/video" exact><Video/></Route>
         <Route path="/web" exact><Web/></Route>
         <Redirect to="/" />
        </Switch>
        </div>
    </div>
    );
};

export default ToDo;