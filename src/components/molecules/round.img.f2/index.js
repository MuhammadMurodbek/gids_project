import React, { useState } from 'react'
import { WrapperRoundImage } from "./style"
import ImageContainer from "../img.container"
import playBtn from "../../../assets/img/choosegid/playbtn.svg"

import Modal from 'react-awesome-modal';
import ReactPlayer from 'react-player'
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from "react-i18next"
import Button from "../../../components/atom/button";
import { Image } from "antd"
const Index = (props) => {
    const {t} = useTranslation()
    const {data} = props
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
        m_btn_top: "0",
        m_btn_right: "-20px",
    }
    const { src, width, height, radius, role } = props
    // console.log(role)

    // console.log(  "======" + props.data )
    return (
        <WrapperRoundImage {...mediaBtn} {...mediaWrapper} width={width} height={height} radius={radius}  className="AccImgBlock">
            <Image
                width={100}
                src={src}
                style={{ borderRadius: '50%' }}
            />  

            <button onClick={openModal}>
                {
                    role !=='writer' && data?.video &&
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
                            data?.video ?
                                <ReactPlayer
                                    className="videoPlayer"
                                    height="500px"
                                    width="1000px"
                                    controls
                                    playing={state}
                                    url={data?.video} /> : t("GidPk.videoYuklanmagan")
                        }
                    </div>
                </Modal>
            </section>


        </WrapperRoundImage>
    )
}

export default Index
