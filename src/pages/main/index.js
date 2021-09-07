import React from 'react'
// import { FlexContainer } from '../../styles/flex.container'
import {WrapperAll} from "./index.style"
// import MainPicture from "../../assets/img/mainFirst.svg"
// import SecPicture from "../../assets/img/sec_con.svg"
// import Select from '../../components/select'
// import Calendar from '../../components/calendar'
// import Button from "../../components/button"
import ExtSearch from "../../components/extended.search"

const Index = () => {
    return (
        <WrapperAll>
            {/* <RadioComponent/> */}
            <ExtSearch/>
            hello
            {/* <ComponentOne>
               <FlexContainer width="100%" alignItems="flex-start" justifyContent="space-between">
                    <div className="container_one">
                        <div className="container_one-inner"> 
                            <span className="title">Kengaytirilgan qidiruv</span>
                            <div>
                                <span>Kim kerakligini tanlang</span>
                                <div>
                                    <span><input type="radio"/>Gid</span>
                                    <span><input type="radio"/>Tarjimon</span>
                                    <span><input type="radio"/>Yozma tarjimon </span>
                                </div>
                            </div>
                            <div>
                                <span>Davlat</span>
                                <div><Select/></div>
                            </div>
                            <div>
                                <span>Davlat</span>
                                <div><Select/></div>
                            </div>
                            <div>
                                <span>Sana</span>
                                <div><Calendar/></div>
                                <div><Calendar/></div>
                            </div>
                            <div>
                                <span><input type="radio" />Onlayn</span>
                                <span><input type="radio" />Barchasi</span>
                            </div>
                            <div>
                                <span>Til</span>
                                <div><Select/></div>
                            </div>
                            <div>
                                <span><input type="checkbox"/>Erkak</span>
                                <span><input type="checkbox"/>Ayol</span>
                            </div>
                            <div>
                                <Button>Qidirish</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container_two">
                        <h2>Dunyo bo'ylab ishonchli gidlar va tarjimonlarni taklif qilamiz</h2>
                        <div>
                            <img src={MainPicture} alt="asdad"/>
                        </div>
                    </div>
                </FlexContainer> 
            </ComponentOne>
            <ComponentTwo>
                <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <img src={SecPicture} alt="guvd"/>
                    </div>
                </FlexContainer>
            </ComponentTwo> */}
        </WrapperAll>
    )
}

export default Index
