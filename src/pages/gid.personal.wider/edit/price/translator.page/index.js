import React,{useEffect, useState} from 'react';
import { Wrapper } from './style';
import { Container } from "../../../../../styles/container/index.style"
import PriceCurrency from "./price.currency"
import SelectLabel from '../../../../../components/molecules/select.labeled'
import { Grid } from '@mui/material';
import TextLabeledLoop from "../../../../../components/atom/text.labeled"
import {getResponse} from "../../../../../hooks/response_get"
import Button from "../../../../../components/atom/button"
import { common } from "../../../../../custom/url"
import Spinner from "../../../../../components/atom/loading.spinner.line";
import {getLabelLangLocal, toastChecker} from "../../../../../custom/function"
import {hours} from "./_const"
import {postResponse} from "../../../../../hooks/response_get"
const Index = () => {
    const [getData, setGetData] = useState( { success: '', error: ''})
    const [postCollect, setPostCollect] = useState([])
    const [post, setPost] = useState( { success: '', error:'', loading: false})
    useEffect( () => { getResponse( common.personal.edit.language, setGetData ) }, [ ] )
    useEffect(()=>{
        if(getData.success!==''){
            setItems(getData?.success?.data)
            setPostCollect(getData?.success?.data?.map(a=>{return{id:a.id}}))
        }
    },[getData])
    const [items, setItems] = useState([])
    const [item, setItem] = useState({cost_per_hour: 0,currency_per_hour: {},cost_per_day: 0,currency_per_day: {},work_time_per_day: 0})
    useEffect(()=>{
        if(postCollect.length > 0){
            let clone = postCollect
            clone[item?.idK-1] = {...item, id:clone[item?.idK-1]?.id}
            setPostCollect(clone)
        }
    },[item])
    const handleSubmit = ()=>{
        setPost({...post, loading: true})
        let postData = postCollect?.map(item=>{
            return{
                id:item?.id,
                cost_per_day:parseInt(item?.cost_per_day),
                cost_per_hour:parseInt(item?.cost_per_hour),
                currency_per_day:item?.currency_per_day?.value,
                currency_per_hour:item?.currency_per_hour?.value, 
                work_time_per_day:item?.work_time_per_day?.value,
            }
        })
        // console.log(postData)
        postResponse('/api/translators/edit/cost/', postData, setPost)
    }
    useEffect(()=>{toastChecker(post)},[post])
    // console.log(postCollect)
    return (
        <Wrapper>
            {
                 getData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> :
                 items?.map((prev, index)=>(
                    <Container key={ index }>
                        <Grid container spacing={1} justifyContent="space-between"  alignItems="center">
                            <Grid item xs={12} sm={ 6 } md={4} lg={3}>
                                <TextLabeledLoop label="Tillar" value={(getLabelLangLocal(prev?.from_language)+"->"+getLabelLangLocal(prev?.to_language) || null)}/>
                            </Grid>
                            <Grid item xs={12} sm={ 6 } md={3} lg={3}>
                                <PriceCurrency setState={setItem} state={item} idK={index+1} fieldS='currency_per_hour' fieldIn="cost_per_hour" title="Bir soatlik xizmat narxi" />
                            </Grid>
                            <Grid item xs={12} sm={ 6 } md={3} lg={3}>
                                <PriceCurrency setState={setItem} state={item} idK={index+1} fieldS='currency_per_day' fieldIn="cost_per_day" title="Bir kunlik xizmat narxi" />
                            </Grid>
                            <Grid item xs={12} sm={ 6 } md={2} lg={2}>
                                <SelectLabel options={hours} field="work_time_per_day" setCollect={setItem} collect={item} idK={index+1} width="100%" label="Kuniga necha soat" placeholder="24" />
                            </Grid>
                        </Grid>
                        
                    </Container>
                 ))                
                
            }
            <Container width="100%" padding="10px 20px" margin="20px 0 0 0" textAlign="right">
                <Button loader={post?.loader} onClick={handleSubmit}>Saqlash</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
