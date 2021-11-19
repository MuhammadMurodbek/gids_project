import React, {useState} from 'react';
import { Wrapper } from './index.style';
import { TextTitle } from '../../styles/textTitle/index.style';
import { Grid } from '@material-ui/core';
import imgtg from '../../assets/img/connect/icontg.svg';
import imgfac from '../../assets/img/connect/iconfac.svg';
import imginsta from '../../assets/img/connect/insta.svg';
import InputLabel from '../../components/molecules/input.labeled';
import TextAreaComp from '../../components/atom/textarea'
import Button from "../../components/atom/button";
import CloseIcon from '@material-ui/icons/Close';
import {mediaTextField, mediaTextFieldSec} from "../../custom/global.media.variables"
import Modal from 'react-awesome-modal';
import { useTranslation } from 'react-i18next';

export default function Index() {

    const {t}  =useTranslation()

    const [state, setState] = useState(false);
    function openModal() {
        setState(true);
    }
    function closeModal() {
        setState(false)
    }

    return (
        <div>
            <Wrapper>
                <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="100px" bottom="100px">
                  {t("connect.contact")}
                </TextTitle>
                <Grid container alignItems="center" spacing={1} diracti>
                    <Grid item xs={12} md={5} >
                        <h3 className="grid1">{t("connect.Kontaktlarimiz")}</h3>
                        <p>+998 90 123 45 67</p>
                        <p>salom@gits.uz</p>
                        <p>{t("connect.manzil")} </p>
                        <div>
                            <img className="icons" src={imgtg} alt="name" />
                            <img className="icons" src={imgfac} alt="facebook" />
                            <img className="icons" src={imginsta} alt="insta" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} className="grid2" >
                        <iframe title="myFrame" className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50263675497!2d69.13928277818499!3d41.28251254609851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1631513329689!5m2!1sru!2s" width="690" height="530"     ></iframe>
                    </Grid>
                </Grid>
                
                <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="100px" bottom="100px">
                    {t("connect.savol")}
                </TextTitle>

                <Grid container spacing={1} diraction justifyContent="center">
                    <Grid item xs={12} md={4} sm={12}>
                        <InputLabel label={t("connect.ism")} width="10  0%"
                         placeholder={t("connect.isimPlac")} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                        <InputLabel label={t("connect.familya")} width="100%"
                         placeholder={t("connect.familyaPlac")}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} diraction justifyContent="center">
                    <Grid item xs={12} md={4} sm={12} >
                        <InputLabel label={t("connect.Email")} width="100%" 
                        placeholder={t("connect.emailPlac")} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={12} >
                        <InputLabel label={t("connect.telefon")} width="100%" 
                        placeholder={t("connect.telefonPlac")} />
                    </Grid>
                </Grid>

                <Grid container spacing={1} direction justifyContent="center">
                    <Grid item xs={12} md={8} sm={12}>
                        <TextAreaComp label="Savol" width="100%" height="170px" 
                        placeholder= {t("connect.text")} />
                    </Grid>
                </Grid>
                <Grid container className="grid_btn" justifyContent="flex-end" xs={12} md={10}  >
                    <Button className="btnC" type="button" onClick={openModal}>
                    {t("connect.jonatish")}
                    </Button>
                </Grid>

                <section>
                    <Modal 
                    visible={state}
                     width="700"
                     height="200"
                     effect="fadeInUp" 
                       onClickAway={closeModal}>
                        <div className="modaldiv">
                           <div className="closebtn">  <CloseIcon className="pointx" onClick={ closeModal} /></div>
                            <h1 className="modaltitle">Savolingiz Muvaffaqiyatli qabul qilindi</h1>
                            <p>Qisqa vaqt ichida o‘rganib chiqib, tez orada javob berishga harakat qilamiz.</p>
                           
                        </div>
                    </Modal>
                </section>

            </Wrapper>
        </div>
    )
}
