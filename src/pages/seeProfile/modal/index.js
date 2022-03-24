import React, {useState, useEffect} from 'react'
import { Modal, Rate } from 'antd';
import {useForm, Controller} from "react-hook-form"
import InputText from "../../../components/atom/textAreaCom"
import {postApiResponse} from "../../../hooks/response_get"
import ModalPost from "../../../custom/test.components"

const Index = ({open, setOpen}) => {
    let inputFile = '';
    const {handleSubmit, control, formState:{errors}} = useForm()
    const idUser = JSON.parse(localStorage.getItem('user_token'))
    const [statePost, setStatePost] = useState({data:null, error:false, loading:false, success:false})
    const handleCancel = () => setOpen(false)
    const handleOk = (e) => {
        e.preventDefault();
        inputFile.click();
        return false;
    }
    const onSubmit = (data) => {
        let sendData = {
            git:idUser?.id,
            ...data
        }
        postApiResponse('/api/users/rating/', sendData, setStatePost)
        // console.log(sendData.bio)
        // console.log(sendData.custom_user_id.bio)
        
    }
    return (
        <div>
            <ModalPost {...statePost}/>
             <Modal title="Fikr qoldirish" visible={open} onOk={handleOk} onCancel={handleCancel} width={800}>
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
                                placeholder="Text kiriting..."  
                               
                            />;
                    }}
                />
                 {errors && errors?.comment && <span style={{color:'red'}}>Comment is required !!!</span>}
                <div style={{margin:'10px 0 0'}}>Reytingni baholang</div>
                <Controller
                    name="rating"
                    control={control}
                    rules={{ required: true }}
                    render={({   field: { onChange, value } }) => {
                        return <Rate onChange={onChange} value={value} />;
                    }}
                />
                {errors && errors?.rating && <span style={{display:'block', color:'red'}}>Rating is required !!!</span>}
                    <input type="submit" ref={input => {inputFile = input}} style={{display:'none'}}/>
                </form>
            </Modal>
        </div>
    )
}

export default Index
