import React from 'react'
import {Wrapper} from "./style"
import Player from "../../../atom/player"
import { useTranslation } from 'react-i18next'

const Index = ({url}) => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <div style={{margin:"10px 0", fontWeight:'bold', fontSize:'15px'}}>
                {t("GidPk.ozimHaqimdaVideo")} 
            </div>
            <Player url={url}/>
        </Wrapper>
    )
}

export default Index
