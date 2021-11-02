import React from 'react'
import { Wrapper } from './style'
import InDate from '../../components/molecules/dateIn'
import MyRequests from '../../components/organism/request';
import noDataImg from "../../assets/img/undraw/no_data.svg"
import Spinner from "../../components/atom/loading.spinner.line"
export default function Index({success}) {
    const array_data = success?.data?.results
    return (
        <Wrapper>
            {
                success === "" ? <Spinner width={50} height={50}/>:
                <>
                    <InDate />
                    {
                        array_data.length > 0 ?
                        <MyRequests
                            id="#071364754"
                            manzil="London shahridagi klinikada ikki soat davomida tarjima."
                            name="Abdug’ani"
                            gpss="Angliya, London "
                            dan="23.01.2021"
                            gacha="30.01.2021"
                            sana="20.06.21"
                        />
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
