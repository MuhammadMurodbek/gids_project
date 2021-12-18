import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {WrapperInfoBtn} from "./style"
import {useHistory} from "react-router-dom"
// import { Link } from 'react-router-dom';aaaaaa
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "../../atom/button"
import { useTranslation } from 'react-i18next';
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
    }
    // console.log(data)
    return (
        <WrapperInfoBtn>
            <FlexContainer  width="100%" height="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                <FlexContainer {...mediaUser} width="auto" alignItems="center" justifyContent="center" className="fl-container">
                    <CheckCircleOutlineIcon className="icon"/>
                    <FlexContainer width="auto" alignItems="center" className="count"><VisibilityIcon/>{" "}10</FlexContainer>
                </FlexContainer>
                {/* <Link> */}
                    <Button {...mediaButton} onClick={()=>handleClick(data?.id, data?.role)}  width="100%"> {t("Gid_Tanlash.korish")} </Button>
                {/* </Link> */}
            </FlexContainer>
        </WrapperInfoBtn>
    )
}

export default Index
