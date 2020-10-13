import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import SelectInput from "@material-ui/core/Select/SelectInput";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">sooraj</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_reciever chat_message">
          <span className="chat_name">sooraj</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input placeholder="type a message" type="text" />
          <button type="submit">send message</button>
          <MicOutlinedIcon />
        </form>
      </div>
    </div>
  );
}

export default Chat;
