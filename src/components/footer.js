/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line
import React from 'react'
import { H3, P } from './typography';
import { ContentSection, FlexRow } from './grid';
import logo from "../images/projectlink-logo-white.png";
import SignupButton from './signupButton';

function Footer({setModalOpen}) {
  return (
    <footer sx={{
      backgroundColor: "background.black",
    }}>
      <ContentSection>
        <FlexRow>
          <div sx={{
            padding: [4, 5],
          }}>
            <img src={logo} sx={{maxWidth: "50%"}} alt="project link logo" />
            <H3 sx={{
              color: "text.negative.primary",
            }}>
              The easiest way<br/>to close deals
            </H3>
            <SignupButton onClick={setModalOpen}/>
          </div>
          <div sx={{
            width: "100%",
            paddingLeft: 4,
            paddingRight: 4,
            bottom: 0,
          }}>
            <P sx={{
              color: "text.negative.lowContrast",
              textAlign: ["left", "right"],
            }}>
              questions@projectlink.io | copyright © Projectlink {new Date().getFullYear()}
            </P>
          </div>
        </FlexRow>
      </ContentSection>
    </footer>
  );
}
export default Footer