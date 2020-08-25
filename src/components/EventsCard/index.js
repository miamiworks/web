import React from "react";
import FireImage from "../FireImage"
import PropTypes from "prop-types"
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultImgUrl from "../../images/EventsCard.png"
import "./style.scss"
import dayjs from "dayjs";

export default function EventsCard ({ date, time, eventName, speakerName, speakerPosition, comingFrom, eventImage, companyImage, url }) {
    let _date = dayjs(date);
    let _speakerName = Number.isNaN(speakerName) || speakerName=='NaN' ? "" : speakerName
    let _speakerPosition = Number.isNaN(speakerPosition) || speakerPosition=='NaN' ? "" : speakerPosition
    let _companyImage = Number.isNaN(companyImage) ? "" : companyImage
    return (
        <div className="card event">
            <FireImage name={eventImage} defaultImg={defaultImgUrl} alt={"Banner for "+eventName} className="card-img-top" />
            <div className="card-img-overlay">
                <p className="card-text"><FontAwesomeIcon icon={faCalendarDay} /> {_date.format('MMMM, D')}</p>
                <h5 className="card-title workshopTime">{time}</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title evenTitle">{eventName}</h5>
                <div className="event-call-action">
                    {_speakerName !== "" && <p className="card-text eventNam">{_speakerName}</p>}
                    {_speakerPosition !== "" && <p className="card-text eventSub">{_speakerPosition}</p>}
                    {_companyImage !== "" && <h5 className="card-title"> <FireImage name={_companyImage} alt={"Logo for "+comingFrom} /></h5>}
                    <a href={url || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-warning">Learn More</a>
                </div>
            </div>
        </div>           
    )

}
EventsCard.propTypes = {
    eventImage: PropTypes.string,
    companyImage: PropTypes.string,
    speakerPosition: PropTypes.string,
    speakerName: PropTypes.string,
    date: PropTypes.string,
}
EventsCard.defaultProps = {
    eventImage: "",
    companyImage: "",
    speakerPosition: "",
    speakerName: "",
    date: "2019-01-25",
}