import React, { useRef, useState } from 'react';
import "./videocard.css";
import Videoheader from "./videoheader.js";
import Videofooter from './videofooter.js';

function Videocard({ channel, avatarSrc, url, likes, shares, song }) {
  
  const videoRef = useRef(null);

 

  return (
    <div className="videocard">
      <Videoheader />
      <iframe
        className="videocard_player" 
        src={url} 
        ref={videoRef}


      ></iframe>
      <Videofooter
        channel={channel}
        avatarSrc={avatarSrc}
        shares={shares}
        likes={likes}
        song={song}
      />
   
    </div>
  );
}

export default Videocard;



