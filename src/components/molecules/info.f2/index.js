import React from 'react'
import {WrapperInfoF2} from "./style"
import {FlexContainer} from "../../../styles/flex.container"
import ImgContainer from "../img.container"
import starImg from "../../../assets/img/choosegid/star1.svg"
import extraImg from "../../../assets/img/choosegid/extra.svg"
import comment from "../../../assets/img/choosegid/comment.svg"
import { Grid } from '@material-ui/core'
import {useTranslation} from 'react-i18next'

const Index = ({data, commentCount}) => {
    const {t} = useTranslation()
    // console.log(data?.currency_per_day)
    const curr = (item) => {
        // console.log(item)
        if(item === 'dollar') return '$'
        else if(item === 'sum') return 'S'
        else if(item === 'ruble') return 'R'
        else if(!item) return ''

    }
    const pay = (item) => {
        if(item) return Math.trunc(item)
        else return '0'
    }
    // console.log(commentCount, commentReview)
    return (
        <WrapperInfoF2> 
            <FlexContainer width="auto" alignItems="center" justifyContent="flex-start" flexDirection="column">
                <Grid container spacing={1} className="info-item">
                    <Grid item sm={3}><ImgContainer src={starImg} width="30px"/></Grid>
                    <Grid item sm={9}><span>{t("Gid_Tanlash.rate")}: {commentCount?.average || '0'}</span>/5</Grid>
                </Grid>
                <Grid container spacing={1} className="info-item">
                    <Grid item sm={3}><ImgContainer src={comment} width="30px"/></Grid>
                    <Grid item sm={9}><span>{t("Gid_Tanlash.fikirlar")}</span><div className="comment_count"></div> {" "}{commentCount?.all || '0'}</Grid>
                </Grid>
                <Grid container spacing={1} className="info-item">
                    <Grid item sm={3}><ImgContainer src={extraImg} width="30px"/></Grid>
                    <Grid item sm={9} style={{display:'flex'}}>
                        <span>{t("Gid_Tanlash.kuniga")}{" "}</span>
                        <div className="c_per_day">{pay(data?.cost_per_day)+" "+curr(data?.currency_per_day) || '0'}</div>
                    </Grid>
                </Grid>
            </FlexContainer>
        </WrapperInfoF2>
    )
}

export default Index
