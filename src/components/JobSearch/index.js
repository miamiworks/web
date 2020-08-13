import React from "react"
import JobCard from "../JobCard"
import SkillToggle from "../SkillToggle"
import {Button, Badge} from "react-bootstrap"

import "./style.scss"

const JobSearch = ({ jobs, skills }) => {
    const [ tags, setTags ] = React.useState([]);
    let _jobs = jobs.filter(j => tags.length === 0 || tags.includes(j.skill_pathway)).slice(0,15);
    console.log("Tags to filter", tags);
    console.log("Filtered jobs", _jobs);
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
        <div className="h-scroll">
            <div className="h-scroll-inner d-flex flex-row flex-nowrap">
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
            </div>
        </div>
    </>;
}
export default JobSearch;