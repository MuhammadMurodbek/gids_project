import React, {useEffect} from 'react'
import {Wrapper} from "./style"
import {Tabs,TabsWriter2} from "./list.of.tab"
import TabMenu from "../../components/organism/tabmenu"
import {useHistory} from "react-router-dom"
import {Modal} from "antd"
const Index = () => {
    const history = useHistory()
    let query = window.location.search
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    useEffect(()=>{
        if(query.includes('octo_status=succeeded')){
            history.push('/reklama')
            Modal.success({title:"To'lovingiz muvaffaqqiyatli amalga oshirildi !!!"})
        }
    },[])
    return (
        <Wrapper>
            <TabMenu tabs={getRole?.role === 'writer' ? TabsWriter2() : Tabs()} value={2}/>
        </Wrapper>
    )
}

export default Index
