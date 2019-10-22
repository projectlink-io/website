/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import notification01 from "../images/projectlink-notification01.png"
import notification02 from "../images/projectlink-notification02.png"
import notification03 from "../images/projectlink-notification03.png"

const notificationStyles = {
  maxWidth: "448px",
  boxShadow: 0,
  borderRadius: "12px",
}

function Notifications() {
  return (
    <>
      <img src={notification01} sx={{
        ...notificationStyles,
        marginTop: "-40px",
        }} />
      <img src={notification02} sx={{
        ...notificationStyles,
        marginTop: 4,
        marginBottom: 4,
        }} />
      <img src={notification03} sx={{
        ...notificationStyles,
        marginBottom: 4,
        }} />
    </>
  );
}

export default Notifications