import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ResourceIcon(props){
    const {icon,title,bg,color} = props
    return (
      <div className="my-4">
        <div className="d-flex align-items-center justify-content-center mx-auto" style={{borderRadius: "10px",background: bg,width:"100px",height:"100px"}}>
          <FontAwesomeIcon color={color} icon={icon} style={{width:"75px",height:"65px"}}/>
        </div>
        <h3 className="my-3 text-center">{title}</h3>
      </div>
    )
}