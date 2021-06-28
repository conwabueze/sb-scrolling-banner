import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface CardProperties {
  bannercolorbg: string;
  bannercolorborder: string;
  bannercolortext: string;
}

export const Card: FunctionComponent<CardProperties> = (props) => {
  const cardStyle: CSS.Properties = {
    display: "block",
    textAlign: "center",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: props.bannercolorborder,
    background: props.bannercolorbg,
    color: props.bannercolortext,
  };

  return <div style={cardStyle}>{props.children}</div>;
};
