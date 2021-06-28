import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface CardProperties {
  bannercolorbg: string,
  bannercolorborder: string,
  bannercolortext: string,
  showborder: boolean,
}

export const Card: FunctionComponent<CardProperties> = (props) => {

  const isBorderShown = typeof props.showborder == "string" ? props.showborder === "true" : !!props.showborder;

  const StyledCardWithoutBorder = styled.div`
    color: ${props.bannercolortext};
    display: block;
    text-align: center;
    background: ${props.bannercolorbg};
    border-radius: 0px;
    border: none;
  `

  const StyledCardWithBorder = styled.div`
    color: ${props.bannercolortext};
    display: block;
    text-align: center;
    background: ${props.bannercolorbg};
    border-radius: 5px;
    border: 2px solid;
    border-color: ${props.bannercolorborder};
  `

  return <div>
    { isBorderShown ? 
      (<StyledCardWithBorder>{props.children}</StyledCardWithBorder>) 
      : 
      (<StyledCardWithoutBorder>{props.children}</StyledCardWithoutBorder>) 
    }
    </div>;
};
