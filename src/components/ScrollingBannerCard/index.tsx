import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";

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

  const Banner = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  `

  const marqueeAnimation = keyframes`
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  `

  const AnimationWrapper = styled.div`
    display: inline-block;
    margin: 0;
    height: 50px;
    line-height: 50px;
    paddin-left: 100%;
  `

  const AnimationDiv = styled(AnimationWrapper)`
    animation: ${marqueeAnimation} ${props.animationspeed}s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  `

  const Link = styled.a`
    color: ${props.announcementlinkcolor} !important;
    text-decoration: underline;
    &:hover, &:active, &:focus, &:visited {
      text-decoration: none;
    }
  `

  return (
    <Banner className="cwScrollingBannerComponentsScollingBannerCard">
      <AnimationWrapper className="cwScrollingBannerComponentsScollingBannerCardAnimationWrapper"><AnimationDiv className="cwScrollingBannerComponentsScollingBannerCardAnimation"><strong>{props.announcementtitle}:</strong> {props.announcementmessage} <Link  className="cwScrollingBannerComponentsScollingBannerCardLink" href={props.announcementlink} target="_blank" rel="noopener noreferrer">{props.announcementlinktitle}</Link></AnimationDiv></AnimationWrapper>
    </Banner>
  );
};
