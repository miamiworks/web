import React from "react"
import EventsCard from "../EventsCard"
import ScrollContainer from 'react-indiana-drag-scroll'
import { isMobile } from "react-device-detect"
import "./style.scss"

const Workshops = ({ events, skills, width, breakpoint }) => {
    // const [currentIndex, setSlide] = React.useState(3);
    return <ScrollContainer className="scroll-container h-scroll">
        <div>
            { events.map(ev => <EventsCard
                    ev={ev.rsvp_url}
                    date={ev.event_date}
                    time={ev.event_start_time}
                    eventName={ev.event_title}
                    speakerName={ev.speaker_name}
                    eventImage={ev.event_img_file_path}
                    companyImage={ev.company_logo_file_path}
                    speakerPosition={ev.speaker_job_title.toString()}
                    url={ev.rsvp_url}
                    comingFrom={ev.event_organizer}
                    />)
                }
        </div>
    </ScrollContainer>
}

export default Workshops;