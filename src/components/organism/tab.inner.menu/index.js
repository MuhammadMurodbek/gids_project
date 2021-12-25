import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Wrapper } from "./style";
import {mainGreen} from "../../../styles/global/colors"
import {useSelector} from "react-redux"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { tabs } = props;
  const selector = useSelector(a=>a.saveTabReducer)
  // const getRole = JSON.parse(localStorage.getItem("user_token"))
  const [value, setValue] = React.useState(0);
  // console.log(tabs)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(selector)
  },[selector])
  // React.useEffect(()=>{
  //   if(getRole?.role === 'writer'){
  //     tabs.pop()
  //   }
  // },[])
  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{width: "100%"}}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{
                style: {
                    backgroundColor: mainGreen
                }
            }}
          >
            {tabs.length > 0
              ? tabs.map((item, index) => (
                  <Tab
                    key={index}
                    label={item.label}
                    disableRipple
                    style={{width:'130px'}}
                    style={value===index ? {color: mainGreen}:null}
                    {...a11yProps(index)}
                    className={value === index ? 'active' : 'text-transform'}
                  />
                ))
              : null}
          </Tabs>
        </Box>
        {tabs.length > 0
          ? tabs.map((item, index) => (
              <TabPanel key={index} value={value} index={index}>
                {item.component}
              </TabPanel>
            ))
          : null}
      </Box>
    </Wrapper>
  );
}
