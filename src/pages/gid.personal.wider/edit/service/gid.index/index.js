import React,{useState, useEffect} from 'react'
import { Wrapper } from './style'
import { Container } from "../../../../../styles/container/index.style"
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import DoubleCheck from "../../../../../components/molecules/double.check"
import { FlexContainer } from '../../../../../styles/flex.container'
import { Grid } from '@mui/material'
import SelectLabeled from "../../../../../components/molecules/select.labeled"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import Button from "../../../../../components/atom/button"
import {checkDisabled} from "./_func"
import TextLabeledLoop from "../../../../../components/atom/text.labeled"
import { useTranslation } from 'react-i18next'
import { get_cities } from "../../../../../custom/function";
import { countries } from "../../../../../custom/constants";
import uuid from 'react-uuid'
const GidIndex = () => {
    const { t } = useTranslation()
    const [state, setState] = useState([]);
    const [clearValue, setClearValue] = useState(false)
    const [value, setValue] = useState({country:'', city:''})
    const [getData, setGetData] = useState({success:'', error:''})
    const [postData,setPostData] = useState({success:'', error:'', loading: false})
    const [checkItems, setCheckItems] = useState({excursion:false,consecutive_translate:false, synchronous_translate:false, written_translate:false})
    const {excursion} = checkItems
    const handleAdd = () => {
       setState([...state,{country:value?.country?.label, city:value?.city?.label}])
       setValue({country:'', city:''})
       setClearValue(true)
    }
    const handleDelete = (index) => {
        let clone = state.filter(item => item !== index)
        setState(clone)
    }
    useEffect(() => {
        if(!excursion){
            setValue({country:'', city:''})
            setClearValue(true)
        }
    },[excursion])
    console.log(checkItems)
    return (
        <Wrapper>
            <Container margin="30px 0 0" padding="10px 0">
                <TextTitle font="15px" align="left">{ t( "xizmatlar.xizmatlar" ) }</TextTitle>
                <FlexContainer width="100%" gap="50px">
                    <DoubleCheck flexDirection="column"
                        field1="excursion"
                        field2="consecutive_translate" 
                        name1="Excursions"
                        name2="Consecutive Translator"
                        setState={setCheckItems}
                        state={checkItems}
                    />
                    <DoubleCheck flexDirection="column"
                        field1="synchronous_translate"
                        field2="written_translate"
                        name1="Synchronous Translator"
                        name2="Writer Translator"
                        setState={setCheckItems}
                        state={checkItems}
                    />
                </FlexContainer>
                <Container padding="10px 0" margin="10px 0" textAlign="right">
                    <>
                        {
                            state.map( ( item, index ) => (
                                <>
                                    <Grid container spacing={ 1 } key={ index }>
                                        <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                                            <TextLabeledLoop label={ t( "TillarniBilish.til" ) } value={ item?.country } />
                                        </Grid>
                                        <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                            <TextLabeledLoop label={ t( "TillarniBilish.bilishDarajasi" ) } value={ item?.city } />
                                        </Grid>
                                        <Grid item xs={ 12 } sm={ 12 } md={ 1 }>
                                            <FlexContainer width="100%" alignItems="flex-end" margin="44px 0 0 0">
                                                <Button
                                                    paddingIcon="10px"
                                                    type="outlined"
                                                    margin="1px 10px 0 0px"
                                                    onClick={ () => handleDelete( item ) }
                                                >
                                                    <DeleteIcon className="icon" />
                                                </Button>
                                            </FlexContainer>
                                        </Grid>
                                    </Grid>

                                </>
                            ) )
                        }

                        <Grid container spacing={ 1 } >
                            <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                                <SelectLabeled
                                    setClearValue={ setClearValue }
                                    clearValue={ clearValue }
                                    options={ countries }
                                    collect={ value }
                                    isDisabled={!checkItems?.excursion}
                                    setCollect={ setValue }
                                    field="country"
                                    sizeLabel="15px"
                                    width="100%"
                                    marginLabel="12px 0"
                                    label={ t( "TillarniBilish.bilishDarajasi" ) }
                                    placeholder={ t( "TillarniBilish.BilishDPlace" ) }
                                />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                <SelectLabeled
                                    setClearValue={ setClearValue }
                                    clearValue={ clearValue }
                                    collect={ value }
                                    setCollect={ setValue }
                                    isDisabled={ !value?.country.hasOwnProperty('cities')}
                                    options={value?.country?.cities ? get_cities(value?.country?.cities) : null}
                                    field="city"
                                    sizeLabel="15px"
                                    width="100%"
                                    marginLabel="12px 0"
                                    label={ t( "TillarniBilish.bilishDarajasi" ) }
                                    placeholder={ t( "TillarniBilish.BilishDPlace" ) }
                                />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 12 } md={ 1 }>
                                <FlexContainer width="100%" alignItems="flex-end" margin="46px 0 0 0">
                                    <Button paddingIcon="10px" onClick={ handleAdd }>
                                        <AddIcon className="icon" />
                                    </Button>
                                </FlexContainer>
                            </Grid>
                        </Grid>
                    </>
                    {/* <Grid container spacing={1}>
                        <Grid item xs={10} sm={10} md={11}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px"
                                     label={t("xizmatlar.mamalakatlargaEkskurs")}
                                     placeholder={t("xizmatlar.mamlakatPlace")} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px" label={t("xizmatlar.shaharlar")}
                                    placeholder={t("xizmatlar.shaharlarSelect")} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1}>
                            <Button paddingIcon="10px" margin="30px">
                                <AddIcon className="icon" />
                            </Button>
                           
                        </Grid>
                    </Grid>
                    <Button paddingIcon="10px" margin="-2px">
                        <AddIcon className="icon" />
                    </Button> */}

                </Container>
                <Container padding="10px 0" margin="20px 0" textAlign="right">
                    <Button>{ t( "xizmatlar.save" ) }</Button>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default GidIndex
