import React from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"
import { P } from "./Typography"

const StyledNotification = styled.aside`
  position: absolute;
  left: 50%;
  transition: 0.5s;
  width: 90%;
  padding: 0.5rem 1rem;
  background: #22eaad;
  border-radius: 4px;
  box-shadow: 1px 1px 14px 6px #9c9c9c61;
  opacity: ${({ state }) => (state === "entering" || state === "entered" ? 1 : 0)};
  ${ props => console.log(props) };
  transform: translate(
    -50%,
    ${({ state }) => (state === "entering" || state === "entered" ? 32 : -32)}px
  );
  @media screen and (min-width: 768px) {
    padding: 0.5rem 4rem;
    width: auto;
  }
`
const StyledText = styled(P)`
  margin: 0;
  color: #3B42AC;
`

const Notification = ({state}) =>
  <StyledNotification state={state}>
    <StyledText>
      Thank you for your interest! We'll be in touch when the beta is ready.
    </StyledText>
  </StyledNotification>

export default Notification

