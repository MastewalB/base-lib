import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import ExtensionIcon from '@material-ui/icons/Extension';
import GetAppIcon from '@material-ui/icons/GetApp';
// import GetAppIcon from "@material-ui/icons/GetApp";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
// import Button from "components/CustomButtons/Button.js";
// For Download button
import axios from '../../axios';

const useStyles = makeStyles(styles);

export default function ProductSection({ id }) {
	const classes = useStyles();
	const [ Book, setBook ] = useState({
		id: 1,
		title: 'New World',
		description: 'best book'
	});
	useEffect(
		() => {
			axios.get(`books/${id}`).then((res) => {
				console.log(res.data)
				setBook(res.data);
			});
		},
		[ id ]
	);

	function resourceDownloadFunc() {
		console.log('Downloading');
		axios
			.get(`books/${id}/Download`, {
				responseType: 'blob'
			})
			.then((response) => {
				const url = window.URL.createObjectURL(new Blob([ response.data ]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', Book.book_file); //or any other extension
				document.body.appendChild(link);
				link.click();
			});
	}
	// const name = props.name;
	return (
		<div className={classes.section}>
			{console.log('id' + id)}
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<h2 className={classes.title}>{Book.title}</h2>
				</GridItem>
			</GridContainer>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Book Intended For"
							description="The course is for anyone who is interested in doing organisational research in ways that are more empowering for research participants and researchers. It is likely to be of interest to PhD, DBA and Masters students who are doing a research project or dissertation in management"
							icon={Chat}
							iconColor="info"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Material File extension"
							description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							icon={ExtensionIcon}
							iconColor="success"
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title="Abour the Author"
							description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							icon={PermIdentityIcon}
							iconColor="danger"
							vertical
						/>
					</GridItem>
				</GridContainer>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title} button />
						<h5 className={classes.description}>{Book.description}</h5>
					</GridItem>
					<GridItem xs={12} sm={12} md={8}>
						<h3 className={classes.title}>
							Download <GetAppIcon color="secondary" onClick={resourceDownloadFunc} />{' '}
						</h3>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
ProductSection.propTypes = {
	id: PropTypes.number
};
