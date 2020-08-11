import React from "react"

import StoreWrapper from "./src/store/appContext"

// highlight-start
export const wrapRootElement = ({ element }) => (
    <StoreWrapper>{element}</StoreWrapper>
)
// highlight-end
