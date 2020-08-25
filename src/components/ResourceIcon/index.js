import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.scss"
import { Link } from 'react-scroll'

export default function ResourceIcon(props){
    const {icon,title,bg, to} = props
    var offsetHeight =
      typeof document !== 'undefined' &&
      document.querySelector(".main-nav").offsetHeight
    return (
      <div className="my-4 resource-icon hover-pointer">
        <Link
            to={to} spy={true} smooth={true} duration={500} offset={-offsetHeight}
          className="d-flex align-items-center justify-content-center mx-auto icon-container"
          style={{
            borderRadius: "10px",
            background: bg,
            width: "100px",
            height: "100px",
          }}
        >
            {icon}
        </Link>
        <h3 className="my-3 text-center">{title}</h3>
      </div>
    )
}