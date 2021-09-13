import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Wrapper, Container } from './index.style'
import Authorization from './auth.component'
import Registration from "./reg.component"

function TabPanel ( props ) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `full-width-tabpanel-${ index }` }
            aria-labelledby={ `full-width-tab-${ index }` }
            { ...other }
        >
            {value === index && (
                <Box p={ 3 }>
                    <Typography>{ children }</Typography>
                </Box>
            ) }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps ( index ) {
    return {
        id: `full-width-tab-${ index }`,
        'aria-controls': `full-width-tabpanel-${ index }`,
    };
}

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        height: 'auto',
        fontFamily:'Montserrat',
    },
    indicator: {
        backgroundColor: "#326A32",
    },
    tab:{
        color:'red'
    }
} ) );

export default function FullWidthTabs () {
    const classes = useStyles();
    const theme = useTheme();
    const [ value, setValue ] = React.useState( 1 );

    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };

    const handleChangeIndex = ( index ) => {
        setValue( index );
    };
    return (
        <Wrapper>
            <Container>
                <div className={ classes.root }>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={ value }
                            onChange={ handleChange }
                            variant="fullWidth"
                            TabIndicatorProps={{ className: classes.indicator }}
                            aria-label="full width tabs example"
                        >
                            <Tab label={ <span style={value === 0 ? {color:'#326A32'}:{color:'#666'}} >Kirish</span> } { ...a11yProps( 0 ) } />
                            <Tab label={ <span style={value === 1 ? {color:'#326A32'}:{color:'#666'}}>Registratsiya</span> } { ...a11yProps( 1 ) } />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
                        index={ value }
                        animateHeight
                        onChangeIndex={ handleChangeIndex }
                    >
                        <div value={ value } index={ 0 } dir={ theme.direction }>
                            <Authorization/> 
                        </div>
                        <div value={ value } index={ 1 } dir={ theme.direction }>
                            <Registration/> 
                        </div>
                    </SwipeableViews>
                </div>
            </Container>
        </Wrapper>
    );
}


