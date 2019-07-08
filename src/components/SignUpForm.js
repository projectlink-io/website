import React, { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  -webkit-appearance: none;
  border: 1px solid #d6d6d6;
  margin-bottom: 1rem;
  width: 22rem;
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border-color: #007eff;
    outline: none;
  }
`
const Submit = styled.input`
  background: none;
  outline: none;
  padding: 0;
  border: none;
  line-height: 1.4;
  color: #007eff;
  transition: .3s all;
  cursor: pointer;
  transform-origin: left;
  transform: scale(1);
  &:hover {
    color: #00448F;
    transform-origin: left;
    transform: scale(1.1);
    transition: .3s all;
  }
`

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
      <Submit type="submit" value="Sign up for the beta →" />
    </form>
  );
}

export default SignUpForm;