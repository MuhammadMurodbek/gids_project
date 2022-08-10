import React, {useState, useEffect} from 'react'
import { Modal, Rate } from 'antd';
import {useForm, Controller} from "react-hook-form"
import InputText from "../../../components/atom/textAreaCom"
import {postApiResponse} from "../../../hooks/response_get"
import ModalPost from "../../../custom/test.components"
import { useTranslation } from 'react-i18next'

const Index = ({setCallback, open, setOpen, customId}) => {
    const {t} = useTranslation()
    let inputFile = '';
    const token = JSON.parse(localStorage.getItem("user_token"))
    const {handleSubmit, control, formState:{errors}} = useForm()
    const [statePost, setStatePost] = useState({data:null, error:false, loading:false, success:false})
    const handleCancel = () => setOpen(false)
    const handleOk = (e) => {
        e.preventDefault();
        if(token && token?.hasOwnProperty('access')) {
            inputFile.click();
            return false;
        }else{
            setOpen(false)
        }
    }
    const onSubmit = (data) => {
        let sendData = {
            git:customId,
            ...data
        }
        postApiResponse('/api/users/rating/', sendData, setStatePost)
    }
    useEffect(()=>{
        if(statePost?.success){
            setCallback((prev)=>!prev)
        }
    },[statePost])
    return (
        <div>
            <ModalPost {...statePost} etitle= {statePost?.data?.status === 400 ? t("kommentlar.sizFarqatBir"): t("kommentlar.XatolikYuzBerdi")} />
             <Modal title={t("GidPk.fikirqoldirish")} visible={open} onOk={handleOk} onCancel={handleCancel} width={800}>
                {(token && token?.hasOwnProperty('access')) ? 
                     <form onSubmit={handleSubmit(onSubmit)}>
                     <Controller
                         name="comment"
                         control={control}
                         rules={{ required: true }}
                         render={({   field: { onChange, value } }) => {
                             return <InputText 
                                     width="100%" 
                                     height="300px" 
                                     onChange={onChange} 
                                     value={value} 
                                     placeholder={t("kommentlar.textKiriting")} 
                                    
                                 />;
                         }}
                     />
                      {errors && errors?.comment && <span style={{color:'red'}}>{t("kommentlar.kommentShart")}</span>}
                     <div style={{margin:'10px 0 0'}}>{t("kommentlar.reytingniBaholang")}</div>
                     <Controller
                         name="rating"
                         control={control}
                         rules={{ required: true }}
                         render={({   field: { onChange, value } }) => {
                             return <Rate onChange={onChange} value={value} />;
                         }}
                     />
                     {errors && errors?.rating && <span style={{display:'block', color:'red'}}>{t("kommentlar.bahoShart")}</span>}
                         <input type="submit" ref={input => {inputFile = input}} style={{display:'none'}}/>
                     </form>:
                     <div style={{color:'orangered'}}> {t("kommentlar.fikirqoldirish")}</div>
                }
               
            </Modal>
        </div>
    )
}

export default Index
