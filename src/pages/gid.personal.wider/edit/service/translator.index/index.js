import React, {useState} from 'react'
import {Wrapper} from "./style"
import External from "../todos"
import { Container } from '../../../../../styles/container/index.style'
import DoubleRadio from "../../../../../components/molecules/double.radio.labeled"
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation()
    const [state, setState] = useState({gender:''})
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    // console.log(state)
 
    return (
        <Wrapper>
 
        {
            getRole?.role  === 'translator' 
            ? 
            <Container padding="10px 0">
                <DoubleRadio 
                    setState={setState}
                    state={state}
                    sizeLabel="15px" 
                    field="gender"
                    label={t("xizmatlar.tarjima")} 
                    name1={t("xizmatlar.Izchil")} name2={t("xizmatlar.Sinxron")} 
                    value1="consecutive" value2="synchronous"
                    marginLabel="-10px 0 0 6px"
                    // defaultApiValue={}
                />
            </Container>
            : null
        }
            
            <External translateType={state} setTranslateType={setState}/>
         </Wrapper>
    )
}

export default Index
