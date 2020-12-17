import React from "react"
import ReactDOM from "react-dom"
import EventsCard from "../EventsCard"
import ScrollContainer from 'react-indiana-drag-scroll'
import { isMobile } from "react-device-detect"
import Loading from "../../images/loading.svg"
import "./style.scss"

const Workshops = ({ events, skills, width, breakpoint, scrollEnd, loading }) => {
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
    // const [currentIndex, setSlide] = React.useState(3);
    return <ScrollContainer className="scroll-container h-scroll" ref={container}>
        { loading && <Loading className="loading" />}
        <div style={{ width: events.length * 370 }}>
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