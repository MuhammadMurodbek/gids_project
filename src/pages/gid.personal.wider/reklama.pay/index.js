import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { Wrapper01, Wrapper02 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from "../../../components/atom/button";
import { Radio } from 'antd';
import Spinner from "../../../components/molecules/loading.spinner"
import click from '../../../assets/img/advertasing/img1.png';
import { Modal} from 'antd';
import { getApiResponse, postApiResponse } from "../../../hooks/response_get"

export default function Index() {
    const history = useHistory()
    const routerBack = () => history.push('/reklama')
    const [value, setValue] = React.useState(0);
    const onChange = e => setValue(e.target.value);
    const [listPayment, setListPayment] = useState({ data: null, loading: false, success: false, error: false })
    const [postState, setPostState] = useState({ data: null, loading: false, success: false, error: false })
    useEffect(() => { getApiResponse('/api/posts/prices/', setListPayment) }, [])
    const handleAddCash = () => {
        let postData = { total_sum: value, return_url: "http://gits.uz/gid-personal-wider" }
        if(!value) Modal.error({title:"To'lov varianti tanlanmagan.", content:"Xisobni to'ldirish uchun to'lov variantlaridan birini tanlang"})   
        else postApiResponse('/api/posts/create-transaction/',postData, setPostState)
    }
    useEffect(()=>{
        if(postState.success && postState.data?.status === 'created'){
            window.location.href = postState.data?.octo_pay_url
        }else if(postState?.error){
            Modal.error({title:<span>Xatolik yuz berdi !!!. <br/> Qaytadan urinib ko'ring.</span>, content:JSON.stringify(postState.data?.data).substr(0, 500)})
        }
    },[postState])
    console.log(postState)
    return (
        <Wrapper01>
            <Wrapper02>
                <TextTitle font="24px" align="left" className="text-title" bottom="30px" top="70px">
                    Xisobni to‘ldirish
                </TextTitle>
                {listPayment.loading && <Spinner/>}
                {listPayment.success && (
                    <>
                        {
                            listPayment.data?.length > 0  ?
                                <Radio.Group onChange={onChange} value={value} className="radio_group">
                                {
                                    listPayment.data?.map((item,index)=>(
                                        <Radio key={index} value={item} className="price_item">&nbsp; {item} so'm</Radio>
                                    ))
                                }
                            </Radio.Group>:
                            <div className="no_data_card">To'lov variantlari mavjud emas !!</div>  

                        }
                    </>)
                }
                <TextTitle font="24px" align="left"  className="text-title" bottom="30px" top="80px">
                    To‘lov turini tanlang
                </TextTitle>
                <Grid container spacing={1}>
                    <Grid item md="10" className="cashlok">
                        <div>
                            <div className="pay">
                                <CheckCircleIcon className="icon-g" />
                                <ImgContainer width="250px" src={click} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Wrapper02>
            <div className="payment">
                <div className="btn-group">
                    <Button className="btn-pey" margin="30px 0" type="outlined" onClick={routerBack}>Ortga qaytish</Button>
                    <Button loader={postState.loading} className="btn-pey" margin="30px 0" onClick={handleAddCash} >Hisobni to’ldirish</Button>
                </div>
            </div>
        </Wrapper01>
    )
}
