/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { H3, P, A } from './typography'

function Modal({modalOpen, setModalOpen}) {
  return (
    <div sx={{
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(0,0,0,0.33)",
      display: "flex",
      alignItems: "center",
      zIndex: 9,
    }}>
      <div sx={{
        maxWidth: "768px",
        margin: "auto",
        background: "white",
        padding: 4,
        boxShadow: "0px 2px 22px rgba(0, 0, 0, 0.230305)",
        borderRadius: "8px",
        position: "relative",
      }}>
        <A sx={{
          position: "absolute",
          fontSize: 1,
          right: "16px",
          top: "8px",
        }} href="#" onClick={() => setModalOpen(false)}>
          close
        </A>
        <P sx={{
          color: "text.lowContrast",
          marginTop: 0,
        }}>
          Projectlink
        </P>
        <H3>
          Beta signup
        </H3>
        <P sx={{
          marginTop: 0,
        }}>
          The beta community is a vital part of projectlink.
        </P>
      </div>
    </div>
  );
}

export default Modal;
