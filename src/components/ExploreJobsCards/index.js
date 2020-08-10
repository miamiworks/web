import React from "react";

export default function ExploreJobsCards () {
    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card exjoCard" style={{width: "21rem"}}>
                        <div className="card-body">
                            <button type="button" className="btn btn-warning">product</button>
                            <h5 className="card-title jobTitle">Product Designer</h5>
                            <div className="row">
                                <div className="col">
                                    <h6 className="card-subtitle mb-2 text-muted">Kaseya</h6>
                                </div>
                                <div className="col">
                                    <h6 className="card-subtitle mb-2 text-muted">Posted 3 days ago</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card exjoCard" style={{width: "21rem"}}>
                        <div className="card-body">
                            <button type="button" className="btn btn-primary">engineering</button>
                            <h5 className="card-title jobTitle">Web Developer</h5>
                            <div className="row">
                                <div className="col">
                                    <h6 className="card-subtitle mb-2 text-muted">Kaseya</h6>
                                </div>
                                <div className="col">
                                    <h6 className="card-subtitle mb-2 text-muted">Posted 3 days ago</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card exjoCard" style={{width: "21rem"}}>
                        <div className="card-body">
                            <button type="button" className="btn btn-warning">product</button>
                            <h5 className="card-title jobTitle">Product Manager</h5>
                            <div className="row">
                                <div className="col">
                                    <h6 className="card-subtitle mb-2 text-muted">Kaseya</h6>
                                </div>
                                <div className="col">
                                    <h6 className="card-subtitle mb-2 text-muted">Posted 3 days ago</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}