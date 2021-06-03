import React from 'react'
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/grid";
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

function Navbar() {
    const classes = useStyles();
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Navbar
