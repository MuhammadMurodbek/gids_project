import React from 'react'
import {Wrapper} from "./index.style"
import Checkbox from "../../atom/checkbox"
import { useTranslation } from 'react-i18next'

const Index = (props) => {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <div className="title-header-checkbox"> {t("kengaytirlgan_Q.jinsi")} </div>
            <Checkbox className="check" field="male" name={props.name1} {...props}/>             
            <Checkbox className="check" field="female" name={props.name2} {...props}/>            
        </Wrapper>
    )
}

export default Index
