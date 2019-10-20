/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { H3, P, A } from './typography'
import SignUpForm from './form';

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
      paddingLeft: 4,
      paddingRight: 4,
    }}>
      <div sx={{
        maxWidth: "640px",
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
        <H3 sx={{
          marginTop: 0,
          marginBottom: 0,
        }}>
          Beta signup
        </H3>
        <P sx={{
          marginTop: 0,
        }}>
          The beta community is a vital part of projectlink. We'll keep you up to date
          and you'll be among the first to access the platform.
        </P>
        <SignUpForm />
      </div>
    </div>
  );
}

export default Modal;
