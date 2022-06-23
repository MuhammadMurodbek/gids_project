import React from 'react'
import {Wrapper} from './style'
import noDataImg from "../../../assets/img/undraw/no_data.svg"
import {useTranslation} from 'react-i18next'
const Index = () => {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <div className="wrapper_no_data">
                <span>{t("safarHaqda.topilmadi")}</span>
                <img className="no_data_img" src={ noDataImg } alt="sd" />
            </div>
        </Wrapper>
    )
}

export default Index
