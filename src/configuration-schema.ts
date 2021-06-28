import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  required: [
    "title",
    "announcementtitle",
    "announcementmessage"
  ],
  properties: {  
    title: {
      type: "string",
      title: "Title"
    },
    showtitle: {
      type: "boolean",
      title: "Show Title"
    },
    titlecolor: {
      type: "string",
      title: "Title Color",
      default: "#333333"
    },
    announcementtitle: {
      type: "string",
      title: "Announcement Title",
      default: "Breaking News"
    },
    announcementmessage: {
      type: "string",
      title: "Announcement Message",
      default: "Some announcement message to catch the viewer's attention."
    },
    announcementlink: {
      type: "string",
      format: "uri",
      title: "Announcement Link",
      default: "https://app.maximize-it.eu/"
    },
    announcementlinktitle: {
      type: "string",
      title: "Announcement Link Title",
      default: "Read more"
    },
    announcementlinkcolor: {
      type: "string",
      title: "Announcement Link Color",
      default: "#FFFFFF"
    },
    pauseonhover: {
      type: "boolean",
      title: "Pause Slider On Hover",
      default: true
    },
    animationspeed: {
      type: "integer",
      title: "Animation speed",
      default: 10,
      minimum: 1,
      maximum: 50
    },
    bannercolorbg: {
      type: "string",
      title: "Background Color",
      default: "#FBC91E"
    },
    bannercolorborder: {
      type: "string",
      title: "Border Color",
      default: "#FBC91E"
    },
    showborder: {
      type: "boolean",
      title: "Show Border",
      default: true
    },
    bannercolortext: {
      type: "string",
      title: "Text Color",
      default: "#FFFFFF"
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  title: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "off",
    "ui:help": "Choose a title for the scrolling banner."
  },
  showtitle: {
    "ui:help": "Do you want to display the title?"
  },
  titlecolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the title of the scrolling banner. Default: #333333"
  },
  announcementtitle: {
    "ui:help": "Enter an announcement title."
  },
  announcementmessage: {
    "ui:help": "Enter an announcement message."
  },
  announcementlink: {
    "ui:help": "Enter an announcement link with more information."
  },
  announcementlinktitle: {
    "ui:help": "Enter a text for the announcement link."
  },
  announcementlinkcolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the announcement link. Default: #FFFFFF"
  },
  pauseonhover: {
    "ui:help": "Do you want to pause the slider on mouse hover?"
  },
  animationspeed: {
    "ui:help": "Enter an animation speed (in s) for the scrolling banner."
  },
  bannercolorbg: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background of the scrolling banner. Default: #FBC91E"
  },
  bannercolorborder: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the border of the scrolling banner. Default: #FBC91E"
  },
  showborder: {
    "ui:help": "Do you want to use colored rounded corners?"
  },
  bannercolortext: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the text in the scrolling banner. Default: #FFFFFF"
  },
};
