import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
// import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// import Button from 'components/CustomButtons/Button.js';
// import Grid from '@material-ui/core/grid';
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/book.js';

// Sections for this page
import ProductSection from './Sections/ProductSectionbook.js';
import { useParams } from 'react-router';
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function LandingPage() {
	const { id } = useParams();

	const classes = useStyles();
	return (
		<div>
			<Parallax filter image={require('assets/img/book.jpg').default}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>Book</h1>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ProductSection id={id} />
					{/* <TeamSection /> */}
					{/* <WorkSection /> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}
