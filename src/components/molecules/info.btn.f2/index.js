import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {WrapperInfoBtn} from "./style"
import {useHistory} from "react-router-dom"
// import { Link } from 'react-router-dom';aaaaaa
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "../../atom/button"
import { useTranslation } from 'react-i18next';
// import { Badge} from 'antd';
// const mediaFlex = {
//     m_m_width:'600px',
//     m_align_items:'right'
// }
const mediaButton = {
    m_m_width_btn:'200px',
    m_width_btn:'600px',
}
const mediaUser = {
    m_width:'600px',
    m_display:'none'
}
const Index = ({data}) => {
    const {t} = useTranslation()
    const history = useHistory()
    const handleClick = (id, role) => {
        history.push(`/seeprofile?id=${id}&role=${role}`)
        window.scrollTo(0,0)
    }
    // console.log(data)

    function totop(){
        window.scrollTo(0,0)
    }
    return (
        <WrapperInfoBtn>
            <FlexContainer  width="100%" height="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                <FlexContainer {...mediaUser} width="auto" alignItems="center" justifyContent="center" className="fl-container">
                    <CheckCircleOutlineIcon style={data?.is_confirmed ? {}:{color:'#ccc'}} className="icon"/>
                    <FlexContainer width="auto" alignItems="center" className="count"><VisibilityIcon/>{" "}{data?.view || '0'}</FlexContainer>
                </FlexContainer>
                
                    <Button {...mediaButton} className="btnChooseGids" onClick={()=>handleClick(data?.id, data?.role)}  width="100%">
                     {t("Gid_Tanlash.korish")} 
                     </Button>
            </FlexContainer>
        </WrapperInfoBtn>
    )
}

export default Index
