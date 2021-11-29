import React, {useEffect, useState} from 'react'
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Wrapper} from "./index.style"
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import {getResponse} from "../../../hooks/response_get"
const Index = ({role}) => {
    const [getData, setGetData] = useState({ success: '', error: '', loading: false})
    const history = useHistory()
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    let url = getRole?.role === 'simple_user' ? '/api/users/edit/about/':`/api/${getRole?.role}s/edit/about/`
    useEffect(()=>{getResponse(url, setGetData)},[])
    const menu = (
        <Menu style={{position: "relative", right:15, top:8, width:140}}>
            <Menu.Item key="0">
                <Link to={role==='simple_user' ? '/gid-personal':`/gid-personal-wider?name=${getData?.success?.data?.first_name}&last_name=${getData?.success?.data?.last_name}`}>My profile</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
               <span onClick={() =>{
                   history.push('/auth')
                   localStorage.clear()
               } }>Log out</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <Wrapper>
            <Dropdown overlay={ menu } trigger={ [ 'hover' ] } placement="bottomLeft">
                <a className="ant-dropdown-link" onClick={ e => e.preventDefault() }>
                    <span style={{ position:'relative', left:'-10px', display: 'flex', alignItems:'center' }}>
                        <span style={{position:'relative', top:2, right:8, fontSize: '20px'}}><UserOutlined /></span>
                        <span style={{fontSize: '13.5px', display: 'flex', flexDirection: 'column', lineHeight: '14px'}}>
                            <span>{getData?.success?.data?.first_name || "first name"}</span>
                            <span>{getData?.success?.data?.last_name || "last name"}</span>
                        </span>
                    </span> 
                    {/* <DownOutlined /> */}
                </a>
            </Dropdown>
        </Wrapper>
    )
}

export default Index
