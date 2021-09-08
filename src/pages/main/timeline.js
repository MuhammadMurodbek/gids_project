import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import "react-vertical-timeline-component/style.min.css";
import ImageContainer from "../../components/img.container"
import TimeLine_1 from "../../assets/img/timeline/timeline_1.svg"
import TimeLine_2 from "../../assets/img/timeline/timeline_2.svg"
import TimeLine_3 from "../../assets/img/timeline/timeline_3.svg"
import TimeLine_4 from "../../assets/img/timeline/timeline_4.svg"

export default function App() {
  return (
    <div className="timeline-part">
      <div className="timeline-title">Bu qanday ishlaydi</div>
      <VerticalTimeline className="timeline-container">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#fff" }}
          iconStyle={{ background: "rgb(20, 20, 20)", color: "#fff", marginTop: "200px"}}
          icon={<AssignmentTurnedInIcon />}
        >
            <div>
                <ImageContainer width="400px" src={TimeLine_1}/>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   date="2010 - 2011"
          iconStyle={{ background: "rgb(20, 20, 20)", color: "#fff", marginTop: "200px" }}
          icon={<AttachFileIcon />}
        >
            <div>
                <ImageContainer width="400px" src={TimeLine_2}/>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   date="2008 - 2010"
          iconStyle={{ background: "rgb(20,20,20)", color: "#fff", marginTop: "200px" }}
          icon={<PhoneForwardedIcon />}
        >
            <div>
                <ImageContainer width="400px" src={TimeLine_3}/>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   date="2006 - 2008"
          iconStyle={{ background: "rgb(20,20,20)", color: "#fff", marginTop: "200px" }}
          icon={<BusinessCenterIcon />}
        >
            <div>
                <ImageContainer width="400px" src={TimeLine_4}/>
            </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
