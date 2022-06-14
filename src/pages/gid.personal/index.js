import React from 'react'
import {Wrapper} from "./style"
import {tabs} from "./list.of.tab"
import TabMenu from "../../components/organism/tabmenu"

const Index = () => {
    return (
        <Wrapper>
            <TabMenu tabs={tabs}/>
        </Wrapper>
    )
}

export default Index
