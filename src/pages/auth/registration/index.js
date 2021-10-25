import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { mainGreen } from "../../../styles/global/colors";
import Authorization from "./auth.component";
import Registration from "./reg.component";
import {Wrapper, Container} from "./index.style"
import Loading from "../../../components/atom/loading.spinner.line"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: "auto",
    fontFamily: "Montserrat",
  },
  indicator: {
    backgroundColor:'red',
  },
  tab: {
    color: "red",
  },
}));

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

export default function BasicTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Wrapper>
          <Container>
            <Box sx={{ width: "100%", margin: "0 auto" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                style={{ width: "100%" }}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: mainGreen
                   }
                  }}
                >
                <Tab
                    label={
                    <span
                        style={value === 0 ? { color: mainGreen } : { color: "#666" }}
                    >
                        Kirish
                    </span>
                    }
                    style={{ width: "50%" }}
                    {...a11yProps(0)}
                />
                <Tab
                    label={
                    <span
                        style={value === 1 ? { color: mainGreen } : { color: "#666" }}
                    >
                        Registratsiya
                    </span>
                    }
                    style={{ width: "50%" }}
                    {...a11yProps(1)}
                />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Authorization />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Registration />
            </TabPanel>
            </Box>
          </Container>
      </Wrapper>
  );
}
