import { Grid } from '@material-ui/core'
import React, { useState, useCallback } from 'react'
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
import { validatorState } from "../../custom/validator"
import { mediaTextField, mediaTextFieldSec, mediaBtn } from "../../custom/global.media.variables"
import { userSchema } from "./val"
import { mediaContainer, mediaContainerWidth } from "./_media"
import { gid_lang_obj, currency } from "../../custom/constants"
import { get_cities } from "../../custom/function"
import { defaultState } from "./constant"
import { post_gid_app_action } from "../../redux/actions"
import useApi from "../../hooks/response"
import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t } = useTranslation()
    const [btnLoader, setBtnLoader] = useState(false)
    const [state, setState] = useState(false);
    const [collect, setCollect] = useState(defaultState)
    const [country, setCountry] = useState({})
    const [region, setRegion] = useState({})
    const { responseHook, setResponseHook } = useApi('post_gid_app_reducer')
    const openModal = useCallback(() => { setState(true) }, [state])
    const closeModal = useCallback(() => { setState(false) }, [state])
    const [error, setError] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault();
        setBtnLoader(true)
        let newCollect = {
            ...collect,
            country: collect?.country?.label,
            city: collect?.city?.label,
            languages: collect?.languages.map(item => item.label),
            currency: collect?.currency?.value,
        }
        console.log(newCollect)
        const isValid = await userSchema.isValid(newCollect)
        if (!isValid) {
            setError(true)
            setBtnLoader(false)
        }
        else setResponseHook(post_gid_app_action(newCollect))
    }
    const countries = JSON.parse(localStorage.getItem('countries')).map((item, index) => { return { value: index, label: item.country, ...item } }) || []
    React.useEffect(() => {
        if (country) {
            let array = get_cities(country?.cities);
            setRegion(array)
            setCollect({ ...collect, country: { value: country?.value, label: country?.label } })
        }
    }, [country])
    React.useEffect(() => { if (region) { setCollect({ ...collect, city: region }) } }, [region])
    return (
        <Wrapper onSubmit={onSubmit}>
            <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="60px" bottom="20px">
                {t("arizaqoldirish.title")}
            </TextTitle>
            <Container width="90%" padding="0" margin="40px auto" boxShadow={shadow}>
                <Title>{t("arizaqoldirish.vazifa")}</Title>
                <Container {...mediaContainer} padding="30px">
                    <Container {...mediaContainerWidth} width="85%" >
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">{t("arizaqoldirish.kimKerak")}</div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <RadioGroup
                                    setState={setCollect}
                                    state={collect}
                                    errorText={error ? validatorState(collect?.who_need, 'string', 0, 'Kim kerakligi kiritilmagan') : null}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.KerakShaharlar")}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}><Select options={countries} setState={setCountry} state={country} placeholder={t("arizaqoldirish.davlat")} errorText={error ? validatorState(country, 'object', 0, 'Davlat (Shahar) kiritilmagan') : null} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Select options={region} setState={setRegion} state={region} placeholder={t("arizaqoldirish.shaxarlar")} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.KerakSana")}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Calendar setState={setCollect} state={collect} field="start_date" errorText={error ? validatorState(collect?.start_date, 'string', 0, 'Boshlanish sanasi kiritilmagan') : null} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Calendar setState={setCollect} state={collect} field="end_date" errorText={error ? validatorState(collect?.start_date, 'string', 0, 'Tugash sanasi kiritilmagan') : null} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.Bilishikerak")}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Select setCollect={setCollect} collect={collect} field="languages"
                                    placeholder={t("arizaqoldirish.BilishikeralPlac")}
                                    isMulti options={gid_lang_obj}
                                    errorText={error ? validatorState(collect?.languages, 'array', 0, 'Tillar kiritilmagan') : null} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-start" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.nimagaKerak")}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <TextArea onChange={(e) => setCollect({ ...collect, why_need: e.target.value })} cols="20" rows="5" wrap="hard" maxlength="10"
                                    placeholder={t("arizaqoldirish.misol")}
                                    width="100%" errorText={error ? validatorState(collect?.why_need, 'string', 0, 'Sabab kiritilmagan') : null} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.narhi")}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={12} sm={8}><Input value={collect?.cost || ''} onChange={(e) => setCollect({ ...collect, cost: parseInt(e.target.value) })} width="100%" type="number" placeholder={t("arizaqoldirish.chegara")} errorText={error ? validatorState(collect?.cost, 'max', 0, 'Narx kiritilmagan') : null} />
                                    </Grid>
                                    <Grid item xs={12} sm={4} style={{ position: 'relative', top: 3 }}>
                                        <Select setCollect={setCollect} collect={collect} field="currency" options={currency} placeholder="Valyuta" errorText={error ? validatorState(collect?.currency, 'object', 0, 'Valyuta kiritilmagan') : null} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.jinsi")}
                                </div>
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
                                    errorText={(error && (collect?.is_female || collect?.is_female)) ? "Tarjimon tanlanmagan" : null}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner">
                                    {t("arizaqoldirish.nechaKishi")}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Input value={collect?.people_count || ''} onChange={(e) => setCollect({ ...collect, people_count: parseInt(e.target.value) })} width="100%" type="number"
                                 placeholder= {t("arizaqoldirish.nechkishiBolaslar")} errorText={error ? validatorState(collect?.people_count, 'max', 0, 'People count kiritilmagan') : null} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" className="wrap-grid">
                            <Grid item xs={12} sm={12} md={5}>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Checkbox setState={setCollect} state={collect}
                                 name= {t("arizaqoldirish.shartnoma")} />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container width="100%" textAlign="center" >
                        <Button loader={responseHook?.loading} {...mediaBtn}>
                            {t("arizaqoldirish.Ayuborish")}
                        </Button>
                    </Container>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default Index
