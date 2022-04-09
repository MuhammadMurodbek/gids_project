import React, { useEffect } from 'react'
import { Container } from '../../styles/container/index.style'
import { shadow } from "./style"
import { mediaContainer, mediaContainerWidth } from "./_media"
import { useForm, Controller } from "react-hook-form"
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import { TextArea, RadioGroupController, SelectController, Calendar, InputController, CheckBoxController } from "../../components/w.controller.form"
import { Button } from '../../components/atom/button/index.style'
import {currency} from "./constant"
import {WrapEdit} from "./style"
import { mediaBtn } from "../../custom/global.media.variables"

const EditApp = () => {
    const { t } = useTranslation()
    const { handleSubmit, control, watch, setValue } = useForm()
    const lan = localStorage.getItem('i18nextLng')
    const country = JSON.parse(localStorage.getItem('countryGlobal'))
    const langs = JSON.parse(localStorage.getItem('lanGlobal'))
    const countryList = country?.map((item) => { return { label: item?.name[lan], value: item?.id } })
    const langList = langs?.map((item)=>{return{label:item?.name[lan], value:item.id}})
    let countryId = watch('country')
    let cityList = country?.filter((item) => item?.id === countryId?.value)[0]?.cities?.map((prev) => { return { label: prev[lan], value: prev?.id } })
    useEffect(() => {
        if (countryId) { setValue('city', '') }
    }, [countryId])
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <WrapEdit>
            <Container width="90%" padding="0" margin="40px auto" boxShadow={shadow}>
                <Container {...mediaContainer} padding="30px">
                    <Container {...mediaContainerWidth} width="85%" >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="title_inner"> {t("arizaqoldirish.kimKerak")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <RadioGroupController Controller={Controller} control={control} name="radio" label1="Gid" label2="Tarjimon" />
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="title_inner"> {t("arizaqoldirish.KerakShaharlar")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                        <Grid item xs={12} sm={12} md={6}><SelectController control={control} name="country" label1="Gid" label2="Tarjimon" options={countryList} pl={'Davlat tanlang'} /></Grid>
                                        <Grid item xs={12} sm={12} md={6}><SelectController control={control} name="city" label1="Gid" label2="Tarjimon" options={cityList} pl={'Shahar kiriting'} /></Grid>
                                    </Grid>
                                </Grid>
                            
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="title_inner">{t("arizaqoldirish.KerakSana")}</div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                        <Grid item xs={12} sm={12} md={6}><Calendar control={control} name="dan" /></Grid>
                                        <Grid item xs={12} sm={12} md={6}><Calendar control={control} name="gacha" /></Grid>
                                    </Grid>
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="title_inner"> {t("arizaqoldirish.Bilishikerak")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <SelectController isMulti control={control} name="languages" label1="Gid" label2="Tarjimon" options={langList} pl={'Tillarni tanlang'} />
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="title_inner"> {t("arizaqoldirish.Bilishikerak")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <TextArea control={control} name="why_need" label1="Gid" label2="Tarjimon" pl={'Tillarni tanlang'} />
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.narhi")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                        <Grid item xs={12} sm={12} md={8}><InputController control={control} name="dan" placeholder="Narx chegarasini yozing"/></Grid>
                                        <Grid item xs={12} sm={12} md={4}><SelectController control={control} name="cost" options={currency} pl={'Valyuta'} /></Grid>
                                    </Grid>
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                <div className="title_inner"> {t("arizaqoldirish.narhi")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                        <Grid item xs={12} sm={12} md={6}><CheckBoxController name="male" control={control} label="Erkak"/></Grid>
                                        <Grid item xs={12} sm={12} md={6}><CheckBoxController name="female" control={control} label="Ayol"/></Grid>
                                    </Grid>
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="title_inner"> {t("arizaqoldirish.nechaKishi")} </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <InputController control={control} name="people_count" placeholder="Necha kishi bolasizlar?"/>
                                </Grid>
                            </Grid><br/>
                            <Grid container spacing={1} alignItems="center" className="wrap-grid">
                                <Grid item xs={12} md={5}></Grid>
                                <Grid item xs={12} md={7}>
                                    <CheckBoxController name="female" control={control} label="Arizani yoborib, siz foydalanuvchi shartnomasiga rozilik bildirasiz*"/>
                                </Grid>
                            </Grid>
                            <Container width="100%" margin="20px 0 0" textAlign="center" >
                                <Button type="submit"  {...mediaBtn}>&nbsp; {t("arizaqoldirish.Ayuborish")}</Button>
                            </Container>
                        </form>
                    </Container>
                </Container>
            </Container>
        </WrapEdit>
    )
}

export default EditApp


// import { Grid } from '@material-ui/core'
// import React, { useState, useEffect, useRef } from 'react'
// import { useParams } from "react-router-dom"
// import { Container } from '../../styles/container/index.style'
// import { Wrapper, shadow, Title } from "./style"
// import RadioGroup from "../../components/molecules/radio.group.f9/radio.appl"
// import Select from "../../components/atom/select"
// import Calendar from "../../components/atom/calendar"
// import Input from "../../components/atom/input.second"
// import TextArea from "../../components/atom/textAreaCom"
// import DoubleCheck from "../../components/molecules/double.check"
// import Checkbox from "../../components/atom/checkbox"
// import Button from "../../components/atom/button"
// import SelectLabeledCountry from "../../components/molecules/select.labeled.country"
// import SelectLabeledCity from "../../components/atom/select/city.app"
// import SelectLang from "../../components/molecules/select.labeled/lang"
// import { validatorState } from "../../custom/validator"
// import { mediaBtn } from "../../custom/global.media.variables"
// import { userSchema } from "./val"
// import { mediaContainer, mediaContainerWidth } from "./_media"
// import { currency } from "../../custom/constants"
// import { getResponse, putResponse } from "../../hooks/response_get"
// import { defaultState } from "./constant"
// import { useTranslation } from 'react-i18next';
// import { toastChecker } from "../../custom/function"
// import Spinner from "../../components/atom/loading.spinner.line"

// const Index = () => {
//     const { t } = useTranslation()
//     const { id } = useParams()
//     const [btnLoader, setBtnLoader] = useState(false)
//     const [getData, setGetData] = useState({ success: '', error: '' })
//     const [collect, setCollect] = useState(defaultState)
//     const [countryId, setCountryId] = useState(null)
//     const [postData, setPostData] = useState({ success: '', error: '', loading: false })
//     const [error, setError] = useState(false)
//     useEffect(() => { getResponse(`/api/users/self/application/${id}/`, setGetData) }, [id])
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         setBtnLoader(true)
//         let newCollect = {
//             ...collect,
//             languages: collect?.languages.map(item => item.value),
//             currency: collect?.currency?.value,
//         }
//         const isValid = await userSchema.isValid(newCollect)
//         if (!isValid) {
//             setError(true)
//             setBtnLoader(false)
//         }
//         else putResponse(`/api/users/self/application/${id}/`, newCollect, setPostData)
//     }
//     useEffect(() => { toastChecker(postData) }, [postData])
//     // console.log(radioRef?.current)
//     return (
//         <>
//             {
//                 getData?.success !== "" ?
//                     <Wrapper onSubmit={onSubmit}>
//                         <Container width="90%" padding="0" margin="40px auto" boxShadow={shadow}>
//                             <Title> Arizani taxrirlash </Title>
//                             <Container {...mediaContainer} padding="30px">
//                                 <Container {...mediaContainerWidth} width="85%" >
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.kimKerak")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <RadioGroup
//                                                 // ref={radioRef}
//                                                 setState={setCollect}
//                                                 state={collect}
//                                                 defaultApiValue={getData?.success?.data?.who_need}
//                                                 errorText={error ? validatorState(collect?.who_need, 'string', 0, 'Kim kerakligi kiritilmagan') : null}
//                                             />
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.KerakShaharlar")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <Grid container spacing={2}>
//                                                 <Grid item xs={12} sm={6}>
//                                                     <SelectLabeledCountry
//                                                         state={collect}
//                                                         setState={setCollect}
//                                                         setCountryId={setCountryId}
//                                                         placeholder={t("arizaqoldirish.davlat")}
//                                                         defaultApiValue={{value: getData?.success?.data?.country, label: getData?.success?.data?.country_name}}
//                                                         errorText={error ? validatorState(collect?.country, 'min', 3, 'Davlat (Shahar) kiritilmagan') : null}
//                                                     />
//                                                 </Grid>
//                                                 <Grid item xs={12} sm={6}>
//                                                     <SelectLabeledCity
//                                                         countryId={countryId}
//                                                         setState={setCollect}
//                                                         state={collect}
//                                                         isDisabled={countryId === null ? true : false}
//                                                         placeholder={t("arizaqoldirish.shaxarlar")}
//                                                         defaultApiValue={{value: getData?.success?.data?.city, label: getData?.success?.data?.city_name}}
//                                                     />
//                                                 </Grid>
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner">{t("arizaqoldirish.KerakSana")}</div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <Grid container spacing={2}>
//                                                 <Grid item xs={12} sm={6}><Calendar setState={setCollect} state={collect} field="start_date" errorText={error ? validatorState(collect?.start_date, 'string', 0, 'Boshlanish sanasi kiritilmagan') : null} /></Grid>
//                                                 <Grid item xs={12} sm={6}><Calendar setState={setCollect} state={collect} field="end_date" errorText={error ? validatorState(collect?.start_date, 'string', 0, 'Tugash sanasi kiritilmagan') : null} /></Grid>
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.Bilishikerak")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <SelectLang
//                                                 setState={setCollect}
//                                                 state={collect}
//                                                 // field="languages" 
//                                                 placeholder={t("arizaqoldirish.BilishikeralPlac")}
//                                                 // options={ gid_lang_obj } 
//                                                 errorText={error ? validatorState(collect?.languages, 'array', 0, 'Tillar kiritilmagan') : null}
//                                             />
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="flex-start" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.nimagaKerak")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <TextArea onChange={(e) => setCollect({ ...collect, why_need: e.target.value })} cols="20" rows="5" wrap="hard" maxlength="10"
//                                                 placeholder={t("arizaqoldirish.misol")} width="100%" errorText={error ? validatorState(collect?.why_need, 'string', 0, 'Sabab kiritilmagan') : null} />
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.narhi")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <Grid container spacing={1} alignItems="center">
//                                                 <Grid item xs={12} sm={8}><Input value={collect?.cost || ''} onChange={(e) => setCollect({ ...collect, cost: parseInt(e.target.value) })} width="100%" type="number" placeholder={t("arizaqoldirish.chegara")} errorText={error ? validatorState(collect?.cost, 'max', 0, 'Narx kiritilmagan') : null} /></Grid>
//                                                 <Grid item xs={12} sm={4} style={{ position: 'relative', top: 3 }}><Select setCollect={setCollect} collect={collect} field="currency" options={currency} placeholder="Valyuta" errorText={error ? validatorState(collect?.currency, 'object', 0, 'Valyuta kiritilmagan') : null} /></Grid>
//                                             </Grid>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.jinsi")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <DoubleCheck
//                                                 name1={t("arizaqoldirish.erkak")}
//                                                 name2={t("arizaqoldirish.ayol")}
//                                                 width="180px"
//                                                 alignItems="center"
//                                                 justifyContent="space-between"
//                                                 flexDirection="row"
//                                                 field1="is_male"
//                                                 field2="is_female"
//                                                 state={collect}
//                                                 setState={setCollect}
//                                                 errorText={(error && (collect?.is_male || collect?.is_female)) ? "Tarjimon tanlanmagan" : null}
//                                             />
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                             <div className="title_inner"> {t("arizaqoldirish.nechaKishi")} </div>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <Input value={collect?.people_count || ''} onChange={(e) => setCollect({ ...collect, people_count: parseInt(e.target.value) })} width="100%" type="number" placeholder={t("arizaqoldirish.nechkishiBolaslar")} errorText={error ? validatorState(collect?.people_count, 'max', 0, 'People count kiritilmagan') : null} />
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container spacing={1} alignItems="center" className="wrap-grid">
//                                         <Grid item xs={12} sm={12} md={5}>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={7}>
//                                             <Checkbox field={"turekartishka"} setState={setCollect} state={collect} name={t("arizaqoldirish.shartnoma")} />
//                                         </Grid>
//                                     </Grid>
//                                 </Container>
//                                 <Container width="100%" textAlign="center" >
//                                     <Button loader={postData?.loading} {...mediaBtn}>&nbsp; {t("arizaqoldirish.Ayuborish")} </Button>
//                                 </Container>
//                             </Container>
//                         </Container>
//                     </Wrapper> : <Spinner marginTop="60px" width={ 50 } height={ 50 }/>
//             }
//         </>
//     )
// }

// export default Index
