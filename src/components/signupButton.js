/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line
import React from 'react'

export const buttonStyles = {
  appearance: "none",
  padding: "8px 16px",
  borderRadius: 3,
  fontWeight: "bold",
  cursor: "pointer",
  border: "none",
  "&:hover":{
    textDecoration: "underline",
  },
}

function SignupButton({onClick}) {
  return (
    <button sx={buttonStyles} onClick={onClick}>
      Sign up for the beta
    </button>
  );
}

export default SignupButton