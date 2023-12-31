import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon onClick={event =>  window.location.href='https://www.nordangliaeducation.com/bis-hcmc'}/>}
        >
          <h3 className="vertical-timeline-element-title">
            British International School Ho Chi Minh City, Vietnam
          </h3>
          <p> <b>Activities: </b> 
            President of Robotics & Coding Club; 
            Software Developer of Rental Home Booking System; 
            Committee Organizer of Learning Technology Committee </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2027"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            The Pennsylvania State University - University Park, PA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Computer Science
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
