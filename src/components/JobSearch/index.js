import React from "react"
import {Link} from "gatsby"
import ReactDOM from "react-dom"
import JobCard from "../JobCard"
import SkillToggle from "../SkillToggle"
import { Button, Badge } from "react-bootstrap"
import ScrollContainer from 'react-indiana-drag-scroll'
import { isMobile } from "react-device-detect"
import Loading from "../../images/loading.svg"
import "./style.scss"

let sizes = {
    xs: {
        cardWidth: "350px",
        showCount: 1,
    },
    sm: {
        cardWidth: "576px",
        showCount: 2,
    },
    md: {
        cardWidth: "768px",
        showCount: 2,
    },
    lg: {
        cardWidth: "992px",
        showCount: 3,
    },
    xl: {
        cardWidth: "1200px",
        showCount: 4,
    }
}
const JobSearch = ({ jobs, skills, width, breakpoint, scrollEnd }) => {
    const [tags, setTags] = React.useState([]);
    const container = React.useRef(null);
    React.useEffect(() => {
        const horizontalContainer = ReactDOM.findDOMNode(container.current);
        if(horizontalContainer){
            const onScroll = (e) => {
                const element = e.target;
                if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
                    if(scrollEnd) scrollEnd();
                }
            }
            horizontalContainer.addEventListener("scroll", onScroll);
            
            return () => horizontalContainer.removeEventListener("scroll", onScroll);
        }
    }, []);
  
    let _jobs = jobs.filter(j => tags.length === 0 || tags.includes(j.skill_pathway)).slice(0, 15);
    if (isMobile) {
        return <ScrollContainer className="scroll-container h-scroll" ref={container}>
            {_jobs.length === 0 && <Loading className="loading" />}
            <div style={{ width: jobs.length * 344 }}>
                {_jobs.map(j =>
                    <JobCard
                        jobType="product"
                        className="mr-4"
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
        </ScrollContainer>
    } 
    
    return <div className="container">
        {_jobs.length === 0 && <Loading className="loading" />}
        <div className="grid">
            {_jobs.slice(0, 8).map(j =>
                <JobCard
                    jobType="product"
                    className="w-100"
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
            <div className="exJo more-jobs p-4">
                <p className="h1 mb-0">{'300' + String.fromCharCode(43) }</p>
                <p className="mt-0">jobs on MiamiTech.Works</p>
                <Link to="/jobs" class="btn btn-primary btn-lg">Explore more jobs</Link>
            </div>
        </div>
    </div>

}

export default JobSearch;