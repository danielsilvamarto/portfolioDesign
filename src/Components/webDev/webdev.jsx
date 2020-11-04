import React from 'react';
import {Card, Typography} from 'antd';
import {text} from '../Texts/textos';
import Miner from './Screenshot_2.png'
import './webStyle.css';
import '../Photography/photosS.css';

const {Title} = Typography; 
const { Meta } = Card;


const webDev = () => {
    return(
        <div className="webMain">
            <div style={{width:'99vw', padding:'15px', justifyContent:'center', alignSelf:'center', textAlign:'center'}}><Title  level={3}>WEB DEVELOPMENT</Title></div>
            <div className="textoOrdem"><Title level={4}>{text[3].body}<a href="https://github.com/danielsilvamarto/portfolioDesign" target="_blank"> GitHub account.</a></Title></div>
            <div className="miner" >
            <div style={{padding:'50px'}}>
            <a href="https://minerblanc.pt" target="_blank">
            <Card style={{height:'350px', width:'230px'}} hoverable={true} >
                <div className="cardLay">
                    <div><img src={Miner} style={{width:'198px', OObjectFit:'contain'}} /></div>
                    <div><Meta title="Minerblanc" description="minerblanc.pt" /></div>
                </div>
            </Card>
            </a></div>
            <div><Title level={5} style={{maxWidth:'300px'}}>{text[4].body}</Title></div>
            </div>

        </div>
    )
}

export default webDev;