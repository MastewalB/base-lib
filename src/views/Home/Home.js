import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';

// sections for this page
import SectionBasics from './Sections/SectionBasics.js';

import styles from 'assets/jss/material-kit-react/views/components.js';
import SectionCompletedExamples from './Sections/SectionCompletedExamples.js';
import TeamSection from './Sections/TeamSection.js';
const useStyles = makeStyles(styles);

export default function Home() {
	const classes = useStyles();
	return (
		<div>
			{/* End of header */}
			<Parallax image={require('assets/img/bg4.jpg').default}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>Get All Your Materials in One Place </h1>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<div className={classNames(classes.main, classes.mainRaised)}>
                <SectionBasics/>
				<SectionCompletedExamples />
				<TeamSection />
			</div>
			<Footer />
		</div>
	);
}
