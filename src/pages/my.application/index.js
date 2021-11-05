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
                                    id={item?.id}
                                    manzil={item?.why_need}
                                    name={item?.full_name?.first_name + " " + item?.full_name?.last_name}
                                    gpss={item?.country + " " + item?.city}
                                    dan={item?.start_date}
                                    gacha={item?.end_date}
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
