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
    <br /><br />
    <div data-widget-conf-grid-type="100" data-widget-type="Section" data-widget-src="internal://staffbase.content.widgets.Section">
      <div>
        <div data-widget-conf-type="warning" data-widget-on-card="true" data-widget-type="Infobox" data-widget-src="internal://staffbase.content.widgets.Infobox">
          <p>PROTOTYPES AND FOR DEMO PURPOSES ONLY!</p>
          <p>NOT FOR PRODUCTION USE!</p>
          <p>NOT AVAILABLE TO CUSTOMERS!</p>
        </div>
      </div>
    </div>
  </div>
};

