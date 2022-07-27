import React from 'react'
import TabMenu from "../../../components/organism/tab.inner.menu"
import {tabs, tabsWriter} from "./list.of.tab"
import {Wrapper} from "./style"
const Index = () => {
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) )
    return (
        <Wrapper>
            <TabMenu tabs={getRole?.role === 'writer' ? tabsWriter : tabs}/>
        </Wrapper>
    )
}
export default Index
