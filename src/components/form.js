/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { buttonStyles } from "./signupButton"
import { toast } from "react-toastify";
import { P } from "./typography";

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

const SignUpForm = ({ initialMessage = "Sign up to get updates and be the first to access the beta." }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [messageColor, setMessageColor] = useState("primary");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const r = await addToMailchimp(email);

      if (r.result && r.result === "error") {
        if (r.msg.includes("is already subscribed")) {
          setMessageColor("success");
          return setMessage("You're already signed up");
        }
        setMessageColor("error");
        return setMessage(r.message || "Couldn't sign you up right now.");
      }

      if (r.result && r.result === "success") {
        setEmail("");
        setMessageColor("success");
        setMessage("Success! You're signed up.");
        toast("😀 Thanks for your interest in Projectlink. We'll be in touch with you soon with more information.");
      }

    } catch (error) {
      console.warn(error);
      setMessageColor("error");
      setMessage("Couldn't sign up you. Are you connected to the internet?");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <P sx={{
        color: `text.${messageColor}`,
        marginBottom: 0,
      }}>{message}</P>
      <Input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required /><br />
      <Submit value="Sign up for the beta →" />
    </form>
  );
}

export default SignUpForm;