import React from "react";
import CompanyLogo from "../../images/CompanyLogo.png"
import {Button, Badge} from "react-bootstrap"
import "./style.css"

export default function JobCard ({ jobType, jobTitle, companyName, date }) {
    return (
        <div className="card exjoCard">
            <div className="card-body">
                <Button variant="warning">
                    <Badge pill variant="light" className="mr-1 buttonYellow">&nbsp;</Badge> 
                    {jobType}                           
                </Button>
                    <h5 className="card-title jobTitle">{jobTitle}</h5>
                <div className="row">
                    <div className="col">
                        <h6 className="card-subtitle mb-2 text-muted"><img src={CompanyLogo} /> {companyName}</h6>
                    </div>
                    <div className="col">
                        <h6 className="card-subtitle mb-2 text-muted text-right">{date}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}