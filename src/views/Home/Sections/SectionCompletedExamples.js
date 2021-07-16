import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>About US </h2>
            <h4>
            New technology is changing the ways we create, access and use information. The design and development of digital libraries depend on computer, communication and other technical skills. Successful digital libraries leading to a global digital environment can only happen when enough practitioners have the skills to design, build and manage them. 
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
