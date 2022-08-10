import React from 'react'
import ReactPlayer from 'react-player/lazy'
import {Wrapper} from "./style"
import {useTranslation} from 'react-i18next'

const Index = (url) => {
    // console.log(url)
    const { t } = useTranslation()
    return (
        <Wrapper>
            {
                url ? 
                <ReactPlayer 
                    url= {url?.url} 
                    controls
                    width="100%"
                    height="240px"
                />:<div>{t("GidPk.videoYuklanmagan")}</div>
            }
        </Wrapper>
    )
}

export default Index
