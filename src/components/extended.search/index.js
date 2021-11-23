import React, {useState} from 'react'
import {Wrapper} from './index.style'
import RadioGroup from "./radio" 
import Selection from "./select.with.title"
import SelectionLang from "./select.with.title.reg"
import CalendarComponent from "./data.with.title"
import CheckBoxContainer from "./checkbox.width.title"
import Button from "./button.component"
import DoubleRadio from "../molecules/double.radio.labeled"
import {useTranslation} from 'react-i18next'
import {getResponse} from "../../hooks/response_get"
const Index = () => {
   
    const {t} = useTranslation() 
    const [postData, setPostData] = useState()
    const [collect, setCollect] = useState()
    const handleSubmit = () => {
        getResponse(`/api/gids/profiles/`, setPostData)
    }
    console.log(collect)
    return (    
        <Wrapper width="350px">
            <div className="title-header">{t("kengaytirlgan_Q.kengaytirilgan")}</div>

            <RadioGroup setState={setCollect} state={collect} field='gender'/>   

            <Selection setState={setCollect} state={collect} field1='country' field2='city' title={t("kengaytirlgan_Q.Davlat")} placeholder={t("kengaytirlgan_Q.DavlatniTanlang")}/>

            <CalendarComponent title={t("kengaytirlgan_Q.sana")}  setState={setCollect} state={collect} field="date_after"/>

            <CalendarComponent setState={setCollect} state={collect} field="date_before" />

            <SelectionLang title={t("kengaytirlgan_Q.til")} setCollect={setCollect} collect={collect} field="lang"/>

            <CheckBoxContainer setState={setCollect} state={collect} name1={t("kengaytirlgan_Q.erkak")} name2={t("kengaytirlgan_Q.ayol")}/>

            <DoubleRadio value1="online" value2="all"  setState={setCollect} state={collect} name1={t("kengaytirlgan_Q.online")} name2={t("kengaytirlgan_Q.barchasi")}/>
            
            <div className="button-wrapper">
                <Button width="280px" name={t("kengaytirlgan_Q.qidirish")}/>
            </div>
        </Wrapper>
    )
}

export default Index
