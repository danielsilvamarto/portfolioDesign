import React from 'react';
import ReactPlayer from 'react-player';


const VideoPlayer = ({props}) => {
    return(
    <ReactPlayer
        url={props}
        
        width='100%'
        height='100%'
        controls
        />
        )
}

export default VideoPlayer;