import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Divider from "@material-ui/core/Divider";
// import PropTypes from "prop-types";
// import Box from "@material-ui/core/Box";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
// import Grid from "@material-ui/core/grid";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

// @material-ui/icons
// core components

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
        </div>
        <GridContainer justify="center">
          {/* First row  */}
         

        </GridContainer>
      </div>
    </div>
  );
}
