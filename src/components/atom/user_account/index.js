import React from 'react'
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Wrapper} from "./index.style"
import {Link} from "react-router-dom"
const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to={'/request'}>My profile</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to={'/request'}>Apllications</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
           <span>Log out</span>
        </Menu.Item>
    </Menu>
);

const Index = () => {
    return (
        <Wrapper>
            <Dropdown overlay={ menu } trigger={ [ 'hover' ] } placement="bottomLeft">
                <a className="ant-dropdown-link" onClick={ e => e.preventDefault() }>
                    <span style={{ position:'relative', left:'-10px', display: 'flex', alignItems:'center' }}>
                        <span style={{marginRight: '5px', fontSize: '19px'}}><UserOutlined /></span>
                        <span style={{fontSize: '13px', display: 'flex', flexDirection: 'column', lineHeight: '12px'}}>
                            <span>Murodbek</span>
                            <span>Rahimjonov</span>
                        </span>
                    </span> 
                    {/* <DownOutlined /> */}
                </a>
            </Dropdown>
        </Wrapper>
    )
}

export default Index
