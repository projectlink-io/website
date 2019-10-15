/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Input = ({ children, ...rest }) =>
  <input sx={{
    padding: 2,
    borderRadius: 3,
    appearance: "none",
    border: "1px solid #d6d6d6",
    width: ["100%", "66.6%"],
    marginBottom: 3,
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
    background: "none",
    outline: "none",
    padding: 0,
    border: "none",
    lineHeight: 1.4,
    color: "highlight",
    transition: ".3s all",
    cursor: "pointer",
    transformOrigin: "left",
    transform: "scale(1)",
    "&:hover": {
      color: "#00448F",
      transformOrigin: "left",
      transform: "scale(1.1)",
      transition: ".3s all",
    }
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