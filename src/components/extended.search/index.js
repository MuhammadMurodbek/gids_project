import React, { useState } from 'react'
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
import { getResponse } from "../../hooks/response_get"
import { toast } from "react-hot-toast"
const Index = () => {
    const history = useHistory()
    const { t } = useTranslation()
    const [postData, setPostData] = useState({ success: '', error: '', loading: false })
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    const [collect, setCollect] = useState()
    const handleSubmit = () => {
        setPostData({ ...postData, loading: true })
        let urlOther = `/api/${collect?.type}s/profiles/?gender=${collect?.male ? 'male' : 'female'}&country=${collect?.country}&city=${collect?.city}&lang=${collect?.languages?.map(item => item?.value)}&date_after=${collect?.date_after}&date_before=${collect?.date_before}&${collect?.gender}=0`
        getResponse(urlOther, setPostData)
    }
    React.useEffect(() => {
        if (postData?.error !== '') toast.error("Ma'lumotlarni to'liq kiriting")
        if (postData?.success !== '') {
            localStorage.setItem('advanced_search', JSON.stringify(postData?.success?.data))
            history.push(`/gids?type=${collect?.type}s&gender=${collect?.male ? 'male' : 'female'}&country=${collect?.country}&city=${collect?.city}&lang=${collect?.languages?.map(item => item?.value)}&date_after=${collect?.date_after}&date_before=${collect?.date_before}&${collect?.gender}=0`)
        }
    }, [postData])
    // console.log(collect)
    return (
        <Wrapper width="350px">
            <div className="title-header">
                {t("kengaytirlgan_Q.kengaytirilgan")}
            </div>

            <RadioGroup
                setState={setCollect}
                state={collect}
                field='type' />

            <Selection
                setState={setCollect}
                state={collect}
                field1='country'
                field2='city'
                title={t("kengaytirlgan_Q.Davlat")}
                placeholder={t("kengaytirlgan_Q.DavlatniTanlang")} />

            <CalendarComponent
                title={t("kengaytirlgan_Q.sana")}
                setState={setCollect}
                state={collect}
                field="date_after"
                placeholder="dd/mm/yyyy dan"
                />

            <CalendarComponent
                setState={setCollect}
                state={collect}
                field="date_before"
                placeholder="dd/mm/yyyy gacha"
                />

            <SelectionLang
                title={t("kengaytirlgan_Q.til")}
                setCollect={setCollect}
                collect={collect}
                field="lang"
                placeholder="Tillarni tanlang"
                />

            <CheckBoxContainer
                setState={setCollect}
                state={collect}
                name1={t("kengaytirlgan_Q.erkak")}
                name2={t("kengaytirlgan_Q.ayol")} />

            <DoubleRadio
                value1="online"
                value2="all"
                setState={setCollect}
                state={collect}
                name1={t("kengaytirlgan_Q.online")}
                name2={t("kengaytirlgan_Q.barchasi")} />

            <div className="button-wrapper">
                <Button loader={postData?.loading} onClick={handleSubmit} width="280px" name={t("kengaytirlgan_Q.qidirish")} />
            </div>
        </Wrapper>
    )
}

export default Index
