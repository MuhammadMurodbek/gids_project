import React from 'react'
import { Wrapper } from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { FlexContainer } from "../../../../styles/flex.container"
import cheked from '../../../../assets/img/boglanish/cheked.svg'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import {getLabelCountrySecond, getLabelCity} from "../../../../custom/function"

const Index = ({data, role}) => {
    const { t } = useTranslation()
    // const getRole = JSON.parse(localStorage.getItem("user_token"))
    const obj = {
        no:'Mening mavzuyim emas',
        great:"A'lo darajada",
        good:"Yaxshi darajada",
        low:'Quyi darajada',
    }
    // console.log(data)
    return (
        <Wrapper>
            <Title text="Xizmatlar" />

            {
               role === 'writer' ?

                    (
                        <>
                            <Text title="Bir kunlik ish xajmim:" text={" " +data?.daily_workload} /> <br /><br />
                            <Text title="Tdaladigaarjima qilish uchun foyn CAT dasturlarim:" text={data?.cat_programmes?.map(a=>" "+a+",")} />
                            <FlexContainer width="70%" margin="15px 0">
                                <Grid container spacing={1} className="gridCon">
                                    <Grid item md={6} className="as">
                                        {
                                            data?.is_freelancer ? <>
                                            <img src={cheked} alt="adfdd" className="classed" /> <Text title="Freelanserlik" /><br /></>:null
                                        }
                                        {
                                            data?.edit_text ? <><img src={cheked} alt="adfdd" className="classed" /> <Text title="Matnlarni tahrirlash" /></>:null
                                        }
                                    </Grid>
                                    <Grid item md={6} >
                                        {
                                            data?.express_order ? <>
                                            <img src={cheked} alt="adfdd" className="classed" /> <Text title="Shoshilinch buyurtma" /></>:null
                                        }
                                        {
                                            data?.weekend_order ? <>
                                            <img src={cheked} alt="adfdd" className="classed" /> <Text title="Dam olish kunida ishlash" /><br /></>:null
                                        }
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <Text title="Mavzular:" />
                            {
                                data?.themes?.map((prev, index)=>(
                                    <Text key={index} display="block" text={prev?.name +"-"+ obj[prev?.level]} />
                                ))
                            }
                        </>
                    )
                    : null
            }
            {
               role === 'translator' ?
                    (<>
                        <img src={cheked} alt="adfdd" className="classed" /> <Text title=" Sinxron" /><br />
                        <Text title="Mavzular:" />
                        {
                            data?.themes?.map((prev, index)=>(
                                <Text key={index} display="block" text={prev?.name +"-"+ obj[prev?.level]} />
                            ))
                        }
                    </>)
                    : null
            }

            {
               role === 'gid' ?
                    (
                        <>

                            <FlexContainer width="70%" margin="15px 0">
                                <Grid container spacing={1} className="gridCon">
                                    <Grid item md={6} className="as">
                                        {data?.excursions?.length>0 ? 
                                            <FlexContainer margin="0 0 10px">
                                                <img src={cheked} alt="adfdd" className="classed" />
                                                <Text title="Ekskursiyalar" /><br />
                                            </FlexContainer>
                                        : null}
                                        {
                                            data?.consecutive_translate ? 
                                            <FlexContainer margin="0 0 10px">
                                                <img src={cheked} alt="adfdd" className="classed" />
                                                <Text title="Og'zaki tarjima (ketma-ket)" />
                                            </FlexContainer>:null
                                        }
                                    </Grid>
                                    <Grid item md={6} >
                                        {
                                            data?.synchronous_translate ? 
                                            <FlexContainer margin="0 0 10px">
                                                <img src={cheked} alt="adfdd" className="classed" />
                                                <Text title="Sinxron tarjima" /><br />
                                            </FlexContainer>:null
                                        }
                                        {
                                            data?.written_translate ? 
                                            <>
                                                <img src={cheked} alt="adfdd" className="classed" />
                                                <Text title="Izchil tarjima" />
                                            </>:null
                                        }
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <div class="box">
                                <Text title="Ekskursiyalar : " />
                                <div class="box_child">
                                    {   
                                        data?.excursions?.length>0 ?
                                        data?.excursions?.map((prev, index)=>(
                                            <span key={index}>{prev?.city +"-"+ prev?.country}</span>
                                        )):<div>Malumot kiritilmagan</div>
                                    }
                                </div>
                            </div>
                        </>
                    )
                    : null
            }
        </Wrapper>
    )
}

export default Index