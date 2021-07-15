import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/admin.js';

import MenuSection from './Sections/MenuSection.js';

const useStyles = makeStyles(styles);

export default function LandingPage() {
	const classes = useStyles(); 
	return (
		<div>
			
			<Parallax filter image={require("assets/img/book.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Adminstrator</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
			<GridContainer className={classes.section}>
				<GridItem>
					<MenuSection  style={{position: 'fixed'}}/>
				</GridItem>
			</GridContainer>
			<Footer />
		</div>
	);
}
