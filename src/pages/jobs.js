import React, { useState, useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import "../styles/jobs/jobs.scss"

export default function Jobs() {
    const { store, actions } = useContext(Context)

    return (<div className="jobs">
        <div className="intro">
            <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar w-nav">
                <div className="nav-left"><a href="#" className="brand w-nav-brand"><img src="images/MiamiTechWorks_Logo_Final_White-02.png" alt="" className="image-5" /></a></div>
                <div className="nav-right"><a href="#" className="nav-link w-nav-link">Jobs</a><a href="#" className="nav-link w-nav-link">Career Paths</a><a href="#" className="nav-link w-nav-link">Resources</a><a href="#" className="nav-link w-nav-link">Coaching</a><a href="#" className="button-5 w-button">Post a Job</a>
                    <div className="w-nav-button">
                        <div className="icon w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jobs-section">
            <div className="columns w-row">
                <div className="column-3 w-col w-col-8">
                    <div className="search-filters">
                        <div className="form-block w-form">
                            <form id="wf-form-Search-form" name="wf-form-Search-form" data-name="Search form" method="post" className="form">
                                <input type="text" className="text-field w-input" maxlength="256" name="Job-title" data-name="Job Title" placeholder="Job title or keyword" id="Job-title" />
                                <input type="submit" value="🔍 " data-wait="" className="submit-button w-button" />
                            </form>
                            <div className="success-message w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="error-message w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                        <div data-hover="" data-delay="0" className="dropdown w-dropdown">
                            <div className="dropdown-toggle w-dropdown-toggle">
                                <div className="icon-2 w-icon-dropdown-toggle"></div>
                                <div className="text-field">skill pathway</div>
                            </div>
                            <nav className="w-dropdown-list"><a href="#" className="w-dropdown-link">Link 1</a><a href="#" className="w-dropdown-link">Link 2</a><a href="#" className="w-dropdown-link">Link 3</a></nav>
                        </div>
                        <div data-hover="" data-delay="0" className="dropdown-2 w-dropdown">
                            <div className="dropdown-toggle w-dropdown-toggle">
                                <div className="icon-2 w-icon-dropdown-toggle"></div>
                                <div className="text-field">location</div>
                            </div>
                            <nav className="dropdown-list w-dropdown-list"><a href="#" className="w-dropdown-link">Miami, FL</a><a href="#" className="w-dropdown-link">Link 2</a><a href="#" className="w-dropdown-link">Link 3</a></nav>
                        </div>
                    </div>
                    <div className="job-tag-container">
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                    </div>
                    <div className="job-column-header">
                        <h1 className="heading-4">jobs</h1>
                        <div className="text-block-4">search results: 30 </div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                    <div className="job-card">
                        <div className="job-description">
                            <div className="job-title">
                                <h6 className="job-title-header">Front End Developer</h6>
                            </div>
                            <div className="job-description">
                                <div className="text-block-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tellus lorem. Donec quam odio, volutpat vel ipsum tristique, porttitor placerat nisi. Praesent ut justo sit amet quam accumsan posuere vitae finibus augue. In fringilla mollis gravida.</div>
                            </div>
                            <div className="job-tags">
                                <div className="pill w-clearfix">
                                    <div className="div-block-3"></div>
                                    <div className="text-block">design</div>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div className="location-details">
                                <div className="detail-header-div"><img src="images/Vector.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Location</div>
                                </div>
                                <div className="details">Midtown/Remote</div>
                            </div>
                            <div className="company-details">
                                <div className="detail-header-div"><img src="images/building-1.png" loading="lazy" alt="" className="detail-icon" />
                                    <div className="details-headers">Company</div>
                                </div>
                                <div className="details">Kaseya</div>
                            </div>
                        </div>
                        <div className="logo-application">
                            <div className="date-posted">
                                <div className="date-posted this-week">3 days ago</div>
                            </div><a href="#" className="button-3 w-button">Apply</a></div>
                    </div>
                </div>
                <div className="w-col w-col-4">
                    <div className="events">
                        <div className="secondary-column-header">
                            <h1 className="heading-5">events</h1>
                        </div>
                        <div className="side-panel-card">
                            <div className="event-row">
                                <div className="event-timing">
                                    <h2 className="heading-7">13</h2>
                                    <div className="event-month">JUL</div>
                                    <div className="event-time">5:00PM</div>
                                </div>
                                <div className="event-details">
                                    <div className="event-title">
                                        <h6 className="heading-6">1MPACT: Impactful Initiatives to Support the Local Business Community</h6>
                                    </div>
                                    <div className="speaker-registration">
                                        <div className="speaker-details">
                                            <div className="body-5"><strong>Doug Skoke</strong><br /></div>
                                            <div className="body-6">President, CEO<br /></div>
                                        </div><a href="#" className="button-4 w-button">Register</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="side-panel-card">
                            <div className="event-row">
                                <div className="event-timing">
                                    <h2 className="heading-7">13</h2>
                                    <div className="event-month">JUL</div>
                                    <div className="event-time">5:00PM</div>
                                </div>
                                <div className="event-details">
                                    <div className="event-title">
                                        <h6 className="heading-6">1MPACT: Impactful Initiatives to Support the Local Business Community</h6>
                                    </div>
                                    <div className="speaker-registration">
                                        <div className="speaker-details">
                                            <div className="body-5"><strong>Doug Skoke</strong><br /></div>
                                            <div className="body-6">President, CEO<br /></div>
                                        </div><a href="#" className="button-4 w-button">Register</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="side-panel-card">
                            <div className="event-row">
                                <div className="event-timing">
                                    <h2 className="heading-7">13</h2>
                                    <div className="event-month">JUL</div>
                                    <div className="event-time">5:00PM</div>
                                </div>
                                <div className="event-details">
                                    <div className="event-title">
                                        <h6 className="heading-6">1MPACT: Impactful Initiatives to Support the Local Business Community</h6>
                                    </div>
                                    <div className="speaker-registration">
                                        <div className="speaker-details">
                                            <div className="body-5"><strong>Doug Skoke</strong><br /></div>
                                            <div className="body-6">President, CEO<br /></div>
                                        </div><a href="#" className="button-4 w-button">Register</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events">
                        <div className="secondary-column-header">
                            <h1 className="heading-5">courses</h1>
                        </div>
                        <div className="side-panel-card">
                            <div className="event-row">
                                <div className="event-timing">
                                    <h2 className="heading-7">13</h2>
                                    <div className="event-month">JUL</div>
                                    <div className="event-time">5:00PM</div>
                                </div>
                                <div className="event-details">
                                    <div className="event-title">
                                        <h6 className="heading-6">1MPACT: Impactful Initiatives to Support the Local Business Community</h6>
                                    </div>
                                    <div className="speaker-registration">
                                        <div className="speaker-details">
                                            <div className="body-5"><strong>Doug Skoke</strong><br /></div>
                                            <div className="body-6">President, CEO<br /></div>
                                        </div><a href="#" className="button-4 w-button">Register</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jobs">
            <div className="w-container">
                <h2 className="heading-2">Find a job<br />you will love</h2>
                <div className="div-block"></div>
                <div className="w-layout-grid grid-2">
                    <div className="job-item">
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <h3 className="heading-3">Senior UX Designer Role - Accra</h3>
                        <div className="meta">
                            <div className="location-details"><img src="images/map-pin-2.svg" alt="" />
                                <div className="timeing">Coconut Grove</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div><img src="images/time-1.svg" alt="" />
                                <div className="timeing">Full-time</div>
                            </div>
                        </div>
                        <div className="div-block"></div>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-17_1Rectangle-17.png" alt="" />
                            <div className="company">Stimuluz</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div className="job-item">
                        <div className="pill blue w-clearfix">
                            <div className="div-block-3 blue"></div>
                            <div className="text-block">development</div>
                        </div>
                        <h3 className="heading-3">Python Backend Engineer (Internship)</h3>
                        <div className="meta">
                            <div className="location-details"><img src="images/map-pin-2.svg" alt="" />
                                <div className="timeing">Kendall</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div><img src="images/time-1.svg" alt="" />
                                <div className="timeing">Full-time</div>
                            </div>
                        </div>
                        <div className="div-block"></div>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-26_1Rectangle-26.png" alt="" />
                            <div className="company">Qodehub</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div className="job-item">
                        <div className="pill red w-clearfix">
                            <div className="div-block-3 red"></div>
                            <div className="text-block">business development</div>
                        </div>
                        <h3 className="heading-3">Marketing &amp; Communications Manager</h3>
                        <div className="meta">
                            <div className="location-details"><img src="images/map-pin-2.svg" alt="" />
                                <div className="timeing">Brickell</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div><img src="images/time-1.svg" alt="" />
                                <div className="timeing">Full-time</div>
                            </div>
                        </div>
                        <div className="div-block"></div>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-32_1Rectangle-32.png" alt="" />
                            <div className="company">Gavac</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div id="w-node-b6a7ee7ab582-7baa406e" className="featured-job"><img src="images/featured.png" srcset="images/featured-p-500.png 500w, images/featured.png 700w" sizes="100vw" alt="" />
                        <div className="div-block-5"></div>
                        <h3 className="heading-3">Id dolore fugiat consectetur do sint qui irure sint esse</h3>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-17_1Rectangle-17.png" alt="" />
                            <div className="company">Stimuluz</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div className="job-item">
                        <div className="pill ylo w-clearfix">
                            <div className="div-block-3 yellow"></div>
                            <div className="text-block">marketing</div>
                        </div>
                        <h3 className="heading-3">Marketing &amp; Communications Manager</h3>
                        <div className="meta">
                            <div className="location-details"><img src="images/map-pin-2.svg" alt="" />
                                <div className="timeing">South Miami</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div><img src="images/time-1.svg" alt="" />
                                <div className="timeing">Full-time</div>
                            </div>
                        </div>
                        <div className="div-block"></div>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-20_1Rectangle-20.png" alt="" />
                            <div className="company">Slack</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div className="job-item">
                        <div className="pill w-clearfix">
                            <div className="div-block-3"></div>
                            <div className="text-block">design</div>
                        </div>
                        <h3 className="heading-3">Senior UX Designer Role - Accra</h3>
                        <div className="meta">
                            <div className="location-details"><img src="images/map-pin-2.svg" alt="" />
                                <div className="timeing">Miami Beach</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div><img src="images/time-1.svg" alt="" />
                                <div className="timeing">Full-time</div>
                            </div>
                        </div>
                        <div className="div-block"></div>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-29_1Rectangle-29.png" alt="" />
                            <div className="company">Empverify</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div className="job-item">
                        <div className="pill blue w-clearfix">
                            <div className="div-block-3 blue"></div>
                            <div className="text-block">development</div>
                        </div>
                        <h3 className="heading-3">Python Backend Engineer (Internship)</h3>
                        <div className="meta">
                            <div className="location-details"><img src="images/map-pin-2.svg" alt="" />
                                <div className="timeing">Wynwood</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div><img src="images/time-1.svg" alt="" />
                                <div className="timeing">Full-time</div>
                            </div>
                        </div>
                        <div className="div-block"></div>
                        <div className="company-excepts-and-date"><img src="images/Rectangle-26_1Rectangle-26.png" alt="" />
                            <div className="company">Mazumang</div>
                            <div className="time">1 hour ago</div>
                        </div>
                    </div>
                    <div className="div-block-6">
                        <div className="text-block-2">+300</div>
                        <p className="paragraph-2">Jobs on Miami.Works. <a href="#"><strong className="bold-text">Explore all jobs</strong></a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="jobs">
            <div className="w-container">
                <div className="div-block-7">
                    <h2 className="heading-2">Some companies we have helped build a better future</h2><a href="#" className="link">Explore all featured companies</a></div>
                <div className="div-block"></div>
                <div className="company-cards w-row">
                    <div className="w-col w-col-4"><img src="images/com-ff.jpg" srcset="images/com-ff-p-500.jpeg 500w, images/com-ff-p-800.jpeg 800w, images/com-ff-p-1080.jpeg 1080w, images/com-ff.jpg 1566w" sizes="100vw" alt="" className="image-3" />
                    </div>
                    <div className="column-2 w-col w-col-8">
                        <div className="w-layout-grid grid-3">
                            <div className="com-card"><img src="images/figma-wordmark-1.png" alt="" className="image-4" />
                                <p className="text-center-white">Est consequat in proident occaecat et nulla sint cillum aliqua laborum commodo.</p>
                            </div>
                            <div className="com-card airb"><img src="images/image-1.png" alt="" className="image-4" />
                                <p className="text-center-white">Est consequat in proident occaecat et nulla sint cillum aliqua laborum commodo.</p>
                            </div>
                            <div className="com-card green"><img src="images/image-2.png" alt="" className="image-4" />
                                <p className="text-center-white">Est consequat in proident occaecat et nulla sint cillum aliqua laborum commodo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jobs">
            <div className="w-container">
                <div className="div-block-7">
                    <h2 className="heading-2">Find a <br />second home</h2>
                    <p className="paragraph-2">New jobs daily. <a href="#"><strong className="bold-text">Explore all companies</strong></a></p>
                </div>
                <div className="div-block"></div>
                <div className="w-layout-grid grid-4">
                    <div className="job-item"><img src="images/Rectangle-47.jpg" alt="" className="company-image" />
                        <h3 className="heading-3">Stimuluz.io</h3>
                        <p className="p">Elit dolore proident aute eu labore. Elit dolore proident aute eu labore.</p>
                        <div className="div-block"></div>
                        <div className="meta">
                            <div className="location-details">
                                <div className="timeing">Design - Miami</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div>
                                <div className="timeing blue">2 jobs</div>
                            </div>
                        </div>
                    </div>
                    <div className="job-item"><img src="images/Rectangle-43.jpg" alt="" className="company-image" />
                        <h3 className="heading-3">Bronxe LLC</h3>
                        <p className="p">Elit dolore proident aute eu labore. Elit dolore proident aute eu labore.</p>
                        <div className="div-block"></div>
                        <div className="meta">
                            <div className="location-details">
                                <div className="timeing">Design - Miami</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div>
                                <div className="timeing blue">2 jobs</div>
                            </div>
                        </div>
                    </div>
                    <div className="job-item"><img src="images/Rectangle-51.jpg" alt="" className="company-image" />
                        <h3 className="heading-3">Dwellys.io</h3>
                        <p className="p">Elit dolore proident aute eu labore. Elit dolore proident aute eu labore.</p>
                        <div className="div-block"></div>
                        <div className="meta">
                            <div className="location-details">
                                <div className="timeing">Design - Ghana</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div>
                                <div className="timeing blue">2 jobs</div>
                            </div>
                        </div>
                    </div>
                    <div className="job-item"><img src="images/Rectangle-41.jpg" alt="" className="company-image" />
                        <h3 className="heading-3">Capsella</h3>
                        <p className="p">Elit dolore proident aute eu labore. Elit dolore proident aute eu labore.</p>
                        <div className="div-block"></div>
                        <div className="meta">
                            <div className="location-details">
                                <div className="timeing">Design - Miami</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div>
                                <div className="timeing blue">2 jobs</div>
                            </div>
                        </div>
                    </div>
                    <div className="job-item"><img src="images/Rectangle-45.jpg" alt="" className="company-image" />
                        <h3 className="heading-3">Google</h3>
                        <p className="p">Elit dolore proident aute eu labore. Elit dolore proident aute eu labore.</p>
                        <div className="div-block"></div>
                        <div className="meta">
                            <div className="location-details">
                                <div className="timeing">Design - Miami</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div>
                                <div className="timeing blue">2 jobs</div>
                            </div>
                        </div>
                    </div>
                    <div className="job-item"><img src="images/Rectangle-49.jpg" alt="" className="company-image" />
                        <h3 className="heading-3">Huawei</h3>
                        <p className="p">Elit dolore proident aute eu labore. Elit dolore proident aute eu labore.</p>
                        <div className="div-block"></div>
                        <div className="meta">
                            <div className="location-details">
                                <div className="timeing">Design - Miami</div>
                            </div>
                            <div className="location-details">
                                <div className="div-block-4"></div>
                                <div className="timeing blue">2 jobs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="w-container">
                <div className="div-block-8">
                    <h1 className="heading foote">Miami <strong className="bold-text-2">Works</strong></h1><a href="#" className="button w-button">Search for Jobs</a>
                </div>
                <div className="credits"><img src="images/footer-logo.svg" alt="" className="image-6" />
                    <div>
                        <a href="#" className="footer-cred">About</a><a href="#" className="footer-cred">Privacy &amp; Legal</a><a href="#" className="footer-cred">Partners</a><a href="#" className="footer-cred">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
