import React, { useState } from 'react'
import { Wrapper, ComponentTwo, Title, TextColor, Takliflar, Savollar, ContainerLast } from './index.style';
import Button from "../../components/button";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { FlexContainer } from '../../styles/flex.container';
import ImgContainer from '../../components/img.container';
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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        fontWeight: '600',
        fontSize: '20'
    }
}));

export default function Index() {
    const classes = useStyles();

    return (
        <div>
            <Wrapper>
                <ComponentTwo>
                    <Grid container spacing={1} direction="row">
                        <Grid item md={6} sm={12}>
                            <div className="container-2-1">
                                <Title> O'z shahringizda <TextColor>Tarjimon</TextColor>  yoki <TextColor>Git</TextColor> sifatida ro'yxatdan o'ting</Title>
                                <FlexContainer width="370px" justifyContent="space-between">
                                    <Button type="outlined">Ro'yhatdan o'tish</Button>
                                </FlexContainer>
                            </div>
                        </Grid>
                        <Grid justifyContent="center" item md={6} sm={12}>
                            <ImgContainer src={img1} width="500px" />
                        </Grid>
                    </Grid>
                </ComponentTwo>

                <Takliflar>
                    <TextTitle top="100px" bottom="100px">
                        Biz nima taklif qilamiz
                    </TextTitle>
                    <Grid container spacing={1} direction="row">
                        <Grid className="text1" item md={4} sm={12}>
                            <ImgContainer src={taklif1} />
                            <h2 className="texttitle">Bepul ro‘yhattan o‘ting </h2>
                            <p className="text">Siz o'zingizning profilingizni to'ldirasiz va shaxsiy sahifangizni olasiz. Bu tez, oson va bepul.</p>
                        </Grid>
                        <Grid className="text1" item md={4} sm={12}>
                            <ImgContainer src={taklif2} />
                            <h2 className="texttitle">Platforma yordamida mijozlar toping </h2>
                            <p className="text">Siz shuningdek aktual so’rovlar ro'yxatini ko'rishingiz va sizga mos keladigan mijozlarga javob berishingiz mumkin.</p>
                        </Grid>
                        <Grid className="text1" item md={4} sm={12}>
                            <ImgContainer src={taklif3} />
                            <h2 className="texttitle">O’z karyerangizni boshlang!</h2>
                            <p className="text">Mijozlarga yaxshi xizmat ko’rsatgan xolda, ijobiy  fikirlar oling va rivojlaning.</p>
                        </Grid>
                    </Grid>
                </Takliflar>

                <Savollar>
                    <TextTitle top="100px" bottom="100px">
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
                        <TextTitle width="50%" left="auto" right="auto" bottom="40px">Xoziroq ro’yhattan o’ting, ma’lumotlaringizni to’ldiring va o’z karyerangizni boshlang!</TextTitle>
                        <FlexContainer width="380px" margin="0 auto" alignItems="center" justifyContent="center">
                            <Button className="button-s">Ariza qoldirish</Button>
                        </FlexContainer>
                    </div>
                </ContainerLast>

            </Wrapper>
        </div>
    )
}
