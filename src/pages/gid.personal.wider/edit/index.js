import React from 'react'
import TabMenu from "../../../components/organism/tab.inner.menu"
import {tabs} from "./list.of.tab"
import {Wrapper} from "./style"
const Index = () => {
    return (
        <Wrapper>
            <TabMenu tabs={tabs}/>
        </Wrapper>
    )
}

export default Index
