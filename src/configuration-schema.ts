/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    // announcements: {
    //   type: "array",
    //   title: "Announcements",
    //   items: {
    //     type: "object",
    //     required: [
    //       "title"
    //     ],
    //     properties: {
    //       title: {
    //         type: "string",
    //         title: "Title"
    //       },
    //       details: {
    //         type: "string",
    //         title: "Details"
    //       }
    //     }
    //   }
    // },
    // sliderOpts: {
    //   type: "object",
    //   title: "Slider Options",
    //   properties: {
    //     pauseSlider: {
    //       type: "boolean",
    //       title: "Pause slider on mouse over"
    //     }
    //   }
    // },
    bgcolor: {
      type: "string",
      title: "Background Color",
      default: "#FBC91E",
    },
    textcolor: {
      type: "string",
      title: "Text Color",
      default: "#FFFFFF",
    },
    pauseslider: {
      type: "boolean",
      title: "Pause slider on mouse over",
    },
    date: {
      type: "string",
      title: "Forecast Date",
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  bgcolor: {
    "ui:widget": "color"
  },
  textcolor: {
    "ui:widget": "color"
  },
  date: {
    "ui:help":
      "Enter a date to get a weather forecast. Leave empty to show the current weather information.",
    "ui:widget": "date",
  },
};
