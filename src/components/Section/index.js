import React from "react"

const Section = ({children, className}) => {
    return <div className={`${className}`}>
        {children}
    </div>
}
export default Section