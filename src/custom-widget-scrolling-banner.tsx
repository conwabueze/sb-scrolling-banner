import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import { ScrollingBannerView } from "./views/scrollingBannerView";

/**
 * React Component
 */
export interface CustomWidgetScrollingBannerProps extends BlockAttributes {
  title: string;
  showtitle: boolean;
  titlecolor: string;
  bannercolorbg: string;
  bannercolortext: string;
  bannercolorborder: string;
  announcementtitle: string,
  announcementmessage: string,
  announcementlink: string,
  announcementlinktitle: string,
  announcementlinkcolor: string,
  pauseonhover: boolean,
  animationspeed: number,
  showborder: boolean,
}

export const CustomWidgetScrollingBanner = ({ title, showtitle, titlecolor, bannercolorbg, bannercolorborder, bannercolortext, announcementtitle, announcementmessage, announcementlink, announcementlinktitle, announcementlinkcolor, pauseonhover, animationspeed, showborder, contentLanguage }: CustomWidgetScrollingBannerProps): ReactElement => {

  return <div className="cwScrollingBanner">
      <ScrollingBannerView
        {...{
          title,
          showtitle,
          titlecolor,
          bannercolorbg,
          bannercolorborder,
          bannercolortext,
          announcementtitle, 
          announcementmessage, 
          announcementlink, 
          announcementlinktitle,
          announcementlinkcolor,
          pauseonhover,
          animationspeed,
          showborder,
          contentLanguage,
        }}
    />
  </div>
};

