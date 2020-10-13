import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_92IcPjHMwW8ORhTPnCTXrPWvrFQhTGJiHTdKG=s83-c-mo" />
        <div className="sidebar_headerRight">
          <IconButton>
            <CachedRoundedIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="start or search new chats" type="text"></input>
        </div>
      </div>

      <div className="sidebar_chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
