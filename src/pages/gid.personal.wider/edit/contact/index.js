import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import InputLabel from "../../../../components/molecules/input.labeled/mask.input"
import Button from "../../../../components/atom/button"
import { Container } from '../../../../styles/container/index.style'
import { getResponse, putResponse } from "../../../../hooks/response_get"
import toast from 'react-hot-toast'
import Spinner from "../../../../components/atom/loading.spinner.line";
import { useDispatch } from 'react-redux'
import { saveTabAction } from "../../../../redux/actions"
import { useTranslation } from 'react-i18next'
const Index = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    const [apiResponse, setApiResponse] = useState({ success: '', error: '' })
    const [apiRes, setApiRes] = useState({ success: '', error: '', loading: false })
    useEffect(() => { 
        setApiResponse({success:'',error:''})
        getResponse(`/api/${getRole?.role}s/edit/contact/`, setApiResponse) 
    }, [])
    useEffect(()=>{
        if(apiResponse.success!==''){
            setState({...apiResponse?.success?.data})
        }
    },[apiResponse?.success])
    const [state, setState] = useState({ telegram: '', instagram: '', facebook: '', wechat: '', viber: '' })
    const handleSubmit = (e) => {
        const {telegram, instagram, facebook, wechat, viber} = state
        e.preventDefault()

        let postState = {
            telegram: telegram ? telegram?.includes('https') ? telegram : 'https://t.me/' + telegram : '',
            instagram: instagram ? instagram?.includes('https') ? instagram : 'https://instagram.com/' + instagram : '',
            facebook: facebook ? facebook?.includes('https') ? facebook : 'https://facebook.com/' + facebook : '',
            wechat: wechat ? wechat?.includes('https') ? wechat : 'https://wechat.com/' + wechat : '',
            viber: viber ? viber?.includes('https') ? viber : 'https://viber.com/' + viber : ''
        }
        putResponse(`/api/${getRole?.role}s/edit/contact/`, JSON.parse(JSON.stringify(postState)), setApiRes)
    }
    useEffect(() => {
        if (apiRes?.success !== "") {
            toast.success(t("kommentlar.yuklandi"))
            getResponse(`/api/${getRole?.role}s/edit/contact/`, setApiResponse)
            dispatch(saveTabAction(2))
        } else if (apiRes?.error !== "") {
            toast.error(t("kommentlar.xatolikMavjud"))
        }

    }, [apiRes])
    return (
        <Wrapper>
            {
                apiResponse?.success === '' ? <Spinner marginTop="60px" width={50} height={50} /> : (
                    <>
                        <Grid container spacing={2}>
                            {/* <Grid item xs={12} sm={6} md={4}>
                                <InputLabel log="https://whatsapp.com/" setState={setState} state={state} field="website"   defaultApiValue={apiResponse?.success?.data?.website?.substr(21)}   sizeLabel="15px" width="100%" label="whatsapp" placeholder="https://www.whatsapp.com/user-name" />
                            </Grid>  */}
                            <Grid item xs={12} sm={6} md={4}>
                                <InputLabel log="https://t.me/" setState={setState} state={state} field="telegram"
                                    defaultApiValue={apiResponse?.success?.data?.telegram?.slice(13)} sizeLabel="15px" width="100%" label="Telegram" placeholder="https://t.me/user-name" />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <InputLabel log="https://instagram.com/" setState={setState} state={state} field="instagram"
                                    defaultApiValue={apiResponse?.success?.data?.instagram?.slice(22)} sizeLabel="15px" width="100%" label="Instagram" placeholder="https://www.instagram.com/user-name" />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <InputLabel log="https://facebook.com/" setState={setState} state={state} field="facebook"
                                    defaultApiValue={apiResponse?.success?.data?.facebook?.slice(21)} sizeLabel="15px" width="100%" label="Facebook" placeholder="https://www.facebook.com/user_name" />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <InputLabel log="https://wechat.com/" setState={setState} state={state} field="wechat"
                                    defaultApiValue={apiResponse?.success?.data?.wechat?.slice(19)} sizeLabel="15px" width="100%" label="Wechat" placeholder="https://spacekid.me/user-name" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <InputLabel log="https://viber.com/" setState={setState} state={state} field="viber"
                                    defaultApiValue={apiResponse?.success?.data?.viber?.slice(18)} sizeLabel="15px" width="100%" label="Viber" placeholder="https://viber.me/user-name" />
                            </Grid>
                        </Grid>
                        <Container padding="20px 0 5px" textAlign="right">
                            <Button loader={apiRes?.loading} className="btns" onClick={handleSubmit}>{t("IshTajriba.saqlash")}</Button>
                        </Container>
                    </>
                )
            }
        </Wrapper>
    )
}

export default Index
