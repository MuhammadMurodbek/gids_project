import React, { useState } from 'react'
import { WrapperRoundImage } from "./style"
import ImageContainer from "../img.container"
import playBtn from "../../../assets/img/choosegid/playbtn.svg"

import Modal from 'react-awesome-modal';
import ReactPlayer from 'react-player'
import CloseIcon from '@material-ui/icons/Close';
import Button from "../../../components/atom/button";
import { Image } from "antd"
const Index = (props) => {

    const [state, setState] = useState(false);
    function openModal() {
        setState(true);

    }
    function closeModal() {
        setState(false)
    }

    const media = {
        m_width: "600px",
        m_m_width: "80%",
        m_m_text_align: "right",
    }
    const mediaWrapper = {
        m_width: "600px",
        m_m_width: "100%",
    }
    const imageButton = {
        m_width: "600px",
        m_m_width: "50px",
    }
    const mediaBtn = {
        m_btn_width: "600px",
        m_btn_top: "-50px",
        m_btn_right: "20%",
    }
    const { src, width, height, radius, role } = props
    // console.log(role)
    return (
        <WrapperRoundImage {...mediaBtn} {...mediaWrapper} width={width} height={height} radius={radius}>
            {/* <ImageContainer {...media} src={src} width="100%" height="100%" round="50%" /> */}
            <Image
                width={100}
                src={src}
                style={{ borderRadius: '50%' }}
            />  
            <button onClick={openModal}>
                {
                    role !=='writer' &&
                    <ImageContainer {...imageButton} src={playBtn} width="30px" height="30px" />
                }
            </button>
            

            <section>
                <Modal
                    visible={state}
                    width="1000"
                    height="500"
                    effect="fadeInUp"
                    onClickAway={closeModal}>
                    <div className="modaldiv">
                        <div className="closebtn">
                            <CloseIcon className="pointx" onClick={closeModal} />
                        </div>
                        {
                            props?.data?.video ?
                                <ReactPlayer
                                    height="500px"
                                    width="1000px"
                                    controls
                                    playing={state}
                                    url={props?.data?.video} /> : "Video yuklanmagan"
                        }
                    </div>
                </Modal>
            </section>


        </WrapperRoundImage>
    )
}

export default Index
