import React, { useState,useEffect } from 'react'
import { Wrapper } from './index.style' 
import RadioGroup from "./radio"
import Selection from "./select.with.title"
import SelectionLang from "./select.with.title.reg"
import CalendarComponent from "./data.with.title"
import CheckBoxContainer from "./checkbox.width.title"
import Button from "./button.component"
import DoubleRadio from "../molecules/double.radio.labeled"
import {useHistory} from "react-router-dom"
import { useTranslation } from 'react-i18next'
import moment from "moment"
import { toast } from "react-hot-toast"
const Index = ({loader, queryObj}) => {
    const history = useHistory()
    const { t } = useTranslation()
    const [postData, setPostData] = useState({ success: '', error: '', loading: false })
    const [collect, setCollect] = useState({})
    const [innerTr, setInnerTr] = useState({is_synchronous:false, is_consecutive:false, is_writer:false})
    const [startVal, setStartVal] = useState(false)
    let params = window.location.search
    // console.log(params)/
    const handleSubmit = () => { 
        // console.log(collect)
        // setStartVal(true)
        let array = Object.keys(collect)
        if(array?.length>=9 && collect?.languages?.length>0){
            setPostData({ ...postData, loading: true })
            let urlOther = `type=${innerTr?.is_writer ? 'writer' : collect?.type}&gender=${(collect?.male && collect?.female)? undefined: collect?.male ? 'male' : collect?.female ? 'female' : undefined}&country=${collect?.country}&city=${collect?.city || queryObj?.city}&lang=${collect?.languages?.map(item => item?.value)}&date_after=${collect?.date_after}&date_before=${collect?.date_before}&${collect?.search_type}=0`
            let filterUrl = urlOther.split('&').filter(a=>!a.includes('undefined')).join('&')
            history.push('/gids?'+filterUrl)
        }else{
            setStartVal(true)
            toast.error("Ma'lumotlarni to'liq kiriting")
        }
        window.scrollTo(0,0);
    }
    React.useEffect(() => {
        if(loader?.success !=='' || loader?.error !== ''){
            setPostData({ ...postData, loading: false })
        }
    },[loader])
    React.useEffect(()=>{
        if(queryObj){
            setCollect(a=>{return{
                ...a,
                date_after:queryObj?.date_after,
                date_before:queryObj?.date_before,
                male:queryObj?.gender==='male' ? true:false,
                female:queryObj?.gender ==='female' ? true:false,
                search_type:queryObj?.all==='0' ? 'all':queryObj?.online==='0' ? 'online':undefined
            }})
        }
    },[queryObj])
    // console.log(queryObj)
    React.useEffect(()=>{
        let array = Object.keys(collect)
        if(array?.length>=9 && collect?.languages?.length>0){
            setStartVal(false)
        }
    },[collect])
    // console.log(queryObj)
    // console.log(collect)
    return (
        <Wrapper width="350px">
            <div className="title-header">
                {t("kengaytirlgan_Q.kengaytirilgan")}
            </div>

            <RadioGroup
                setState={setCollect}
                state={collect}
                field='type'
                setDefaultValue={queryObj?.type}
                setInnerTr={setInnerTr}
            />
            {startVal && !collect.hasOwnProperty('type') && <span className="errors_search">type kiriting</span>}
            <Selection
                setState={setCollect}
                state={collect}
                field1='country'
                field2='city'
                title={t("kengaytirlgan_Q.Davlat")}
                placeholder={t("kengaytirlgan_Q.DavlatniTanlang")} 
                defaultCountry={queryObj?.country}
                defaultCity={queryObj?.city}
            />
            {startVal && (!collect.hasOwnProperty('country') || !collect.hasOwnProperty('city')) && <span className="errors_search">Davlat (shahar) kiriting</span>}
            <CalendarComponent
                title={t("kengaytirlgan_Q.sana")}
                setState={setCollect}
                state={collect}
                field="date_after"
                placeholder={
                    queryObj?.date_after ? 
                    moment(queryObj?.date_after).format('DD-MM-YYYY')
                    :'dd/mm/yyyy dan'
                }
                placeholderValue={queryObj?.date_after ? true:false}
                // placeholder="dd/mm/yyyy dan"
            />
            {startVal && !collect.hasOwnProperty('date_after') && <span className="errors_search">Sana kiriting</span>}
            <CalendarComponent
                setState={setCollect}
                state={collect}
                field="date_before"
                placeholder={
                    queryObj?.date_before ? 
                    moment(queryObj?.date_before).format('DD-MM-YYYY')
                    :'dd/mm/yyyy dan'
                }
                placeholderValue={queryObj?.date_before ? true:false}
            />
            {startVal && !collect.hasOwnProperty('date_before') && <span className="errors_search">Sana kiriting</span>}
            <SelectionLang
                title={t("kengaytirlgan_Q.til")}
                setCollect={setCollect}
                collect={collect}
                field="lang"
                placeholder="Tillarni tanlang"
                defaultValueApi={queryObj?.lang}
            />
            {startVal && (!collect.hasOwnProperty('languages') || !collect?.languages?.length>0) && <span className="errors_search">Tillarni kiriting</span>}
            <CheckBoxContainer
                setState={setCollect}
                state={collect}
                name1={t("kengaytirlgan_Q.erkak")}
                name2={t("kengaytirlgan_Q.ayol")} />
            {startVal && (!collect.hasOwnProperty('male') && !collect.hasOwnProperty('female')) && <span className="errors_search">Jinsini kiriting</span>}
            <DoubleRadio
                value1="online"
                value2="all"
                field="search_type"
                setState={setCollect}
                state={collect}
                name1={t("kengaytirlgan_Q.online")}
                name2={t("kengaytirlgan_Q.barchasi")} 
                defaultApiValue={queryObj?.online === '0' ? 'online' : queryObj?.all === '0' ? 'all':undefined}
            />
            {startVal && !collect.hasOwnProperty('search_type') && <span className="errors_search">Turni tanlang</span>}
            <div className="button-wrapper">
                <Button loader={postData?.loading} onClick={handleSubmit} width="260px" name={t("kengaytirlgan_Q.qidirish")} />
            </div>
        </Wrapper>
    )
}

export default Index
