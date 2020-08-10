import React from "react";

export default function JobCard ({ jobType, jobTitle, companyName, date }) {
    return (
        <div className="card exjoCard" style={{width: "21rem"}}>
            <div className="card-body">
                <button type="button" className="btn btn-warning">{jobType}</button>
                    <h5 className="card-title jobTitle">{jobTitle}</h5>
                <div className="row">
                    <div className="col">
                        <h6 className="card-subtitle mb-2 text-muted">{companyName}</h6>
                    </div>
                    <div className="col">
                        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}