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
import { Pagination } from 'antd';

export default function Index() {
    const {t} = useTranslation()
    const [ articleList, setArticleList ] = useState( [] )
    const [state, setState] = useState({success:'', error:'', loading: false})
    const [callback, setCallback] = useState(false)
    const [collect, setCollect] = useState({date_after:'', date_before:'', country:'', city:''})
    const [ pagination, setPagination ] = useState( {current: 1} )
    const {current} = pagination
    useEffect(() =>{
        getResponse(`/api/users/applications/?page=${current}&country=${collect?.country}&city=${collect?.city}&date_after=${collect?.date_after}&date_before=${collect?.date_before}`, setState, true)
    },[callback, current])
    useEffect( () => {
        if ( state?.success )
        {
            setArticleList( state.success?.data?.results )
        }
    }, [ state ] )
    function onChange ( pageNumber ) {
        // history.push(`/gid-personal-wider?tab=3&page=${pageNumber}`)
        setPagination( { current: pageNumber} )
        window.scrollTo(0,0)
    }

console.log(articleList);
    

    return (
        <Wrapper> 
        
            <TextTitle top="100px" bottom="50px">
               {t("arizalar_royhati.title")}
            </TextTitle>
             
            <InDate url="request" setCallback={setCallback} collect={collect} setCollect={setCollect}  />
           {
               state?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />:
               articleList?.map((item,index) =>(
                <Requests 
                key={index}
                id={item.id}
                item={item}
                manzil={item.why_need}
                name={item?.full_name?.first_name + " " + item?.full_name?.last_name}
                gpss={item?.country_name?.uz + " | "+ item?.city_name?.uz}
                dan={item?.start_date}
                gacha={item?.end_date}
                sana={moment(item.created_at).format("DD.MM.YYYY")}
                
            />
 
            
            
            
            ))
           }
             <div className="pagination" style={{width:'100%', margin:'40px 0', textAlign:'center'}}>
                <Pagination current={current} onChange={ onChange } pageSize={6} total={ state?.success?.data?.count } />
            </div>
        </Wrapper>
    )
}
