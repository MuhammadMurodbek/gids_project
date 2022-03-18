import { Wrapper } from './style'
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router'
import {searchToObject} from "../../../custom/function"
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0)
  const { tabs } = props
  const history = useHistory()
  const token = JSON.parse(localStorage.getItem('user_token'))
  const handleChange = (event, newValue) => {
    setValue(newValue)
    if(token?.role === 'simple_user'){
      history.push(`/gid-personal?tab=${newValue}`)
    }else{
      history.push(`/gid-personal-wider?tab=${newValue}`)
    }
  }
  var query = searchToObject(window.location.search)
  // console.log(query)
  return (
    <Wrapper>
      <Box sx={{ width: '100%',minHeight:'70vh' }}>
        <Box className="tabs-wrapper">
          <Tabs
            value={parseInt(query.tab)}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabs-item"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{
              style: {
                  // backgroundColor:mainGreen,
                  display: "none",
              },
            }}
          >
            {tabs.length > 0
              ? tabs.map((item, index) => (
                  <Tab
                    key={index}
                    style={{minWidth:'150px'}}
                    label={item.label}
                    {...a11yProps(index)}
                    className={parseInt(query.tab) === index ? 'active' : 'text-transform'}
                  />
                ))
              : null}
          </Tabs>
        </Box>
        {tabs.length > 0
          ? tabs.map((item, index) => (
              <TabPanel key={index} value={parseInt(query.tab)} index={index} className="tab-panel">
                {item.component}
              </TabPanel>
            ))
          : null}
      </Box>
    </Wrapper>
  )
}
