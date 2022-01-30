import React, {useState,useEffect} from 'react'
import { getResponse } from "../../hooks/response_get"
import { Wrapper} from './index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import InDate from '../../components/molecules/dateIn'
import Button from "../../components/atom/button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Requests from '../../components/organism/request/';
import {useTranslation} from 'react-i18next';
import moment from 'moment'
import Spinner from "../../components/atom/loading.spinner.line"

export default function Index() {
 
    const {t} = useTranslation()
    const [ articleList, setArticleList ] = useState( [] )
    const [state, setState] = useState({success:'', error:'', loading: false})
    const [callback, setCallback] = useState(false)
    const [collect, setCollect] = useState({date_after:'', date_before:'', country:'', city:''})
    useEffect(() =>{
        getResponse(`/api/users/applications/?country=${collect?.country}&city=${collect?.city}&date_after=${collect?.date_after}&date_before=${collect?.date_before}`, setState, true)
    },[callback])
    useEffect( () => {
        if ( state?.success )
        {
            setArticleList( state.success?.data?.results )
        }
    }, [ state ] )
    return (
        <Wrapper> 
        
            <TextTitle top="100px" bottom="50px">
               {t("arizalar_royhati.title")}
            </TextTitle>
             
            <InDate url="request" setCallback={setCallback} collect={collect} setCollect={setCollect} url="request"/>
           {
               state?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />:
               articleList?.map((item,index) =>(
                <Requests 
                key={index}
                id={item.id}
                item={item}
                manzil={item.why_need}
                name={item?.full_name?.first_name + " " + item?.full_name?.last_name}
                gpss={item?.country_name?.uz + " "+ item?.city_name?.uz}
                dan={item?.start_date}
                gacha={item?.end_date}
                sana={moment(item.created_at).format("DD.MM.YYYY")}
            />
            
               ))
           }
             
            <div className="divbtns">
                <Button type="outlined" className="davomi">{t("arizalar_royhati.davomi")} <ArrowForwardIcon className="arrovicon"/></Button>
            </div>
        </Wrapper>
    )
}
