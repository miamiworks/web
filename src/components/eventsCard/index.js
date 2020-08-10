import React from "react";
import EventImg from "../../images/EventsCard.png"

export default function EventsCard () {
    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="card event" style={{width: "32rem"}}>
                        <img src={EventImg} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title evenTitle">1MPACT: Impactful Initiatives to Support the Local Business Community</h5>
                            <p className="card-text eventNam">Doug Skoke</p>
                            <p className="card-text eventSub">President, CEO</p>
                            <h5 className="card-title eventBold">BENJAMIN DOUGLAS</h5>
                            <button type="button" className="btn btn-warning">Learn More</button>
                        </div>
                    </div>
                </div>               
                <div className="col-md-6">
                    <div className="card event" style={{width: "32rem"}}>
                        <img src={EventImg} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title evenTitle">1MPACT: Impactful Initiatives to Support the Local Business Community</h5>
                            <p className="card-text eventNam">Doug Skoke</p>
                            <p className="card-text eventSub">President, CEO</p>
                            <h5 className="card-title eventBold">BENJAMIN DOUGLAS</h5>
                            <button type="button" className="btn btn-warning">Learn More</button>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    )

}