/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import {CSSTransition} from "react-transition-group"

import { useScrollTriggers } from "../hooks"
import ProjectImage01 from "../components/projectImage01"
import ProjectImage02 from "../components/projectImage02"
import ProjectImage03 from "../components/projectImage03"
import ProjectImage04 from "../components/projectImage04"

const Projects = () => {
  const scrolledTo = useScrollTriggers(["#project01", "#project02", "#project03", "#project04"]);

  return (
  <>
    <CSSTransition in={scrolledTo.some(i => i === "#project01")} classNames="project" timeout={1000}>
      <div className="hide">
        <ProjectImage01 id="project01" sx={{
            marginTop: "-64px",
            marginBottom: "16px",
            borderRadius: "7px",
            boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
            transition: "box-shadow .5s",
            "&:hover": {
              transition: "box-shadow .3s",
              boxShadow: "rgba(60,64,67,0.15) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
            },
            }}/>
      </div>
    </CSSTransition>
    <CSSTransition in={scrolledTo.some(i => i === "#project02")} classNames="project" timeout={1000}>
      <div className="hide">
        <ProjectImage02 id="project02" sx={{
            marginBottom: "16px",
            borderRadius: "7px",
            boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
            transition: "box-shadow .5s",
            "&:hover": {
              transition: "box-shadow .3s",
              boxShadow: "rgba(60,64,67,0.15) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
            },
            }}/>
      </div>
    </CSSTransition>
    <CSSTransition in={scrolledTo.some(i => i === "#project03")} classNames="project" timeout={1000}>
      <div className="hide">
        <ProjectImage03 id="project03" sx={{
            marginBottom: "16px",
            borderRadius: "7px",
            boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
            transition: "box-shadow .5s",
            "&:hover": {
              transition: "box-shadow .3s",
              boxShadow: "rgba(60,64,67,0.15) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
            },
            }}/>
      </div>
    </CSSTransition>
    <CSSTransition in={scrolledTo.some(i => i === "#project04")} classNames="project" timeout={1000}>
      <div className="hide">
        <ProjectImage04 id="project04" sx={{
            marginBottom: "-320px",
            borderRadius: "7px",
            boxShadow: "0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15)",
            transition: "box-shadow .5s",
            "&:hover": {
              transition: "box-shadow .3s",
              boxShadow: "rgba(60,64,67,0.15) 0px 0px 20px, rgba(60,64,67,0.15) 0px 0px 14px 0px",
            },
            }}/>
      </div>
    </CSSTransition>
  </>


  );
}
export default Projects
