import React from 'react'
import { Wrapper } from './style'
import InDate from '../../components/molecules/dateIn'
import MyRequests from '../../components/organism/request';
import noDataImg from "../../assets/img/undraw/no_data.svg"
import Spinner from "../../components/atom/loading.spinner.line"
import moment from "moment"
export default function   Index({success, setCollect, collect, setCallback}) {
    const array_data = success?.data?.results
    const lang = localStorage.getItem('i18nextLng')
    // console.log(array_data)
    return ( 
        <Wrapper>
            {
                success === "" ? <Spinner width={50} height={50}/>:
                <>
                    <InDate setCollect={setCollect} collect={ collect } setCallback={setCallback}/>
                    {
                        array_data?.filter(prev=>prev?.status === 'new')?.length > 0 ?
                            array_data?.filter(prev=>prev?.status === 'new')?.map((item, index)=>(
                                <MyRequests
                                    key={index}
                                    id={item?.id || 0}
                                    manzil={item?.why_need || ''}
                                    name={item?.full_name?.first_name || 'name' + " " + item?.full_name?.last_name || 'last name'}
                                    gpss={item?.country_name[lang] +" "+item?.city_name[lang] }
                                    dan={item?.start_date ||'00-00-0000'}
                                    gacha={item?.end_date || '00-00-0000'}
                                    sana={moment(item?.created_at).format('DD.MM.YYYY') || '00:00:00'}
                                />
                            ))
                        :<div className="wrapper_no_data">
                            <span>Ma'lumot topilmadi</span>
                            <img className="no_data_img" src={noDataImg} alt="sd"/>
                        </div>
                    }
                </>
            }
            
        </Wrapper>
    )
}
