import React from "react"
import JobCard from "../JobCard"
import SkillToggle from "../SkillToggle"
import {Button, Badge} from "react-bootstrap"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { isMobile } from "react-device-detect"
import "./style.scss"

const JobSearch = ({ jobs, skills, showCount }) => {
    const [ tags, setTags ] = React.useState([]);
    const [currentIndex, setSlide] = React.useState(0);
    let _jobs = jobs.filter(j => tags.length === 0 || tags.includes(j.skill_pathway)).slice(0,15);
    console.log("Show count: ", showCount);
    return <>
        <div className="h-scroll">
            <div>
            { skills.map(skill => {
                const active = tags.find(s => s === skill.skill_pathway_name)
                return <SkillToggle
                active={active}
                skill={skill}
                onClick={() => {
                    if(active) setTags(tags.filter(s => s !== skill.skill_pathway_name))
                    else setTags(tags.concat([skill.skill_pathway_name]))
                }}
                />
            })}
            </div>
        </div>
      <Carousel
        className="mt-5"
        centerMode
        showArrows={true}
        showStatus={false}
        swipeScrollTolerance={10}
        interval={3000}
        transitionTime={150}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        centerSlidePercentage={100 / (showCount+1)}
        selectedItem={currentIndex}
      >
      {/* // currentIndex + 3 to jump three slides forward */}
            { _jobs.map(j => 
                <JobCard 
                    jobType="product" 
                    jobTitle={j.job_title} 
                    CompanyLogo={j.company_logo} 
                    companyName={j.company_posting} 
                    skill={{
                        skill_pathway_name: j.skill_pathway,
                        skill_pathway_background_color: j.skill_pathway_background_color,
                        skill_pathway_circle_color: j.skill_pathway_circle_color
                    }} 
                    url={j.job_url} 
                    date={j.posted_date}
                />
            )}
        </Carousel>
    </>;
}

export default JobSearch;