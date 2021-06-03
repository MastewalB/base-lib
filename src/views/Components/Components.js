import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionTabs from "./Sections/SectionTabs.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "./Sections/SectionBasics.js";

import styles from "assets/jss/material-kit-react/views/components.js";
// import { Link } from "react-router-dom";
// import HomeIcon from "@material-ui/icons/Home";
// ==========================For the header====================================
import Button from "components/CustomButtons/Button.js";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/grid";
// import GridItem from "@material-ui/core/griditem";
// ============================================================================

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Base-Lib"
        rightLinks={
          <Grid className={classes.list}>
            <GridItem className={classes.listItem}>
              <Button
                style={{ marginRight: 25 }}
                href="/login-page"
                variant="outline-danger"
                color="primary"
                round
              >
                Login
              </Button>
              <Button
                href="/signup-page"
                className={classes.navLink}
                variant="outline-danger"
                color="primary"
                round
              >
                Signup
              </Button>
            </GridItem>
          </Grid>
        }
      />
      {/* End of header */}
      <Parallax image={require("assets/img/bg4.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Studying Redefined</h1>
                <h3 className={classes.subtitle}>
                  Get all the new school materials faster than ever.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionTabs />
      </div>
      {/* <div style={{ position: "Absolute", bottom: "0px", width: "100%" }}>
        <Footer />
      </div> */}
      <Footer />
    </div>
  );
}
