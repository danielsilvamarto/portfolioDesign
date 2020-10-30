import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import './frontPageStyle.css';
import smoothscroll from 'smoothscroll-polyfill';
import AboutMe from '../aboutMe/aboutMe';
//import Austronaut from './BrunoSky3_f.jpg';

const FrontPage= () => {

    const [sky, setsky] = useState("fundo");
    const [b1, setb1] = useState("See Original Image")
    //const [screenWidth, setScreenWidth] = useState (window.innerWidth);

    const mudarFundo = () => {
        if(sky === "fundo"){
            setsky("fundo2")
            setb1(" See Photoshoped Image")
        }else{
            setsky("fundo")
            setb1("See Original Image")
        }
    }

    

    /*const scrollar = () => {
        window.scrollTo({ 0: AboutMe,behavior: 'smooth' });
    }*/

    

    return(
    <div>
    <div className={sky}>
        <div className="front">  
            <div style={{maxHeight:'10vh'}}>
                <Menu theme="dark" mode="horizontal" style={{width:'99vw'}} defaultSelectedKeys={['2']}>
                    <Menu.Item style={{backgroundColor: "#338DFF"}} key="1"><a href="https://drive.google.com/file/d/1_-aYeECcGk8K3JigyWk9G1x-SAiJD_QQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></Menu.Item>
                </Menu> 
            </div>
            <div className="coverAndTittle">  
            <div className="buttonManage">
                <div></div>
                <div><Button onClick={mudarFundo}  ghost="true" >{b1}</Button></div>
                <div></div>
            </div>
                <div className="beginingBan">
                    <div className="banRight">
                        <text style={{fontSize: "10vw", marginLeft: "5px"}}>My Portfolio</text>
                        <br/>
                        <div className="textButton">
                            <div className="espaco"><text style={{fontSize: "20px", marginLeft: "5px"}}>Daniel Marto</text></div>
                            
                        </div>
                        
                    </div>
                    <div></div>
                </div>
                <div ></div>
            </div>
        </div>
    </div>
    <div ></div>    
    </div>
    );
}

export default FrontPage;