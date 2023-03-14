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
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            British International School Ho Chi Minh City, Vietnam
          </h3>
          <p> <b>Activities: </b> 
            President of Robotics & Coding Club; 
            Social Media Marketer and Promoter of Uber Global Hackathon; 
            Software Developer of Rental Home Booking System; Boxing Coach</p>

          <p>
            <b>IGCSE Grades: </b>
              4 A*, 
              3 A, 
              2 B
          </p>
          <p>
            <b>iB Predicted Grades: </b>
            <li>
              Computer Science HL:  
              <span>
                 6
              </span>
            </li>
            <li>
              Economics HL:  
              <span>
                 6
              </span>
            </li>
            <li>
              Business Management HL:  
              <span>
                 6
              </span>
            </li>
            <li>
              English A Language and Literature SL:  
              <span>
                 5
              </span>
            </li>
            <li>
              Mathematics Analysis and Approaches SL:  
              <span>
                 5
              </span>
            </li>
            <li>
              Spanish ab initio SL:  
              <span>
                 5
              </span>
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2027"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            USA
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
