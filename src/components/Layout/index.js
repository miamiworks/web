import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { TopNav } from "../TopNav"

const Layout = ({children}) => {
    return <>
        <TopNav />
        {children}
    </>
}
export default Layout