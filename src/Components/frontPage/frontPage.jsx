import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import './frontPageStyle.css';
//import Austronaut from './BrunoSky3_f.jpg';

const FrontPage= () => {

    const [sky, setsky] = useState("fundo");
    const [b1, setb1] = useState("Ver Imagem Original")
    //const [screenWidth, setScreenWidth] = useState (window.innerWidth);

    const mudarFundo = () => {
        if(sky === "fundo"){
            setsky("fundo2")
            setb1("Ver Imagem Editada")
        }else{
            setsky("fundo")
            setb1("Ver Imagem Original")
        }
    }

    

    return(
    <div>
    <div className={sky}>
        <div className="front">  
            <div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><a href="https://drive.google.com/file/d/1_-aYeECcGk8K3JigyWk9G1x-SAiJD_QQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></Menu.Item>
                </Menu> 
            </div>
            <div className="coverAndTittle">  
            <div className="buttonManage">
                <div></div>
                <div><Button onClick={mudarFundo}  ghost="true" >{b1}</Button></div>
                <div></div>
            </div>
                <div className="beginingBan">
                    <div className="banRight"><text style={{fontSize: "10vw", marginLeft: "30px"}}>My Portfolio</text><br/><text style={{fontSize: "20px", marginLeft: "30px"}}>Daniel Marto</text></div>
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