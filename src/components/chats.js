/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line
import React from "react";

import chat01 from "../images/projectlink-chat01.png"
import chat02 from "../images/projectlink-chat02.png"
import chat03 from "../images/projectlink-chat03.png"
import chat04 from "../images/projectlink-chat04.png"

const chatStyles = {
  maxWidth: "50%",
  height: "auto",
  paddingBottom: 3,
  paddingTop: 3,
}

function Chats() {
  return (
    <div sx={{
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      paddingBottom: 6,
      paddingRight: 4,
      paddingTop: 5,
    }}>
      <img sx={{...chatStyles}} id="chat-bubbles" src={chat01} alt="projectlink chat bubble" />
      <img sx={{...chatStyles, alignSelf: "flex-end", paddingBottom: 0}} src={chat02} alt="projectlink chat bubble" />
      <img sx={{...chatStyles, alignSelf: "flex-end"}} src={chat03} alt="projectlink chat bubble" />
      <img sx={chatStyles} src={chat04} alt="projectlink chat bubble" />
    </div>
  );
}

export default Chats
