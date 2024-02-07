import React from 'react';
import { Button,Avatar } from '@mui/material';
import "./videofooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Videofooter({channel,song,shares,likes,avatarSrc}) {
    return (
        <div className='videofooter'>
            <div className='videofooter_text'>
            <Avatar src={avatarSrc}/>
            <h4> {channel}.<Button>follow</Button>
            </h4>
            </div >
            <div className='videofooter_ticker'>
            <MusicNoteIcon className='videofooter_icon'/>
            <h4 className='h4'>{song}</h4>
            </div>
            <div className='videofooter_actions'>
                <div className='videofooter_actionsleft'>
                    <FavoriteIcon />
                    <ModeCommentIcon />
                    <SendIcon />
                    <MoreHorizIcon />

                </div>
                <div className='videofooter_actionsright'>
                    <div className='videofooter_stat'>
                        <FavoriteIcon/>
                        <p>{likes}</p>
                        <ModeCommentIcon/>
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videofooter;
