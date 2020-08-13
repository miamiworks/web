import React from "react";
import CompanyLogo from "../../images/CompanyLogo.png"
import {Button, Badge} from "react-bootstrap"
import PropTypes from "prop-types"
import "./style.scss"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const slice = function(str, length=50, ending='...'){
  if (str.length <= length) return str;
  var truncated = str.substr(0, length);
  if (str.charAt(length) === ' ') return truncated;
  return truncated.substr(0, truncated.lastIndexOf(' '));
}
export default function JobCard ({ jobType, jobTitle, companyName, date, CompanyLogo }) {
    var now = dayjs()
    let _date = dayjs(date);
    return (
        <div className="card exjoCard">
            <div className="card-body">
                <Button variant="warning">
                    <Badge pill variant="light" className="mr-1 buttonYellow">&nbsp;</Badge> 
                    {jobType}                           
                </Button>
                <h5 className="card-title jobTitle">{slice(jobTitle)}</h5>
                <div className="bottom">
                    <div className="date float-right">{now.from(_date)}</div>
                    <img className="logo" src={CompanyLogo} />
                </div>
            </div>
        </div>
    )
}
JobCard.propTypes = {
    date: PropTypes.string,
}
JobCard.defaultProps = {
    date: "2019-01-25",
}