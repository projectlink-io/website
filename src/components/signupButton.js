/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const buttonStyles = {
  appearance: "none",
  padding: "8px 16px",
  borderRadius: 3,
  fontWeight: "bold",
  cursor: "pointer",
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