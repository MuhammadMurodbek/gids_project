import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { Wrapper, Wrapper01, Wrapper02 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "../../../components/atom/button";
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { Radio } from 'antd';
import Spinner from "../../../components/molecules/loading.spinner"
// import DoubleRadio from "../../../../components/molecules/double.radio.labeled";

import click from '../../../assets/img/advertasing/img1.png';
import { getApiResponse, postApiResponse } from "../../../hooks/response_get"

export default function Index() {
    const history = useHistory()
    const routerBack = () => history.push('/reklama')
    const [value, setValue] = React.useState(1);
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const [listPayment, setListPayment] = useState({ data: null, loading: false, success: false, error: false })
    useEffect(() => { getApiResponse('/api/posts/prices/', setListPayment) }, [])
    console.log(listPayment)
    return (
        <Wrapper01>
            <Wrapper02>
                <TextTitle className="text-title" bottom="70px" top="70px">
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
                                        <Radio key={index} value={index} className="price_item">{item} so'm</Radio>
                                    ))
                                }
                            </Radio.Group>:
                            <div className="no_data_card">To'lov variantlari mavjud emas !!</div>  

                        }
                    </>)
                }
                <TextTitle className="text-title" bottom="70px" top="70px">
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
                    <Button className="btn-pey" margin="30px 0"  >Hisobni to’ldirish</Button>
                </div>
            </div>
        </Wrapper01>
    )
}
