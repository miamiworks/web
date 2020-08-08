import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { TopNav } from "../TopNav"
import "../../style.scss"

const Layout = ({children,bodyClass}) => {
    return (
        <div className={bodyClass}>
            <TopNav />
            {children}
        </div>
    )
}
export default Layout