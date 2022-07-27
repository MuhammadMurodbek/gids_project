import React from 'react'
import {Wrapper} from "./style"
import {Tabs} from "./list.of.tab"
import TabMenu from "../../components/organism/tabmenu"

const Index = () => {
    return (
        <Wrapper>
            <TabMenu tabs={Tabs()}/>
        </Wrapper>
    )
}

export default Index
