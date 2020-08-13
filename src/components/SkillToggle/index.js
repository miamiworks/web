import React from "react"
import {Button, Badge} from "react-bootstrap"
import "./style.scss"

const SkillToggle = ({ active, skill, onClick }) => {
    if(!skill) return "Loading...";
    return <Button variant="info" className={`skill-toggle mr-2 ${active ? "active" : "innactive"}`}
        style={{ 
            background: active ? `#${skill.skill_pathway_circle_color}` : `#${skill.skill_pathway_background_color}`
        }}
        onClick={() => onClick && onClick(skill)}
        >
        <Badge 
            style={{ 
                background: active ? `#${skill.skill_pathway_background_color}` : `#${skill.skill_pathway_circle_color}`
            }} 
            pill className="buttonGreen">&nbsp;</Badge> 
        {skill.skill_pathway_name}                            
    </Button>  
}

export default SkillToggle;