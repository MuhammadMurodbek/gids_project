import React from 'react';
import { Wrapper, Wrapper01, Wrapper02 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "../../../components/atom/button";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
 
import click from '../../../assets/img/advertasing/click400.svg';
import payme from '../../../assets/img/advertasing/payme400.svg';
import paynet from '../../../assets/img/advertasing/paynet400.svg';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <Wrapper01>
            <Wrapper02>
                <TextTitle className="text-title" bottom="70px" top="70px">
                    Xisobni to‘ldirish
                </TextTitle>
                <Grid container spacing={1} justifyContent="ceneter"
                    className="grid__02"
                >
                    <Grid item md="4">
                        <FormControl component="fieldset">

                            <RadioGroup
                                aria-label="gender"
                                name="radio-buttons-group"
                            >
                                <div className='div-Radio'>
                                    <FormControlLabel className='chack' name="a1" value="6 000 so‘m" control={<Radio className='chack' />} label="6 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a2" value="12 000 so‘m" control={<Radio />} label="12 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a3" value="28 000 so‘m" control={<Radio />} label="28 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a4" value="48 000 so‘m" control={<Radio />} label="48 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a5" value="92 000 so‘m" control={<Radio />} label="92 000 so‘m" />
                                </div>

                            </RadioGroup>
                        </FormControl>


                    </Grid>
                    <Grid item md="4">
                        <FormControl component="fieldset">

                            <RadioGroup
                                aria-label="gender"
                                name="radio-buttons-group"
                            >
                                <div className='div-Radio'>
                                    <FormControlLabel className='chack' name="a1" value="6 000 so‘m" control={<Radio />} label="6 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a2" value="12 000 so‘m" control={<Radio />} label="12 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a3" value="28 000 so‘m" control={<Radio />} label="28 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a4" value="48 000 so‘m" control={<Radio />} label="48 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a5" value="92 000 so‘m" control={<Radio />} label="92 000 so‘m" />
                                </div>

                            </RadioGroup>
                        </FormControl>


                    </Grid>
                    <Grid item md="4">
                        <FormControl component="fieldset">

                            <RadioGroup
                                aria-label="gender"
                                name="radio-buttons-group"
                            >
                                <div className='div-Radio'>
                                    <FormControlLabel className='chack' name="a1" value="6 000 so‘m" control={<Radio />} label="6 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a2" value="12 000 so‘m" control={<Radio />} label="12 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a3" value="28 000 so‘m" control={<Radio />} label="28 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a4" value="48 000 so‘m" control={<Radio />} label="48 000 so‘m" />
                                </div>
                                <div className="div-Radio-02">
                                    <FormControlLabel name="a5" value="92 000 so‘m" control={<Radio />} label="92 000 so‘m" />
                                </div>

                            </RadioGroup>
                        </FormControl>


                    </Grid>
                </Grid>

                <TextTitle className="text-title" bottom="70px" top="70px">
                    To‘lov turini tanlang
                </TextTitle>


                <Grid container spacing={1}  >
                    <Grid item md="10" className="cashlok ">
                        <div>
                            <div className="pay">
                                <CheckCircleIcon className="icon-g" />
                                <ImgContainer src={click} />
                            </div>
                        </div>
                        <div>
                            <div className="pay pay2">
                                <CheckCircleOutlineIcon className="icons-w" />
                                <ImgContainer src={payme} />

                            </div>
                        </div>
                        <div>
                            <div className="pay pay2">
                                <CheckCircleOutlineIcon className="icons-w" />
                                <ImgContainer src={paynet} />

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Wrapper02>

            <div className="payment">
                <div className="btn-group">
                   <Link to="/reklama"> <Button className="btn-pey" margin="30px 0" type="outlined">   Ortga qaytish</Button></Link>
                    <Button className="btn-pey" margin="30px 0"  >Hisobni to’ldirish</Button>
                </div>
            </div>
        </Wrapper01>
    )
}
