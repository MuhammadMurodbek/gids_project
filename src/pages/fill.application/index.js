import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
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
import SelectLabeledCountry from "../../components/molecules/select.labeled.country"
import SelectLabeledCity from "../../components/molecules/select.labeled.country/city"
import SelectLang from "../../components/molecules/select.labeled/lang"
import { TextTitle } from '../../styles/textTitle/index.style'
import { validatorState } from "../../custom/validator"
import { mediaTextField, mediaTextFieldSec, mediaBtn } from "../../custom/global.media.variables"
import { userSchema } from "./val"
import { mediaContainer, mediaContainerWidth } from "./_media"
import { currency } from "../../custom/constants"
import { defaultState, info, warning } from "./constant"
import { post_gid_app_action } from "../../redux/actions"
import useApi from "../../hooks/response";
import { useTranslation } from 'react-i18next';
import Modal from './modal';
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast } from "react-hot-toast";
// import { Modal, Button, Space } from 'antd';
// import CloseIcon from '@material-ui/icons/Close';

const Index = () => {
    const history = useHistory()
    const selector = useSelector((state) => state.post_gid_app_reducer)
    const token = JSON.parse(localStorage.getItem("user_token"))
    const appNoToken = JSON.parse(localStorage.getItem('appNoToken'))
    const { t } = useTranslation()
    const [btnLoader, setBtnLoader] = useState(false)
    const [state, setState] = useState(null);
    const [collect, setCollect] = useState(defaultState)
    const [countryId, setCountryId] = useState(null)
    const { responseHook, setResponseHook } = useApi('post_gid_app_reducer')
    const [error, setError] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        localStorage.setItem('appNoToken', JSON.stringify(state))
        setIsModalVisible(false);
        history.push('/auth')
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        setBtnLoader(true)
        let newCollect = {
            ...collect,
            languages: collect?.languages.map(item => item.value),
            currency: collect?.currency?.value,
        }
        // console.log(newCollect)
        const isValid = await userSchema.isValid(newCollect)
        if (!isValid) {
            setError(true)
            setBtnLoader(false)
        }
        else if (!token) {
            setState(newCollect)
            showModal()
        } else
            setResponseHook(post_gid_app_action(newCollect))
    }
    React.useEffect(() => {
        if (appNoToken) {
            if (token?.role !== "simple_user") {
                warning(t("arizamodal.arizaRoyhatOting"))
            } else setResponseHook(post_gid_app_action(appNoToken))
        }
    }, [])
    // console.log(selector)
    // console.log(collect)
    return (
        <Wrapper onSubmit={onSubmit}>
            <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="40px" bottom="20px"> 
            {t("arizaqoldirish.title")} </TextTitle>
            <Container width="90%" padding="0" margin="40px auto" boxShadow={shadow}>
                <Title> {t("arizaqoldirish.vazifa")} </Title>
                <Container {...mediaContainer} padding="30px">
                    <Container {...mediaContainerWidth} width="85%" >
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.kimKerak")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <RadioGroup
                                    setState={setCollect}
                                    state={collect}
                                    errorText={error ? validatorState(collect?.who_need, 'string', 0, t("arizaqoldirish.kimKiritilmagan")) : null}
                                />
                            </Grid>
                        </Grid>



                        
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.KerakShaharlar")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <SelectLabeledCountry
                                            state={collect}
                                            setState={setCollect}
                                            setCountryId={setCountryId}
                                            placeholder={t("arizaqoldirish.davlat")}
                                            errorText={error ? validatorState(collect?.country, 'min', 3, t("arizaqoldirish.davlatKiritilmagan")) : null}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectLabeledCity
                                            countryId={countryId}
                                            setState={setCollect}
                                            state={collect}
                                            isDisabled={countryId === null ? true : false}
                                            placeholder={t("arizaqoldirish.shaxarlar")}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">{t("arizaqoldirish.KerakSana")}</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}> 
                                    <Grid item xs={12} sm={6}>
                                        <Calendar setState={setCollect} state={collect} field="start_date"
                                            errorText={error ? validatorState(collect?.start_date, 'string', 0, t("arizaqoldirish.sanaKiritilmagan")) : null} placeholder={t("arizaqoldirish.dan")} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Calendar setState={setCollect} state={collect} field="end_date"
                                            errorText={error ? validatorState(collect?.start_date, 'string', 0, t("arizaqoldirish.tugashKiritilmagan")) : null} placeholder={t("arizaqoldirish.gacha")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.Bilishikerak")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <SelectLang
                                    setState={setCollect}
                                    state={collect}
                                    // field="languages" 
                                    placeholder={t("arizaqoldirish.BilishikeralPlac")}
                                    // options={ gid_lang_obj } 
                                    errorText={error ? validatorState(collect?.languages, 'array', 0, t("arizaqoldirish.tilKiritilmagan")) : null}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-start" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.nimagaKerak")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <TextArea onChange={(e) => setCollect({ ...collect, why_need: e.target.value })} cols="20" rows="5" wrap="hard" maxlength="10"
                                    placeholder={t("arizaqoldirish.misol")} width="100%" errorText={error ? validatorState(collect?.why_need, 'string', 0, t("arizaqoldirish.sababKiritilmagan")) : null} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.narhi")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={12} sm={8}>
                                        <Input value={collect?.cost || ''} onChange={(e) => setCollect({ ...collect, cost: parseInt(e.target.value) })} width="100%" type="number" placeholder={t("arizaqoldirish.chegara")} errorText={error ? validatorState(collect?.cost, 'max', 0, t("arizaqoldirish.narxKiritilmagan")) : null} />
                                    </Grid>
                                    <Grid item xs={12} sm={4} style={{ position: 'relative', top: 3 }}>
                                        <Select setCollect={setCollect} collect={collect} field="currency" options={currency} 
                                        placeholder={t("arizaqoldirish.valyuta")} errorText={error ? validatorState(collect?.currency, 'object', 0, t("arizaqoldirish.valyutaKiritilmagan")) : null} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.jinsi")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <DoubleCheck
                                    name1={t("arizaqoldirish.erkak")}
                                    name2={t("arizaqoldirish.ayol")}
                                    width="180px"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    flexDirection="row"
                                    field1="is_male"
                                    field2="is_female"
                                    state={collect}
                                    setState={setCollect}
                                    errorText={(error && !(collect?.is_male || collect?.is_female)) ? t("arizaqoldirish.jinsiTanlanmagan") : null}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.nechaKishi")} </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Input value={collect?.people_count || ''} onChange={(e) => setCollect({ ...collect, people_count: parseInt(e.target.value) })} width="100%" type="number" placeholder={t("arizaqoldirish.nechkishiBolaslar")} errorText={error ? validatorState(collect?.people_count, 'max', 0, t("arizaqoldirish.odamKiritilmagan")) : null} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Checkbox field={"turekartishka"} setState={setCollect} state={collect} name={t("arizaqoldirish.shartnoma")} />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container width="100%" textAlign="center" >
                        <Button loader={responseHook?.loading} {...mediaBtn}>
                            &nbsp; {t("arizaqoldirish.Ayuborish")}
                         </Button>
                    </Container>
                </Container>
            </Container>
            <>
                <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} type={"Ariza"} />
            </>
        </Wrapper>
    )
}

export default Index
