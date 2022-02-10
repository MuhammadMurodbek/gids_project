import React from 'react'
import {Wrapper} from "./style"
import {tabs,tabsWriter2} from "./list.of.tab"
import TabMenu from "../../components/organism/tabmenu"

const Index = () => {

    const getRole = JSON.parse(localStorage.getItem("user_token"))

    return (
        <Wrapper>
             
            <TabMenu tabs={getRole?.role === 'writer' ? tabsWriter2 : tabs}/>
        </Wrapper>
    )
}

export default Index
