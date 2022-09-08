import React from 'react'
import { Wrapper, ComponentTwo, TextColor, Takliflar, Savollar, ContainerLast } from './index.style';
import Button from "../../components/atom/button";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImgContainer from '../../components/molecules/img.container';
import img1 from '../../assets/img/forgits/img1.svg';
import taklif1 from '../../assets/img/forgits/taklif1.svg'
import taklif2 from '../../assets/img/forgits/taklif2.svg'
import taklif3 from '../../assets/img/forgits/taklif3.svg'
import { TextTitle } from '../../styles/textTitle/index.style';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { mediaTextField, mediaTextFieldSec, mediaImage, mediaBtn } from "../../custom/global.media.variables"
import { useTranslation } from 'react-i18next'
import './forgit.css'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
}));

export default function Index() {

    const { t } = useTranslation()
    const history = useHistory()
    const classes = useStyles();
    const btnType = { btnType: '' }
    return (
        <div>
            <Wrapper>
                <ComponentTwo>
                    <Grid container spacing={1} direction="row" className="grid_container">
                        <Grid item xs={12} md={6} sm={12}>
                            <div className="container-2-1">
                                <TextTitle {...mediaTextField} {...mediaTextFieldSec} align="left" bottom="30px" font="48px" lineHeight="56px">
                                    <p className='tilefor'>
                                      {t("gidlar_uchun.title")}
                                    </p>
                                </TextTitle>

                                <Link to="/auth">
                                    <Button {...mediaBtn} > {t("gidlar_uchun.royhatdanOtish")}</Button>
                                </Link>
                                {/* </FlexContainer> */}
                            </div>
                        </Grid>
                        <Grid justifyContent="center" item xs={12} md={6} sm={12}>
                            <ImgContainer {...mediaImage} src={img1} width="500px" />
                        </Grid>
                    </Grid>
                </ComponentTwo>

                <Takliflar>
                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} >
                        <p className='takliflar'>
                           {t("gidlar_uchun.takliflarimiz")}
                        </p>

                    </TextTitle>
                    <Grid container spacing={1} direction="row">
                        <Grid className="text1" item xs={12} md={4} sm={12}>
                            <ImgContainer src={taklif1} />
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} className="texttitle">{t("gidlar_uchun.bepul")}</TextTitle>
                            <p className="text">{t("gidlar_uchun.text01")}</p>
                        </Grid>
                        <Grid className="text1" item xs={12} md={4} sm={12}>
                            <ImgContainer src={taklif2} />
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} className="texttitle">{t("gidlar_uchun.mijozlar")} </TextTitle>
                            <p className="text">{t("gidlar_uchun.text02")} </p>
                        </Grid>
                        <Grid className="text1" item xs={12} md={4} sm={12}>
                            <ImgContainer src={taklif3} />
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} className="texttitle">{t("gidlar_uchun.boshlash")}</TextTitle>
                            <p className="text"> {t("gidlar_uchun.text03")} </p>
                        </Grid>
                    </Grid>
                </Takliflar>

                <Savollar>
                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="100px" bottom="100px">
                        {t("gidlar_uchun.kopSavollar")}
                    </TextTitle>

                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    <div className="title-S">{t("gidlar_uchun.royhatQanday")}</div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {t("gidlar_uchun.royhatUchun")}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>
                                    <div className="title-S">{t("gidlar_uchun.bepulmi")}</div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {t("gidlar_uchun.haBepul")}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>
                                    <div className="title-S">{t("gidlar_uchun.mijozlarT")}</div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {t("gidlar_uchun.topishMijoz")}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>
                                    <div className="title-S"> {t("gidlar_uchun.qandayTop")} </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {t("gidlar_uchun.topgaChiqish")}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Savollar>

                <ContainerLast>
                    <div className="application-last">
                        <TextTitle {...mediaTextField} {...mediaTextFieldSec} width="50%" left="auto" right="auto" bottom="40px">{t("gidlar_uchun.hoziroq")}</TextTitle>

                        <Link to="/auth">

                            <Button margin={"5px"} width="200px"  onClick={() => history.push('/gids')} {...mediaBtn}>{t("main.tanlash")}
                            </Button>
                            <Button type="outlined" margin={"5px"}  {...mediaBtn} className="button-s">{t("gidlar_uchun.royhatdanO")}</Button>

                        </Link>

                    </div>
                </ContainerLast>

            </Wrapper>
        </div>
    )
}
