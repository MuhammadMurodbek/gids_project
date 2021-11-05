import { Grid } from '@material-ui/core'
import React,{useState, useCallback} from 'react'
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
import {mediaContainer, mediaContainerWidth} from "./_media"
import {gid_lang_obj, currency} from "../../custom/constants"
import {get_cities} from "../../custom/function"
import {defaultState} from "./constant"
import {post_gid_app_action} from "../../redux/actions"
import useApi from "../../hooks/response"

const Index = () => {
    const [state, setState] = useState(false);
    const [collect, setCollect] = useState(defaultState)
    const [country, setCountry] = useState({})
    const [region, setRegion] = useState({})
    const {responseHook, setResponseHook} = useApi('post_gid_app_reducer')
    const openModal = useCallback(() => {setState(true)},[state])
    const closeModal = useCallback(() => {setState(false)},[state])
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(collect)
        let newCollect = {
            ...collect,
            country:collect?.country?.label,
            city:collect?.city?.label,
            languages:collect?.languages.map(item=>item.label),
            currency:collect?.currency?.value,
        }
        // console.log()
        setResponseHook(post_gid_app_action(newCollect))
        if(responseHook?.status===200){
            setState(true)
            setCollect(defaultState)
        }
    }
    console.log(collect)
    // console.log(responseHook)
    const countries = JSON.parse(localStorage.getItem('countries')).map((item,index)=>{return {value:index, label:item.country, ...item}}) || []
    React.useEffect(() => {
        if(country){
            let array = get_cities(country?.cities);
            setRegion(array)
            setCollect({...collect, country: {value:country?.value, label:country?.label}})
        }
    },[country])
    React.useEffect(() => {if(region){setCollect({...collect, city:region})}},[region])
    // console.log(collect)
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
                                <RadioGroup setState={setCollect} state={collect}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Gid/Tarjimon kerak bo'lgan shahar</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}><Select options={countries} setState={setCountry} state={country} placeholder="Davlat" /></Grid>
                                    <Grid item xs={12} sm={6}><Select options={region} setState={setRegion} state={region} placeholder="Shahar" /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Gid/Tarjimon kerak bo'lgan sana</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}><Calendar setState={setCollect} state={collect} field="start_date" /></Grid>
                                    <Grid item xs={12} sm={6}><Calendar setState={setCollect} state={collect} field="end_date"/></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Gid/Tarjimon bilishi kerak bo'lgan tillar</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Select setCollect={setCollect} collect={collect} field="languages" placeholder="Tilni tanlang" isMulti options={gid_lang_obj}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-start" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Nima uchun kerak</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <TextArea onChange={(e)=>setCollect({...collect, why_need:e.target.value})} cols="20" rows="5" wrap="hard" maxlength="10" placeholder="Misol uchun, shaharni ko’rsatish uchun git kerak...." width="100%" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Taklif etilgan narx</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={1} alignItems="center"> 
                                    <Grid item xs={12} sm={8}><Input onChange={(e)=>setCollect({...collect, cost:parseInt(e.target.value)})} width="100%" type="number" placeholder="Son kiriting..." /></Grid>
                                    <Grid item xs={12} sm={4} style={{position:'relative', top:3}}><Select setCollect={setCollect} collect={collect} field="currency" options={currency}  placeholder="Valyuta" /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Jinsi</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <DoubleCheck 
                                    name1="Erkak" 
                                    name2="Ayol" 
                                    width="180px" 
                                    alignItems="center" 
                                    justifyContent="space-between" 
                                    flexDirection="row"
                                    field1="is_male"
                                    field2="is_female"  
                                    state={collect}
                                    setState={setCollect} 
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">Nechchi kishi bo'lasizlar</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Input value={collect?.people_count || ''} onChange={(e)=>setCollect({...collect, people_count:parseInt(e.target.value)})} width="100%" type="number" placeholder="Son kiriting..." />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Checkbox setState={setCollect} state={collect} name="Arizani yoborib, siz foydalanuvchi shartnomasiga rozilik bildirasiz*" />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container width="100%" textAlign="center" >
                        <Button {...mediaBtn} >Arizani yuborish</Button>
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
