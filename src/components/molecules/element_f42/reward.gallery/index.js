import React from 'react'
import {Wrapper} from './style'
import ImageContainer from '../../../molecules/img.container'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Image } from 'antd';

const Index = ({data}) => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <div style={{margin:"10px 0", fontWeight:'bold', fontSize:'15px'}}>
                {t("GidPk.sertificat")}
            </div>
            {
                (data && data?.length>0) ? 
                <Grid container spacing={2}>
                    {
                        data?.map((item,index) => (
                            <Grid key={index} item xs={12} sm={6}>
                                <Image 
                                    width="100%" 
                                    src={item?.image} 
                                />
                            </Grid>
                        ))
                    }
                </Grid>:<div>Rasmlar yuklanmagan</div>
            }
           
        </Wrapper>
    )
}

export default Index
