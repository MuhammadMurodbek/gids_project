import React, {useState} from 'react'
import { Wrapper} from './index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import InDate from '../../components/molecules/dateIn'
import Button from "../../components/atom/button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Requests from '../../components/organism/request/';
import {useTranslation} from 'react-i18next'
export default function Index() {

    const {t} = useTranslation()
    const [collect, setCollect] = useState()
    return (
        <Wrapper> 
            <TextTitle top="100px" bottom="50px">
               {t("arizalar_royhati.title")}
            </TextTitle>
            
            <InDate url="request" collect={collect} setCollect={setCollect}/>
            <Requests
                id="#071364754"
                manzil="London shahridagi klinikada ikki soat davomida tarjima."
                name="Abdug’ani"
                gpss="Angliya, London "
                dan="23.01.2021"
                gacha="30.01.2021"
                sana="20.06.21"
            />
            <Requests
                id="#071364754"
                manzil="London shahridagi klinikada ikki soat davomida tarjima."
                name="Abdug’ani"
                gpss="Angliya, London "
                dan="23.01.2021"
                gacha="30.01.2021"
                sana="20.06.21"
            />
            <Requests
                id="#071364754"
                manzil="London shahridagi klinikada ikki soat davomida tarjima."
                name="Abdug’ani"
                gpss="Angliya, London "
                dan="23.01.2021"
                gacha="30.01.2021"
                sana="20.06.21"
            />
            <Requests
                id="#071364754"
                manzil="London shahridagi klinikada ikki soat davomida tarjima."
                name="Abdug’ani"
                gpss="Angliya, London "
                dan="23.01.2021"
                gacha="30.01.2021"
                sana="20.06.21"
            />
            <Requests
                id="#071364754"
                manzil="London shahridagi klinikada ikki soat davomida tarjima."
                name="Abdug’ani"
                gpss="Angliya, London "
                dan="23.01.2021"
                gacha="30.01.2021"
                sana="20.06.21"
            />
            <Requests
                id="#071364754"
                manzil="London shahridagi klinikada ikki soat davomida tarjima."
                name="Abdug’ani"
                gpss="Angliya, London "
                dan="23.01.2021"
                gacha="30.01.2021"
                sana="20.06.21"
            />


            <div className="divbtns">
                <Button type="outlined" className="davomi">{t("arizalar_royhati.davomi")} <ArrowForwardIcon className="arrovicon" /></Button>
            </div>

        </Wrapper>
    )
}
