import React from "react"
import EventsCard from "../EventsCard"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { isMobile } from "react-device-detect"
import "./style.scss"

const Workshops = ({ events, skills, width, breakpoint }) => {
    const [currentIndex, setSlide] = React.useState(0);
    return <>
        <div className="carousel-outer">
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
                width={2000}
                centerSlidePercentage={25}
                selectedItem={currentIndex}
            >
                    { events.map(ev => <EventsCard
                            date={ev.event_date}
                            time={ev.event_start_time}
                            eventName={ev.event_title}
                            speakerName={ev.speaker_name}
                            eventImage={ev.event_img_file_path}
                            companyImage={ev.company_logo_file_path}
                            speakerPosition={ev.speaker_job_title}
                            comingFrom={ev.event_organizer}
                        />)
                    }
                </Carousel>
            </div>
    </>;
}

export default Workshops;