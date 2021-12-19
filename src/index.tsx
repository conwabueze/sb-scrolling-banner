import React from "react";
import ReactDOM from "react-dom";

import { BlockFactory, BlockDefinition, ExternalBlockDefinition, BaseBlock } from "widget-sdk";
import { CustomWidgetScrollingBannerProps, CustomWidgetScrollingBanner } from "./custom-widget-scrolling-banner";
import { configurationSchema, uiSchema } from "./configuration-schema";
import pkg from '../package.json'

/**
 * This factory creates the class which is registered with the tagname in the `custom element registry`
 * Gets the parental class and a set of helper utilities provided by the hosting application.
 */
const factory: BlockFactory = (BaseBlockClass, _widgetApi) => {
  /**
   *  <custom-widget-scrolling-banner></custom-widget-scrolling-banner>
   */
  return class CustomWidgetScrollingBannerBlock extends BaseBlockClass implements BaseBlock {
    public constructor() {
      super();
    }

    private get props(): CustomWidgetScrollingBannerProps {
      const attrs = this.parseAttributes<CustomWidgetScrollingBannerProps>();
      return {
        ...attrs,
        contentLanguage: this.contentLanguage,
      };
    }

    public renderBlock(container: HTMLElement): void {
      ReactDOM.render(<CustomWidgetScrollingBanner {...this.props} />, container);
    }

    /**
     * The observed attributes, where the widgets reacts on. The default
     * attributes "content-language", "widget-title", "on-card" have to be kept!
     */
    public static get observedAttributes(): string[] {
      const defaults = ["content-language", "widget-title", "on-card"];
      return [...defaults, "title", "showtitle", "titlecolor", "bannercolorbg", "bannercolorborder", "bannercolortext", "announcementtitle", "announcementmessage", "announcementlink", "announcementlinktitle", "announcementlinkcolor","pauseonhover", "animationspeed", "showborder"];
    }

    /**
     * Callback invoked on every change of an observed attribute. Call the parental method before
     * applying own logic.
     */
    public attributeChangedCallback(...args: [string, string | undefined, string | undefined]): void {
      super.attributeChangedCallback.apply(this, args);
    }
  };
};

/**
 * The definition of the block, to let it successful register to the hosting application
 */
const blockDefinition: BlockDefinition = {
    name: "custom-widget-scrolling-banner",
    factory: factory,
    attributes: ['title','showtitle','titlecolor','bannercolorbg','bannercolortext','bannercolorborder','announcementtitle','announcementmessage','announcementlink','announcementlinktitle','announcementlinkcolor','pauseonhover','animationspeed','showborder'],
    blockLevel: 'block',
    configurationSchema: configurationSchema,
    uiSchema: uiSchema,
    label: 'DEMO: Scrolling Banner',
    iconUrl: "https://maximizeit.github.io/sb-custom-widget-scrolling-banner/resources/scrolling-banner-icon.png",
};

/**
 * Wrapping definition, which defines meta informations about the block.
 */
const externalBlockDefinition: ExternalBlockDefinition = {
  blockDefinition,
  author: pkg.author,
  version: pkg.version
};

/**
 * This call is mandatory to register the block in the hosting application.
 */
window.defineBlock(externalBlockDefinition);
