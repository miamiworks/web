import React from "react";
import EventImg from "../../images/EventsCard.png"
import "./style.scss"

export default function EventsCard ({ eventName, speakerNam, speakerPosition, comingFrom }) {
    return (
        <div className="card event" style={{maxWidth: "32rem"}}>
            <img src={EventImg} className="card-img-top" alt="..."/>
            <div className="card-img-overlay">
                <p className="card-text"> August 13th</p>
                <h5 className="card-title workshopTime">5:00 PM</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title evenTitle">{eventName}</h5>
                <p className="card-text eventNam">{speakerNam}</p>
                <p className="card-text eventSub">{speakerPosition}</p>
                <h5 className="card-title eventBold">{comingFrom}</h5>
                <button type="button" className="btn btn-warning">Learn More</button>
            </div>
        </div>           
    )

}