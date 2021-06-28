import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
import CSS from "csstype";

/**
 * React Component
 */
export interface ScrollingBannerCardProperties {
  announcementtitle: string,
  announcementmessage: string,
  announcementlink: string,
  announcementlinktitle: string,
  announcementlinkcolor: string,
  pauseonhover: boolean,
  animationspeed: number,
}

export const ScrollingBannerCard: FunctionComponent<ScrollingBannerCardProperties> = (props) => {

  const bannerStyle: CSS.Properties = {
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const marqueeAnimation = keyframes`
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  `

  const contentStyle: CSS.Properties = {
    display: "inline-block",
    margin: "0",
    height: "50px",
    lineHeight: "50px",
    paddingLeft: "100%",
  };

  const AnimationDiv = styled.div`
    animation: ${marqueeAnimation} ${props.animationspeed}s linear infinite;
  `

  const linkStyle: CSS.Properties = {
    color: props.announcementlinkcolor,
    textDecoration: "underline",
  };

  return (
    <div style={bannerStyle}>
      <AnimationDiv style={contentStyle}><strong>{props.announcementtitle}:</strong> {props.announcementmessage} <a style={linkStyle} href={props.announcementlink} target="_blank" rel="noopener noreferrer">{props.announcementlinktitle}</a></AnimationDiv>
    </div>
  );
};
