import React from 'react';
import "./videoheader.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
function Videoheader(props) {
    return (
        <div className='videoheader'>
            <ArrowBackIosIcon/>
             <h3>Reels</h3>
             <CameraAltIcon/>
        </div>
    );
}

export default Videoheader;