import React from 'react'
import { Wrapper, ComponentTwo, TextColor, Takliflar, Savollar, ContainerLast } from './index.style';
import Button from "../../components/atom/button";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FlexContainer } from '../../styles/flex.container';
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
import {mediaTextField, mediaTextFieldSec, mediaImage} from "../../custom/global.media.variables"
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
    const classes = useStyles();

    return (
        <div>
            <Wrapper>
                <ComponentTwo>
                    <Grid container spacing={1} direction="row" className="grid_container">
                        <Grid item xs={12}md={6} sm={12}>
                            <div className="container-2-1">
                                <TextTitle {...mediaTextField} {...mediaTextFieldSec} align="left" bottom="30px"  font="48px" lineHeight="56px"> O'z shahringizda <TextColor>Tarjimon</TextColor>  yoki <TextColor>Git</TextColor> sifatida ro'yxatdan o'ting</TextTitle>
                                {/* <FlexContainer width="370px" justifyContent="space-between"> */}
                                   <Link to="/auth"> 
                                    <Button type="outlined">Ro'yhatdan o'tish</Button>
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
                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="100px" bottom="100px">
                        Biz nima taklif qilamiz
                    </TextTitle>
                    <Grid container spacing={1} direction="row">
                        <Grid className="text1" item xs={12} md={4} sm={12}>
                            <ImgContainer src={taklif1} />
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} className="texttitle">Bepul ro‘yhattan o‘ting </TextTitle>
                            <p className="text">Siz o'zingizning profilingizni to'ldirasiz va shaxsiy sahifangizni olasiz. Bu tez, oson va bepul.</p>
                        </Grid>
                        <Grid className="text1" item xs={12} md={4} sm={12}>
                            <ImgContainer src={taklif2} />
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} className="texttitle">Platforma yordamida mijozlar toping </TextTitle>
                            <p className="text">Siz shuningdek aktual so’rovlar ro'yxatini ko'rishingiz va sizga mos keladigan mijozlarga javob berishingiz mumkin.</p>
                        </Grid>
                        <Grid className="text1" item xs={12} md={4} sm={12}>
                            <ImgContainer src={taklif3} />
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} className="texttitle">O’z karyerangizni boshlang!</TextTitle>
                            <p className="text">Mijozlarga yaxshi xizmat ko’rsatgan xolda, ijobiy  fikirlar oling va rivojlaning.</p>
                        </Grid>
                    </Grid>
                </Takliflar>

                <Savollar>
                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="100px" bottom="100px">
                        Ko’p beriladigan savollar
                    </TextTitle>

                    <div  >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Registratsiya be’pulmi?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Ha albatta.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Mijoz qanaday qilib topsam bo‘ladi?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>“Tekshirilgan” belgisini qanday qilib olsam bo’ladi?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Profilga qayerdan kirsam bo‘ladi?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Savollar>

                <ContainerLast>
                    <div className="application-last">
                        <TextTitle {...mediaTextField} {...mediaTextFieldSec} width="50%" left="auto" right="auto" bottom="40px">Xoziroq ro’yhattan o’ting, ma’lumotlaringizni to’ldiring va o’z karyerangizni boshlang!</TextTitle>
                        {/* <FlexContainer width="380px" margin="0 auto" alignItems="center" justifyContent="center"> */}
                           <Link to="/application-form"> 
                                <Button className="button-s">Ariza qoldirish</Button>
                           </Link>
                        {/* </FlexContainer> */}
                    </div>
                </ContainerLast>

            </Wrapper>
        </div>
    )
}
