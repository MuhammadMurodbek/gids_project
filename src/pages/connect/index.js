import React, { useState, useEffect } from 'react';
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
import { mediaTextField, mediaTextFieldSec } from "../../custom/global.media.variables"
import Modal from 'react-awesome-modal';
import { useTranslation } from 'react-i18next';
import { postResponse } from "../../hooks/response_get"
import toast, { Toaster } from 'react-hot-toast';
import Modal1 from '../fill.application/modal';


export default function Index() {
    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        subject: ''
    }
    const [contact, setContact] = useState(initialState)
    const [response, setResponse] = useState({ success: '', error: '', loading: false })
    const { first_name, last_name, phone_number, email, subject } = contact
    const { t } = useTranslation()



    const [state, setState] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        localStorage.setItem('appNoToken', JSON.stringify(state))
        setIsModalVisible(false);
        // history.push('/auth')
        window.location.href = '/auth'
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function openModal() {
        setState(true);
    }
    function closeModal() {
        setState(false)
    }
    const handleChange = (e) => {
        setContact(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email,
            subject: subject
        }
        postResponse("/api/posts/contact/", payload, setResponse)
    }

    useEffect(() => {
        if (response?.success !== '') {
            // toast.success("So'rovingiz muofaqiyatli jo'natildi")
            openModal()
            setTimeout(() => {
                setContact(initialState)
            }, 300)
        } else if (response?.error !== '') {
            // toast.error("So'rovingiz jo'natilmadi !!!")
            showModal()
        }
    }, [response])

    return (
        <div>
            <Wrapper>
                {/* <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="40px" bottom="50px">
                    {t("connect.contact")}
                </TextTitle> */}
                <Grid className='topconect' container alignItems="center" spacing={1} diracti>
                    <Grid item xs={12} md={5} >
                        <h3 className="grid1">{t("connect.Kontaktlarimiz")}</h3>
                        <p> <b>Tel:</b> +99893 596-92-20</p>
                        <p> <b>E-mail: </b>  info@gits.uz</p>
                        <p> <b>Manzil: </b>Nukus ko'chasi, 86/3, Toshkent, 100015, O'zbekiston</p>
                        <b>Ish soatlari:</b>
                        <p className='paragrefd'> Dushanba - Juma</p>
                        <p className='paragrefd'> (09:00 - 18:00) </p>
                        <p className='paragrefd'> Shanba </p>
                        <p className='paragrefd'> (10:00 - 17:00) </p>
                        <div className='paddingtop'>
                            <img className="icons" src={imgtg} alt="name" />
                            <img className="icons" src={imgfac} alt="facebook" />
                            <img className="icons" src={imginsta} alt="insta" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} className="grid2" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d5995.835629564712!2d69.272551!3d41.2888931!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38ae8b1e6c899caf%3A0xbefcfa0fa695105!2zT09PICJUUkFWRUwgQ0FSUyIgODYsINC60L7RgNC_LiAzIE51a3VzIFN0cmVldCBUYXNoa2VudCAxMDAwMTU!3m2!1d41.288893099999996!2d69.27255099999999!5e0!3m2!1sru!2s!4v1643979461824!5m2!1sru!2s" width="650" height="470"     ></iframe>

                    </Grid>
                </Grid>

                <form onSubmit={handleSubmit}>
                    <TextTitle
                        {...mediaTextField} {...mediaTextFieldSec} top="50px" bottom="40px">
                        {t("connect.savol")}
                    </TextTitle>

                    <Grid container spacing={1} diraction justifyContent="center">
                        <Grid item xs={12} md={4} sm={12}>
                            <InputLabel
                                name="first_name"
                                value={first_name}
                                onChange={handleChange}
                                label={t("connect.ism")}
                                width="100%"
                                required
                                placeholder={t("connect.isimPlac")} />
                        </Grid>
                        <Grid item xs={12} md={4} sm={12}>
                            <InputLabel
                                name="last_name"
                                value={last_name}
                                onChange={handleChange}
                                label={t("connect.familya")}
                                width="100%"
                                required
                                placeholder={t("connect.familyaPlac")} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} diraction justifyContent="center">
                        <Grid item xs={12} md={4} sm={12} >
                            <InputLabel
                                name="email"
                                value={email}
                                onChange={handleChange}
                                label={t("connect.Email")}
                                width="100%"
                                required
                                placeholder={t("connect.emailPlac")} />
                        </Grid>
                        <Grid item xs={12} md={4} sm={12} >
                            <InputLabel
                                name="phone_number"
                                value={phone_number}
                                onChange={handleChange}
                                label={t("connect.telefon")}
                                width="100%"
                                required
                                placeholder={t("connect.telefonPlac")} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} direction justifyContent="center">
                        <Grid item xs={12} md={8} sm={12}>
                            <TextAreaComp
                                name="subject"
                                required
                                value={subject}
                                onChange={handleChange}
                                label="Savol" width="100%" height="170px"
                                placeholder={t("connect.text")} />
                        </Grid>
                    </Grid>
                    <Grid container className="grid_btn" justifyContent="flex-end" xs={12} md={10}  >
                        <Button className="btnC" type="submit">
                            {t("connect.jonatish")}
                        </Button>
                    </Grid>
                </form>
                <section>
                    <Modal
                        visible={state}
                        width="700"
                        height="200"
                        effect="fadeInUp"
                        onClickAway={closeModal}>
                        <div className="modaldiv">
                            <div className="closebtn">  <CloseIcon className="pointx" onClick={closeModal} /></div>
                            <h1 className="modaltitle">Savolingiz Muvaffaqiyatli qabul qilindi</h1>
                            <p>Qisqa vaqt ichida o‘rganib chiqib, tez orada javob berishga harakat qilamiz.</p>
                        </div>
                    </Modal>
                </section>
                <>
                    <Modal1 isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} type={"So'rov"} />
                </>
            </Wrapper>
        </div>
    )
}
