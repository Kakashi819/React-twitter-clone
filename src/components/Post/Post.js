import React, {forwardRef} from "react";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import {Avatar} from '@mui/material'

import './Post.css'
const Post=forwardRef(({displayName,username,verified,text,avatar,image},ref)=>{
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedOutlinedIcon clasName="post__badge"/>}
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image}/>
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <PublishOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
));
}

export default Post;
