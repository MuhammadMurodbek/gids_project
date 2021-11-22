import React from 'react'
import {Wrapper} from './index.style'
import RadioGroup from "./radio" 
import Selection from "./select.with.title"
import SelectionLang from "./select.with.title.reg"
import CalendarComponent from "./data.with.title"
import CheckBoxContainer from "./checkbox.width.title"
import Button from "./button.component"
import DoubleRadio from "../molecules/double.radio.labeled"
import {useTranslation} from 'react-i18next'

const Index = () => {
   
    const {t} = useTranslation() 

    return (
        <Wrapper width="350px">
            <div className="title-header">{t("kengaytirlgan_Q.kengaytirilgan")}</div>

            <RadioGroup/>   

            <Selection title={t("kengaytirlgan_Q.Davlat")} placeholder={t("kengaytirlgan_Q.DavlatniTanlang")}/>

            <CalendarComponent title={t("kengaytirlgan_Q.sana")} />

            <CalendarComponent/>

            <SelectionLang title={t("kengaytirlgan_Q.til")}/>

            <CheckBoxContainer name1={t("kengaytirlgan_Q.erkak")} name2={t("kengaytirlgan_Q.ayol")}/>

            <DoubleRadio name1={t("kengaytirlgan_Q.online")} name2={t("kengaytirlgan_Q.barchasi")}/>
            
            <div className="button-wrapper">
                <Button width="280px" name={t("kengaytirlgan_Q.qidirish")}/>
            </div>
        </Wrapper>
    )
}

export default Index
