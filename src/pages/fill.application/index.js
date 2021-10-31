import { Grid } from '@material-ui/core'
import React,{useState} from 'react'
import { Container } from '../../styles/container/index.style'
import { Wrapper, shadow, Title } from "./style"
import RadioGroup from "../../components/molecules/radio.group.f9"
import Select from "../../components/atom/select"
import Calendar from "../../components/atom/calendar"
import Input from "../../components/atom/input.second"
import TextArea from "../../components/atom/textAreaCom"
import DoubleCheck from "../../components/molecules/double.check"
import Checkbox from "../../components/atom/checkbox"
import Button from "../../components/atom/button"
import { TextTitle } from '../../styles/textTitle/index.style'
import CloseIcon from '@material-ui/icons/Close';
import {mediaTextField, mediaTextFieldSec, mediaBtn} from "../../custom/global.media.variables"
import Modal from 'react-awesome-modal';

const mediaContainer = {
    m_width: '600px',
    m_padding: '10px',
}
const mediaContainerWidth = {
    m_width: '600px',
    m_m_width: '100%',
}
const Index = () => {
    const [state, setState] = useState(false);
    function openModal() {
        setState(true);
    }
    function closeModal() {
        setState(false)
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Wrapper onSubmit={onSubmit}>
            <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="60px" bottom="20px">Git va tarjimonlar uchun ariza qoldirish</TextTitle>
            <Container width="90%" padding="0" margin="40px auto" boxShadow={shadow}>
                <Title>Vazifa tavsifi</Title>
                <Container {...mediaContainer} padding="30px">
                    <Container {...mediaContainerWidth} width="85%" >
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Kim kerak</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <RadioGroup />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Gid/Tarjimon kerak bo'lgan shahar</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}><Select placeholder="Davlat" /></Grid>
                                    <Grid item xs={12} sm={6}><Select placeholder="Shahar" /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Gid/Tarjimon kerak bo'lgan sana</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}><Calendar /></Grid>
                                    <Grid item xs={12} sm={6}><Calendar /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Gid/Tarjimon bilishi kerak bo'lgan tillar</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Select placeholder="Tilni tanlang" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-start" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Nima uchun kerak</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <TextArea cols="20" rows="5" wrap="hard" maxlength="10" placeholder="Misol uchun, shaharni ko’rsatish uchun git kerak...." width="100%" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Taklif etilgan narx</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Select placeholder="Narxni tanlang" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Jinsi</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <DoubleCheck name1="Erkak" name2="Ayol" width="180px" alignItems="center" justifyContent="space-between" flexDirection="row" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Nechchi kishi bo'lasizlar</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Input width="100%" type="number" placeholder="Son kiriting..." />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Checkbox name="Arizani yoborib, siz foydalanuvchi shartnomasiga rozilik bildirasiz*" />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container width="100%" textAlign="center" >
                        <Button {...mediaBtn} onClick={openModal}>Arizani yuborish</Button>
                    </Container>
                </Container>
            </Container>

            <section className="section">
                <Modal
                    visible={state}
                    width="700"
                    height="200"
                    effect="fadeInUp"
                    className="modal_container"
                    onClickAway={closeModal}>
                    <div className="modaldiv">
                        <div className="closebtn">  <CloseIcon className="pointx" onClick={closeModal} /></div>
                        <h1 className="modaltitle">Savolingiz Muvaffaqiyatli qabul qilindi</h1>
                        <p>Qisqa vaqt ichida o‘rganib chiqib, tez orada javob berishga harakat qilamiz.</p>

                    </div>
                </Modal>
            </section>


        </Wrapper>
    )
}

export default Index
