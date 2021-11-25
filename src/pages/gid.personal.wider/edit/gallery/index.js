import React,{useEffect, useState} from 'react'
import { Wrapper } from './style'
// import ImageUploader from "../../../../components/organism/image.uploader.f15"
// import { Container } from "../../../../styles/container/index.style"
// import { TextTitle } from "../../../../styles/textTitle/index.style"
import { useTranslation } from 'react-i18next'
import Gallery from "./_gallery"
import {getResponse} from "../../../../hooks/response_get"

const Index = () => {
    const [upload, setUpload] = useState({success:'', error:''})
    const { t } = useTranslation()
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
    useEffect(() => { getResponse(`/api/${getRole?.role}s/edit/video/`, setUpload)},[])

    return (
        <Wrapper>
            <Gallery role={getRole?.role}/>

            {/* <Container>
                <TextTitle font="14px" align="left" top="15px">
                    {t("Galarey.Partfolio")}
                </TextTitle>
                <ImageUploader width="100%" height="600px" />
            </Container>
            <Container>
                <TextTitle font="14px" align="left" top="15px"> {t("Galarey.galarey")} (0)</TextTitle>
                <ImageUploader width="100%" height="600px"/>
            </Container> */}
        </Wrapper>
    )
}

export default Index
