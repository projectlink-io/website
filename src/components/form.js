/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import {buttonStyles} from "./signupButton"

const Input = ({ children, ...rest }) =>
  <input sx={{
    padding: 2,
    paddingLeft: 3,
    borderRadius: 5,
    appearance: "none",
    border: "1px solid #d6d6d6",
    width: ["100%", "66.6%"],
    marginBottom: 3,
    marginTop: 3,
    "&::placeholder": {
      color: "text.lowContrast",
    },
    "&:focus": {
      borderColor: "border",
      outline: "none",
    }
  }} {...rest}>
    {children}
  </input>;

const Submit = ({ children, ...rest }) =>
  <input sx={{
    ...buttonStyles,
    background: "black",
    borderRadius: "5px",
    color: "text.negative.primary",
  }} type="submit" {...rest}>
    {children}
  </input>

const SignUpForm = ({ setNotification }) => {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addToMailchimp(email);
      setNotification(true);
      setEmail("");
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required /><br/>
      <Submit value="Sign up for the beta →" />
    </form>
  );
}

export default SignUpForm;