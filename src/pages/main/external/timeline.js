import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import AttachFileIcon from '@material-ui/icons/AttachFile'
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import "react-vertical-timeline-component/style.min.css";
import ImageContainer from "../../../components/molecules/img.container"
import TimeLine_1 from "../../../assets/img/timeline/timeline_1.svg"
import TimeLine_2 from "../../../assets/img/timeline/timeline_2.svg"
import TimeLine_3 from "../../../assets/img/timeline/timeline_3.svg"
import TimeLine_4 from "../../../assets/img/timeline/timeline_4.svg"
import {TimeLineWrapper} from "./slider.style"
import { useTranslation } from "react-i18next";

export default function App() {

  const {t} = useTranslation()

  return (
    <TimeLineWrapper>
      <div className="timeline-part">
        <div className="timeline-title title"> {t("main.ishlashi")} </div>
        <br/>
        
        <VerticalTimeline className="timeline-container">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#000" }}
            iconStyle={{ background: "rgb(20, 20, 20)", color: "#fff", marginTop: "125px"}}
            icon={<AssignmentTurnedInIcon />}
          >
              <div className="wrapper">
                  <ImageContainer width="200px" src={TimeLine_1}/>
                  <div className="wrapper-text"> {t("main.royhatdanOtasiz")} </div>
                  <p> {t("main.text02")} </p>
              </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(20, 20, 20)", color: "#fff", marginTop: "125px" }}
            icon={<AttachFileIcon />}
          >
              <div className="wrapper">
                  <ImageContainer width="200px" src={TimeLine_2}/>
                  <div className="wrapper-text"> {t("main.sorov")} </div>
                  <p> {t("main.text03")} </p>
              </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(20,20,20)", color: "#fff", marginTop: "125px" }}
            icon={<PhoneForwardedIcon />}
          >
              <div className="wrapper">
                  <ImageContainer width="250px" src={TimeLine_3}/>
                  <div className="wrapper-text"> {t("main.aloqaga")}</div>
                  <p> {t("main.text04")} </p>
                  
              </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(20,20,20)", color: "#fff", marginTop: "125px" }}
            icon={<BusinessCenterIcon />}
          >
              <div className="wrapper">
                  <ImageContainer width="250px" src={TimeLine_4}/>
                  <div className="wrapper-text"> {t("main.ishBoshlanadi")}   </div>
                  <p> {t("main.text05")}</p>
              </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </TimeLineWrapper>
  );
}
