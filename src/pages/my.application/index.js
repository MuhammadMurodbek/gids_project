import React from 'react'
import { Wrapper } from './style'
import InDate from '../../components/molecules/dateIn'
import MyRequests from '../../components/organism/request';
import noDataImg from "../../assets/img/undraw/no_data.svg"
import Spinner from "../../components/atom/loading.spinner.line"
export default function Index({success}) {
    const array_data = success?.data?.results
    console.log(array_data)
    return (
        <Wrapper>
            {
                success === "" ? <Spinner width={50} height={50}/>:
                <>
                    <InDate />
                    {
                        array_data.length > 0 ?
                            array_data.map((item, index)=>(
                                <MyRequests
                                    id={item?.id || 0}
                                    manzil={item?.why_need || ''}
                                    name={item?.full_name?.first_name || 'name' + " " + item?.full_name?.last_name || 'last name'}
                                    gpss={item?.country || 'country' + " " + item?.city || "city"}
                                    dan={item?.start_date ||'00-00-0000'}
                                    gacha={item?.end_date || '00-00-0000'}
                                    sana=""
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
