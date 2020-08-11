import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.scss"

export default function ResourceIcon(props){
    const {icon,title,bg} = props

    return (
      <div className="my-4 resource-icon">
        <div
          className="d-flex align-items-center justify-content-center mx-auto icon-container"
          style={{
            borderRadius: "10px",
            background: bg,
            width: "100px",
            height: "100px",
          }}
        >
          {props.icon}
        </div>
        <h3 className="my-3 text-center">{title}</h3>
      </div>
    )
}