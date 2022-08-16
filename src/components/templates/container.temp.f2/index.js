import React from 'react'
import ContainerMap from "../../organism/container.f2"
import { Wrapper } from "./style"
import NoDataPage from "../../templates/no.data.page.js"
import { Badge } from 'antd';

const Index = ({ data, type }) => {
    return (
        <Wrapper>
            {
                data?.results?.length > 0 ?
                    <>
                        {
                            data?.results?.map((item, index) => (
                                <div key={index}>
                                    {
                                        item?.is_top ?
                                            <Badge.Ribbon text="TOP" color="red">
                                                <ContainerMap data={item} type={type} />
                                            </Badge.Ribbon> :
                                            <ContainerMap data={item} type={type} />
                                    }
                                </div>
                            ))
                        }
                    </>
                    : (<h4 style={{ width: "100%", textAlign: "center" }}><NoDataPage /></h4>)
            }

        </Wrapper>
    )
}

export default Index
