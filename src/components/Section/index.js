import React from "react"
import { Element } from 'react-scroll'

const Section = ({children, name, className}) => {
    return <Element name={name}>
        <section className={`${className}`}>
            {children}
        </section>
    </Element>
}
export default Section