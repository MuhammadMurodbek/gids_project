import React from 'react'
import {Wrapper} from './style'
import noDataImg from "../../../assets/img/undraw/no_data.svg"
const Index = () => {
    return (
        <Wrapper>
            <div className="wrapper_no_data">
                <span>Ma'lumot topilmadi</span>
                <img className="no_data_img" src={ noDataImg } alt="sd" />
            </div>
        </Wrapper>
    )
}

export default Index
