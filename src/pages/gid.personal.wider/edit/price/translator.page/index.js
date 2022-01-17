import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Container } from "../../../../../styles/container/index.style"
import PriceCurrency from "./price.currency"
import SelectLabel from '../../../../../components/molecules/select.labeled/cost'
import { Grid } from '@mui/material';
import TextLabeledLoop from "../../../../../components/atom/text.labeled"
import { getResponse, postResponse } from "../../../../../hooks/response_get"
import Button from "../../../../../components/atom/button"
import { common } from "../../../../../custom/url"
import Spinner from "../../../../../components/atom/loading.spinner.line";
import { getLabelLangLocal, toastChecker } from "../../../../../custom/function"
import { hours } from "./_const"
import { useDispatch } from "react-redux";
import { saveTabAction } from "../../../../../redux/actions"
// import {postResponse} from "../../../../../hooks/response_get"
const Index = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState( { success: '', error: ''})
    const [stateCurr, setStateCurr] = useState({idK:null, currency:null})
    const [items, setItems] = useState([])
    const [postCollect, setPostCollect] = useState([])
    const [item, setItem] = useState(null)
    const [post, setPost] = useState( { success: '', error:'', loading: false})
    useEffect( () => { getResponse( common.personal.edit.cost, setGetData ) }, [ ] )
    useEffect(()=>{
        if(getData.success!==''){
            let clone = getData?.success?.data?.map(values=>{
                return{
                    ...values,
                    cost_per_day:values?.cost_per_day || 0,   
                    cost_per_hour:values?.cost_per_hour || 0,   
                    work_time_per_day:values?.work_time_per_day || 0,   
                    currency_per_day:values?.currency_per_day || 'sum',
                    currency_per_hour: values?.currency_per_hour || 'sum',
                }
            })
            
            setItems(clone)
            setPostCollect(clone)
        }
    },[getData])
    // console.log(items)
    // useEffect(()=>{
    //     if(item.hasOwnProperty('idK'))
    //     setItem(items[item.idK-1])
    // },[item.idK])
    useEffect(()=>{
        // console.log(postCollect)
        // console.log(stateCurr)
        // console.log(item)
        let clone = items
        if(item?.idK) clone[item?.idK-1][item?.field] = item?.value
        if(stateCurr?.idK) clone[stateCurr?.idK-1][stateCurr?.field] = stateCurr?.value
        setItems(clone)
        
        // console.log(clone)
        // if(postCollect.length > 0){
        //     let clone = postCollect
        //     clone[item?.idK-1] = {...items[item.idK-1],  ...item}
        //     setPostCollect(clone)
        // }
    },[item, stateCurr])
    // console.log(stateCurr)
    const handleSubmit = ()=>{
        setPost({...post, loading: true})
        console.log(items)
        let postData = items?.map((prev)=>{
            return{
                id:prev?.id,
                cost_per_day:parseFloat(prev?.cost_per_day),
                cost_per_hour:parseFloat(prev?.cost_per_hour),
                currency_per_day:prev?.currency_per_day?.value || prev?.currency_per_day,
                currency_per_hour:prev?.currency_per_hour?.value || prev?.currency_per_hour, 
                work_time_per_day:prev?.work_time_per_day?.value  || prev?.work_time_per_day,
            }
        })
        console.log(postData)
        postResponse('/api/translators/edit/cost/', postData, setPost)
    }
    useEffect(() => {
        toastChecker(post)
        if (post?.success !== '') dispatch(saveTabAction(6))
    }, [post])
    // console.log(postCollect)
    return (
        <Wrapper>
            {
                 getData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> :
                 items?.length>0 ?
                 items?.map((prev, index)=>(
                    <Container key={ index }>
                        <Grid container spacing={1} justifyContent="space-between"  alignItems="center">
                            <Grid item xs={12} sm={ 6 } md={4} lg={3}>
                                <TextLabeledLoop label="Tillar" value={(getLabelLangLocal(prev?.from_language)+"->"+getLabelLangLocal(prev?.to_language) || null)}/>
                            </Grid>
                            <Grid item xs={12} sm={ 6 } md={3} lg={3}>
                                <PriceCurrency prev={prev} setStateCurr={setStateCurr} stateCurr={stateCurr} defaultCost={prev?.cost_per_hour} defaultCurr={prev?.currency_per_hour} setState={setItem} state={item} idK={index+1} fieldS='currency_per_hour' fieldIn="cost_per_hour" title="Bir soatlik xizmat narxi" />
                            </Grid>
                            <Grid item xs={12} sm={ 6 } md={3} lg={3}>
                                <PriceCurrency prev={prev} setStateCurr={setStateCurr} stateCurr={stateCurr} defaultCost={prev?.cost_per_day} defaultCurr={prev?.currency_per_day} setState={setItem} state={item} idK={index+1} fieldS='currency_per_day' fieldIn="cost_per_day" title="Bir kunlik xizmat narxi" />
                            </Grid>
                            <Grid item xs={12} sm={ 6 } md={2} lg={2}>
                                <SelectLabel prev={prev['work_time_per_day']} options={hours} field="work_time_per_day" setCollect={setItem} collect={item} idK={index+1} width="100%" label="Kuniga necha soat" placeholder="24" />
                            </Grid>
                        </Grid>
                        
                    </Container>
                 ))  : <div style={{textAlign:'center', marginTop:30}}>Narxlar bo'limi bilan ishlash uchun tillarni kiriting..</div>              
                
            }
                    <Container width="100%" padding="10px 20px" margin="20px 0 0 15px" textAlign="right">
                        <Button loader={post?.loading} onClick={handleSubmit}>Saqlash</Button>
                    </Container>
        </Wrapper>
    )
}

export default Index
