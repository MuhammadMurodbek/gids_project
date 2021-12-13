import React from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useTranslation} from 'react-i18next'
import NoDataPage from "../../templates/no.data.page.js"

const Index = () => {
    const {t} = useTranslation()
    const getData = JSON.parse(localStorage.getItem('advanced_search')) || false
    console.log(getData)
    return (
        <Wrapper>
            {  
                getData?.results?.length>0 ?
                getData?.results.map((item, index) => (
                    <div key={index}>
                        <ContainerMap data={item}/>
                        <ButtonWrapper>
                            <Button type="outlined" className="arrow"> {t("Gid_Tanlash.davomi")} <ArrowForwardIcon/>  </Button>
                        </ButtonWrapper>
                    </div>
                )):(<h4 style={{width: "100%", textAlign: "center"}}><NoDataPage/></h4>)
            }
            
            
        </Wrapper>
    )
}

export default Index
