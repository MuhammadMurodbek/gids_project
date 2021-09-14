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

export default function App() {
  return (
    <div className="timeline-part">
      <div className="timeline-title">Bu qanday ishlaydi</div>
      <VerticalTimeline className="timeline-container">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          iconStyle={{ background: "rgb(20, 20, 20)", color: "#fff", marginTop: "125px"}}
          icon={<AssignmentTurnedInIcon />}
        >
            <div className="wrapper">
                <ImageContainer width="200px" src={TimeLine_1}/>
                <div className="wrapper-text">Ro'yxatdan o'tasiz</div>
                <p>Avvalo platformadan Git/Tarjimon yokida Mijoz sifatida ro’yhattan o’tasiz.</p>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(20, 20, 20)", color: "#fff", marginTop: "125px" }}
          icon={<AttachFileIcon />}
        >
            <div className="wrapper">
                <ImageContainer width="200px" src={TimeLine_2}/>
                <div className="wrapper-text">So'rov qoldirasiz</div>
                <p>Mijoz so‘rov qoldirishi mumkin yokida o‘zi Git/Tarjimoni tanlashi mumkin.</p>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(20,20,20)", color: "#fff", marginTop: "125px" }}
          icon={<PhoneForwardedIcon />}
        >
            <div className="wrapper">
                <ImageContainer width="250px" src={TimeLine_3}/>
                <div className="wrapper-text">Aloqaga chiqiladi</div>
                <p>Tarjimon/Git tanlangandan so’ng, aloqaga chiqib kelishib olinadi va ish boshlanadi.</p>
                
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(20,20,20)", color: "#fff", marginTop: "125px" }}
          icon={<BusinessCenterIcon />}
        >
            <div className="wrapper">
                <ImageContainer width="250px" src={TimeLine_4}/>
                <div className="wrapper-text">Ish boshlanadi</div>
                <p>Aloqa chiqib ish kelishib olgningizdan so’ng ishni boshlaysiz</p>
            </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
