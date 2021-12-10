import React,{ useState } from 'react'
import { Wrapper } from './style'
import Translator from "./translator.index"
import GidIndex from "./gid.index"
import SelectLabeled from "../../../../components/molecules/select.labeled"
import TextLabeled from "../../../../components/molecules/input.labeled"
import { Grid } from '@material-ui/core'
import { FlexContainer } from '../../../../styles/flex.container'
import { Container } from '../../../../styles/container/index.style'
import { TextTitle } from '../../../../styles/textTitle/index.style'
import DoubleRadioLabel from "../../../../components/molecules/double.radio.labeled"
import {option_yes, option_yes_sec, objDefault} from "./_const"
import MultiValueInput from '../../../../components/molecules/multivalue.input'
import Todos from "./todo.writer"
const Index = () => {
    const [state, setState] = useState(objDefault)
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    // console.log(state)

    return (
        <Wrapper>

            {getRole?.role === 'gid' ? <GidIndex/> : null}

             {
                getRole?.role === 'writer'
                    ?
                    <div>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextLabeled setState={setState} state={state} field="daily_workload" width="100%" sizeLabel="15px" placeholder="Text" label="Bir kunlik ish hajmingiz" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Container padding="37px 0 0" position="relative" top="-22px">
                                    <TextTitle font="15px" align="left" top="0" bottom="-10px" color="#262626">Siz og'zaki tarjima ham qilasizmi?</TextTitle>
                                    <FlexContainer width="100%" gap="10px">
                                        <SelectLabeled setCollect={setState} collect={state} field="can_oral_translate" options={option_yes} width="100%" sizeLabel="15px" placeholder="Tanglang" />
                                        <SelectLabeled setCollect={setState} collect={state} field="oral_translate_type" options={option_yes_sec} width="100%" placeholder="Tanlang" />
                                    </FlexContainer>
                                </Container>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={4}><DoubleRadioLabel value1="yes" value2="no" sizeLabel="14px" setState={setState} state={state} field="express_order" name1="Ha" name2="Yo'q" label="Shoshilinch buyurtmalarni bajarasizmi?" /></Grid>
                            <Grid item xs={12} sm={6} md={4}><DoubleRadioLabel value1="yes" value2="no" sizeLabel="14px" setState={setState} state={state} field="weekend_order" name1="Ha" name2="Yo'q" label="Dam olish kunlari buyurtmalarni bajarasizmi?" /></Grid>
                            <Grid item xs={12} sm={6} md={4}><DoubleRadioLabel value1="yes" value2="no" sizeLabel="14px" setState={setState} state={state} field="edit_text" name1="Ha" name2="Yo'q" label="Siz matnlarni tahrirlash bilan ham shug'ullanasizmi?" /></Grid>
                        </Grid>
                        <Grid container spacing={1} style={{marginTop:20}}>
                            <Grid item xs={12} md={4}>
                                <Container padding="37px 0 0" position="relative" top="-22px">
                                    <TextTitle font="15px" align="left" top="0" bottom="-10px" color="#262626">Internetga doimiy kirish imkoningiz bormi?</TextTitle>
                                    <FlexContainer width="100%" gap="10px">
                                        <SelectLabeled setCollect={setState} collect={state} field="always_online" options={option_yes} width="100%" sizeLabel="15px" placeholder="Tanlang" />
                                        <div style={{fontSize:12, marginTop:20}}>*shu jumladan katta hajmdagi fayllarni qabul qila olasizmi?</div>
                                        {/* <SelectLabeled setCollect={setState} collect={state} field="oral_translate_type" options={option_yes_sec} width="100%" placeholder="Ketma ket" /> */}
                                    </FlexContainer>
                                </Container>
                                {/* <SelectLabeled label="Internetga doimiy kirish imkoningiz bormi?" setCollect={setState} collect={state} field="always_online" options={option_yes} width="100%" sizeLabel="15px" placeholder="Ha" /> */}
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <TextTitle font="15px" align="left" top="15px" bottom="-20px" left="20px" color="#262626">Internetga doimiy kirish imkoningiz bormi?</TextTitle>
                                <MultiValueInput setState={setState} state={state} field="cat_programmes"/>
                            </Grid>
                        </Grid>
                        <Todos state={state}/>
                    </div>
                    : null
            }
            {
                getRole?.role !== 'translator'?
                null
                :
                <Translator />
            }

        </Wrapper>
    )
}

export default Index
