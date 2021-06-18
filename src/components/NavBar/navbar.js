import React from 'react';
import GridItem from 'components/Grid/GridItem.js';
import Grid from '@material-ui/core/grid';
import Button from 'components/CustomButtons/Button.js';
import Header from 'components/Header/Header.js';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


import styles from 'assets/jss/material-kit-react/components/headerStyle.js';


import axios from '../../../src/views/axios'
const useStyles = makeStyles(styles);

function Navbar() {
	const history = useHistory();
	const classes = useStyles();
	function logoutFunc(e) {
		e.preventDefault()
		localStorage.removeItem('user');
		console.log("LOG")
		localStorage.removeItem('userType');
		localStorage.removeItem('REACT_TOKEN_AUTH');
		history.push('/')
		axios.post('/auth/logout').then(res => {
			console.log("LOG")
			console.log(res)
			localStorage.removeItem('user');
			localStorage.removeItem('userType');
			localStorage.removeItem('REACT_TOKEN_AUTH');
			history.push('/')

		}).catch((e) => {
			console.log("ERR")
			console.log(e.response)
		})
	}
	return (
		<React.Fragment>
			<Header
				brand="Base-Lib"
				rightLinks={
					<Grid className={classes.list}>
						<GridItem className={classes.listItem}>
							{!localStorage.getItem('user') && (
								<React.Fragment>
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
								</React.Fragment>
							)}

							{localStorage.getItem('user') && (
								<React.Fragment>
									<Button
										style={{ marginRight: 25 }}
										onClick={logoutFunc}
										variant="outline-danger"
										color="primary"
										round
									>
										Logout
									</Button>
									{localStorage.getItem('user') && (
										<Button
											href="/admin"
											className={classes.navLink}
											variant="outline-danger"
											color="primary"
											round
										>
											Settings
										</Button>
									)}
								</React.Fragment>
							)}
						</GridItem>
					</Grid>
				}
			/>
		</React.Fragment>
	);
}

export default Navbar;
