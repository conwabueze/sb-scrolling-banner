import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetScrollingBanner} from "./custom-widget-scrolling-banner";

describe("CustomWidgetScrollingBanner", () => {
    it("should render the component", () => {
        render(<CustomWidgetScrollingBanner contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
