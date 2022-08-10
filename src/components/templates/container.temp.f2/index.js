import React, {useState} from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useTranslation} from 'react-i18next'
import NoDataPage from "../../templates/no.data.page.js"
import { Badge} from 'antd';

const Index = ({data, type}) => {
    const {t} = useTranslation()
    const getData = JSON.parse(localStorage.getItem('advanced_search')) || false
    // console.log(getData)
    return (
        <Wrapper>
            {  
                data?.results?.length>0 ?
                <>
                    {
                        data?.results.map((item, index) => (
                            <div key={index}>
                                {
                                    item.is_top ? 
                                    <Badge.Ribbon text="TOP" color="red">
                                        <ContainerMap data={item} type={type}/>
                                        
                                    </Badge.Ribbon>:
                                     <ContainerMap data={item} type={type}/>
                                }
                            </div>
                        ))
                    }
                </>
                :(<h4 style={{width: "100%", textAlign: "center"}}><NoDataPage/></h4>)
            }
            
        </Wrapper>
    )
}

export default Index
