import React from "react"
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
const JobSearch = ({ jobs, skills, width, breakpoint }) => {
    const [tags, setTags] = React.useState([]);
    const container = React.useRef(null);
    React.useEffect(() => {
        const onScroll = (e) => {
            const element = e.target;
            if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
                if(scrollEnd) scrollEnd();
            }
        }
        const horizontalContainer = ReactDOM.findDOMNode(container.current);
        horizontalContainer.addEventListener("scroll", onScroll);
        
        return () => horizontalContainer.removeEventListener("scroll", onScroll);
    }, []);
  
    let _jobs = jobs.filter(j => tags.length === 0 || tags.includes(j.skill_pathway)).slice(0, 15);
    if (isMobile) {
        return <ScrollContainer className="scroll-container h-scroll" ref={container}>
            {_jobs.length === 0 && <Loading className="loading" />}
            <div style={{ width: jobs.length * 344 }}>
                {_jobs.map(j =>
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
        </ScrollContainer>
    } return <>
        <div style={{paddingLeft: 215}}>
            {_jobs.length === 0 && <Loading className="loading" />}
            <div className="grid">
                {_jobs.slice(0, 8).map(j =>
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
                <div className="exJo">
                    <p style={{fontSize: 66, margin: 0}}>{'300' + String.fromCharCode(43) }</p>
                    <p style={{fontSize: 26, margin: 0}}>jobs on MiamiTech.Works</p>
                    <button type="button" class="btn btn-primary">Explore jobs</button>
                </div>
            </div>
        </div>
    </>

}

export default JobSearch;