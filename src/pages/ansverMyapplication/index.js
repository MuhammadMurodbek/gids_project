import React, { useState } from 'react'
import Myapplication from '../../components/organism/fullRequest';
import Button from "../../components/atom/button";
import { Wrapper } from './style';
import { Grid } from '@material-ui/core';
import ImgContainer from "../../components/molecules/img.container"
import imggid from '../../assets/img/answerMy-application/imggid.svg'
import star from '../../assets/img/answerMy-application/star.svg'
import sms from '../../assets/img/answerMy-application/sms.svg'
import { mediaBtn } from "../../custom/global.media.variables";
import Spinner from "../../components/atom/loading.spinner.line"
import moment from "moment"
export const mediaImage = {
    m_width: "960px",
    m_m_width: "280px",
    m_m_text_align: "center",
}
export default function Index () {
    const [ applicationData, setApplicationData ] = useState( { success: '', error: '', loading: false } )
    return (
        <Wrapper>
            <Myapplication
                btnText="Arizani taxrirlash"
                setApplicationData={ setApplicationData }
                applicationData={ applicationData }
            />
            {
                applicationData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> :
                    <>
                        <div className="btnBack">
                            <Button type="outlined" >
                                Arizani bekor qilish
                            </Button>
                        </div>
                        <br /><br />
                        <div className="title-answers">
                            {
                                applicationData?.success?.data?.replies.length > 0 ?
                                    <span>Quyidagi arizangizga javob qaytargan Gid/Tarjimonlardan birini tanlang va u bilan bog’laning</span> :
                                    <span>Ushbu arizangizga javoblar mavjud emas</span>
                            }
                        </div>
                        {
                            applicationData?.success?.data?.replies.length > 0 ?
                                applicationData?.success?.data?.replies?.map( ( prev, index ) => (
                                    <div className="answers" key={ index }>
                                        <Grid container spacing={ 1 } direction="row" justifyContent="center"
                                            className="grid-container">
                                            <Grid item xs={ 12 } md={ 1 } className="item">
                                                <ImgContainer { ...mediaImage } src={ prev?.replier_image } />
                                            </Grid>
                                            <Grid item xs={ 12 } md={ 11 } className="item">
                                                <div className="feedback-div">
                                                    <h4><b>{ prev?.replier_data?.full_name?.first_name + " " + prev?.replier_data?.full_name?.last_name }</b></h4>
                                                    <div className="feedback">
                                                        <div> <ImgContainer src={ star } /> </div>
                                                        <div style={ { fontSize: '0.85rem' } }> <span>10.0/10</span></div>
                                                        <div className="imgss"> <ImgContainer src={ sms } /></div>
                                                        <div>
                                                            <span style={ { fontSize: '0.85rem' } }>{ moment( prev?.created_at ).format( 'DD.MM.YYYY' ) || '00:00:00' }</span>&nbsp;&nbsp;
                                                            <span style={ { fontSize: '0.77rem' } }>{ moment( prev?.created_at ).format( 'HH:mm' ) || '00:00' }</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tarjimon">
                                                    <span>33 yosh</span>|
                                                    <span style={ { textTransform: 'capitalize' } }>{ prev?.replier_role || "Ma'lumot kiritilmagan" }</span>
                                                </div>
                                                <div className="feedbeeck-text">
                                                    { prev?.reply || "Ma'lumot kiritilmagan" }
                                                </div>
                                                <div className="btn-groups">
                                                    <Button type="outlined">O’chirish</Button>
                                                    <Button className="btn-Pview">Profilni ko’rish</Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ) 
                            ) : null
                        }
                    </>
            }

        </Wrapper>
    )
}
