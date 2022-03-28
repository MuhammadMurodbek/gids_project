import React, { useEffect, useState } from 'react'
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Wrapper } from "./index.style"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getResponse } from "../../../hooks/response_get"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const getRole = JSON.parse(localStorage.getItem("user_token"));
const Index = ({ role }) => {


    const [getData, setGetData] = useState({ success: '', error: '', loading: false })
    const history = useHistory()
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    let url = getRole?.role === 'simple_user' ? '/api/users/edit/' : `/api/${getRole?.role}s/edit/about/`
    useEffect(() => { getResponse(url, setGetData) }, [])

    function topTo(){
        window.scrollTo(0,0)
        // console.log("ishladi");
    }

    const menu = (
        <Menu style={{ position: "relative", right: 40, top: 8, width: 150 }}>
            <Menu.Item key="0">
                <Link to={role === 'simple_user' ? '/gid-personal?tab=0' : `/gid-personal-wider?tab=0`} onClick={topTo}>
                    <span  style={{display:"flex"}}  >
                        <AssignmentIndIcon 
                        style={{color:"#326A32", marginRight:"10px" }}
                        />
                        <span  >
                            Prof
                        </span>
                    </span>
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={() => {
                history.push('/auth')
                localStorage.removeItem('user_token')
            }}>
                <span  style={{display:"flex"}} >
                    <LogoutIcon style={{color:"#326A32", marginRight:"10px" }} />
                    <span>
                        Chiqish
                    </span>
                </span>
            </Menu.Item>
        </Menu>
    );
    return (
        <Wrapper>
            <Dropdown overlay={menu} trigger={['hover']} placement="bottomLeft">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span style={{ position: 'relative', left: '-35px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ position: 'relative', top: 1, right: 8, fontSize: '20px' }}>
                            <UserOutlined />
                        </span>
                        <span style={{ fontSize: '13.5px', display: 'flex', flexDirection: 'column', lineHeight: '14px' }}>
                            <span>
                                {getData?.success?.data?.first_name || "first name"}
                            </span>
                            <span>
                                {getData?.success?.data?.last_name || "last name"}
                            </span>
                        </span>
                    </span>
                    {/* <DownOutlined /> */}
                </a>
            </Dropdown>
        </Wrapper>
    )
}

export default Index
