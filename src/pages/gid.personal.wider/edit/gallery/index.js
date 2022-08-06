import React,{useEffect, useState} from 'react'
import { Wrapper } from './style'
import ReactPlayer from 'react-player/lazy'
import { useTranslation } from 'react-i18next'
import Gallery from "./_gallery"
import {getResponse} from "../../../../hooks/response_get"
import GroupImageUpload from "./_galleryImage"
const Index = () => {
    const [upload, setUpload] = useState({success:'', error:''})
    const { t } = useTranslation()
    const [callback, setCallback] = useState(false)
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
    useEffect(() => { getResponse(`/api/${getRole?.role}s/edit/video/`, setUpload)},[callback])
     return (
        <Wrapper>
            <Gallery role={getRole?.role} setCallback={setCallback}/>
            
            <div style={{width: '100%', marginTop: '30px', height: 'auto', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <ReactPlayer width='70%' height='auto' controls url={upload?.success?.data?.video} id="VideoPlayer"/>
            </div>
        
            <div style={{margin:'60px 0 15px'}}><span style={{fontWeight:'bold'}}>{t("Galarey.galareyangiz")}</span><br/><i>
                {getRole.role === "translator"? t("Galarey.rasmGalereya2") :t("Galarey.rasmGalereya")}
              
                
                </i></div>
            <GroupImageUpload role={ getRole?.role } />
        </Wrapper>
    )
}

export default Index
