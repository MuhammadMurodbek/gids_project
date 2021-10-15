// import * as React from "react";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import { Wrapper } from './style'
// import { mainGreen } from '../../../styles/global/colors'
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// export default function FullWidthTabs(props) {
//   const { tabs } = props;

//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Wrapper>
//       <Box sx={{ width: "100%"}}>
//         <AppBar position="static" className="appbar">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="inherit"
//             variant="fullWidth"
//             style={{width:'70%', margin:"0 auto", color:"#000", position:"relative"}}
//             aria-label="full width tabs example"
//             TabIndicatorProps={{
//                 style: {
//                   // backgroundColor:mainGreen
//                     display: "none",
//                 },
//               }}
//           >
//             {tabs.length > 0
//               ? tabs.map((item, index) => (
//                   <Tab
//                     key={index}
//                     label={item.label}
//                     {...a11yProps(index)}
//                     // style={{ padding:"5px 0"}}
//                     className={value === index ? "active":"text-transform"}
//                   />
//                 ))
//               : null}
//           </Tabs>
//         </AppBar>
//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={value}
//           // animateHeight
//           onChangeIndex={handleChangeIndex}
//         >
//           {tabs.length > 0
//             ? tabs.map((item, index) => (
//                 <div key={index} value={value} index={index} dir={theme.direction}>
//                   {item.component}
//                 </div>
//               ))
//             : null}
//         </SwipeableViews>
//       </Box>
//     </Wrapper>
//   );
// }

import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Wrapper>
      <Box sx={{ width: '100%' }}>
        <Box className="tabs-wrapper">
          <Tabs
            value={value}
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
                    style={{minWidth:'180px'}}
                    label={item.label}
                    {...a11yProps(index)}
                    className={value === index ? 'active' : 'text-transform'}
                  />
                ))
              : null}
          </Tabs>
        </Box>
        {tabs.length > 0
          ? tabs.map((item, index) => (
              <TabPanel key={index} value={value} index={index} className="tab-panel">
                {item.component}
              </TabPanel>
            ))
          : null}
      </Box>
    </Wrapper>
  )
}
