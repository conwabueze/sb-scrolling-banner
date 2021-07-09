import React, { FunctionComponent } from "react";
import { BlockAttributes } from "widget-sdk";

import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { ScrollingBannerCard } from "../components/ScrollingBannerCard";

/**
 * React Component
 */
 export interface CustomWidgetScrollingBannerProps extends BlockAttributes {
    title: string,
    showtitle: boolean,
    titlecolor: string,
    bannercolorbg: string,
    bannercolortext: string,
    bannercolorborder: string,
    announcementtitle: string,
    announcementmessage: string,
    announcementlink: string,
    announcementlinktitle: string,
    announcementlinkcolor: string,
    pauseonhover: boolean,
    animationspeed: number,
    showborder: boolean,
}

export const ScrollingBannerView: FunctionComponent<CustomWidgetScrollingBannerProps> = ({ title, showtitle, titlecolor, bannercolorbg, bannercolorborder, bannercolortext, announcementtitle, announcementmessage, announcementlink, announcementlinktitle, announcementlinkcolor, pauseonhover, animationspeed, showborder }: CustomWidgetScrollingBannerProps) => {

    const isTitleShown = typeof showtitle == "string" ? showtitle === "true" : !!showtitle;

    return ( <div className="cwScrollingBannerView">
        { isTitleShown ? 
            <Title 
                title={title}
                titlecolor={titlecolor} /> 
            : ''
        }
        <Card
            bannercolorbg={bannercolorbg}
            bannercolorborder={bannercolorborder}
            bannercolortext={bannercolortext}
            showborder={showborder} >
            <ScrollingBannerCard
                announcementtitle={announcementtitle}
                announcementmessage={announcementmessage}
                announcementlink={announcementlink}
                announcementlinktitle={announcementlinktitle}
                announcementlinkcolor={announcementlinkcolor}
                pauseonhover={pauseonhover}
                animationspeed={animationspeed} />
        </Card>
    </div> )
};
