import React from 'react'
import { Tabs } from 'antd';
import {Wrapper, Container} from "./index.style"
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import Authorization from "./auth.component"
import Registration from "./reg.component"

const Index = () => {
    const { TabPane } = Tabs;
    return (
        <Wrapper>
            <Container>
            <Tabs defaultActiveKey="2" centered tabBarStyle={{color:'yellow'}} >
                <TabPane
                    tab={
                        <span>
                            <AppleOutlined />
                            Kirish
                        </span>
                    }
                    key="1"
                >
                    <Authorization/>
                </TabPane>
                    <TabPane
                        tab={
                            <span>
                            <AndroidOutlined />
                            Registratsiya
                            </span>
                        }
                        key="2"
                    >
                        <Registration/>
                </TabPane>
            </Tabs>,
            </Container>
        </Wrapper>
    )
}

export default Index


