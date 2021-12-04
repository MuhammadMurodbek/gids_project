import React,{useEffect, useState} from 'react'
import { Wrapper } from './style'
import ReactPlayer from 'react-player/lazy'
import { useTranslation } from 'react-i18next'
import Gallery from "./_gallery"
import {getResponse} from "../../../../hooks/response_get"

const Index = () => {
    const [upload, setUpload] = useState({success:'', error:''})
    const { t } = useTranslation()
    const [callback, setCallback] = useState(false)
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
    useEffect(() => { getResponse(`/api/${getRole?.role}s/edit/video/`, setUpload)},[callback])
    console.log(upload)
    return (
        <Wrapper>
            <Gallery role={getRole?.role} setCallback={setCallback}/>
            <div style={{width: '100%', marginTop: '30px', height: 'auto', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <ReactPlayer  width='70%' height='auto' controls url={upload?.success?.data?.video} />
            </div>
        </Wrapper>
    )
}

export default Index
