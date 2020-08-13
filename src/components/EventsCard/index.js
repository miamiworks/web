import React from "react";
import FireImage from "../FireImage"
import PropTypes from "prop-types"
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"
import dayjs from "dayjs";

export default function EventsCard ({ date, time, eventName, speakerName, speakerPosition, comingFrom, eventImage, companyImage, url }) {
    let _date = dayjs(date);
    return (
        <div className="card event">
            <FireImage name={eventImage} alt={"Event alt"} className="card-img-top" />
            <div className="card-img-overlay">
                <p className="card-text"><FontAwesomeIcon icon={faCalendarDay} /> {_date.format('MMMM, D')}</p>
                <h5 className="card-title workshopTime">{time}</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title evenTitle">{eventName}</h5>
                <div className="event-call-action">
                    <p className="card-text eventNam">{speakerName}</p>
                    <p className="card-text eventSub">{speakerPosition}</p>
                    <h5 className="card-title"> <FireImage name={companyImage} alt={"Event alt"} /></h5>
                    <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-warning">Learn More</a>
                </div>
            </div>
        </div>           
    )

}
EventsCard.propTypes = {
    eventImage: PropTypes.string,
    date: PropTypes.string,
}
EventsCard.defaultProps = {
    eventImage: "",
    date: "2019-01-25",
}