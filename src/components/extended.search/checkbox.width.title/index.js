import React from 'react'
import {Wrapper} from "./index.style"
import Checkbox from "../../atom/checkbox"
import { useTranslation } from 'react-i18next'

const Index = (props) => {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <div className="title-header-checkbox"> {t("kengaytirlgan_Q.jinsi")} </div>
            <Checkbox className="check" name={props.name1}/>             
            <Checkbox className="check" name={props.name2}/>            
        </Wrapper>
    )
}

export default Index
