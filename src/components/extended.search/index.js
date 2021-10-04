import React from 'react'
import {Wrapper} from './index.style'
import RadioGroup from "./radio" 
import Selection from "./select.with.title"
import CalendarComponent from "./data.with.title"
import CheckBoxContainer from "./checkbox.width.title"
import Button from "./button.component"
import DoubleRadio from "../molecules/double.radio.labeled"
const Index = () => {
    return (
        <Wrapper width="350px">
            <div className="title-header">Kengaytirilgan qidiruv</div>
            <RadioGroup/>   
            <Selection title="Davlat" placeholder="Davlat kiriting"/>
            <Selection title="Shahar" placeholder="Shahar kiriting"/>
            <CalendarComponent title="Sana" />
            <CalendarComponent/>
            <DoubleRadio name1="Onlayn" name2="Barchasi"/>
            <Selection title="Til"/>
            <CheckBoxContainer name1="Erkak" name2="Ayol"/>
            <div className="button-wrapper">
                <Button width="280px" name="Qidiruv"/>
            </div>
        </Wrapper>
    )
}

export default Index
