import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
// import CustomInput from "components/CustomInput/CustomInput.js";
import Input from '@material-ui/core/Input';

// import Grid from "@material-ui/core/grid";

import styles from 'assets/jss/material-kit-react/views/signupPage.js';

import image from 'assets/img/signup.jpg';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from '../axios';

const useStyles = makeStyles(styles);

export default function LoginPage() {
	const history = useHistory();
	const [ cardAnimaton, setCardAnimation ] = React.useState('cardHidden');
	setTimeout(function() {
		setCardAnimation('');
	}, 700);
	const classes = useStyles();
	const [ values, setValues ] = React.useState({
		email: '',
		password: '',
		cpassword: '',
		fname: ''
	});
	function handleSubmit(e) {
		e.preventDefault();
		console.log(values);
		axios
			.post(`authenticate`, {
				email: values.email,
				password: values.password,
				firstName: values.fname,
				lastName: values.fname
			})
			.then((res) => {
				console.log(res.data);
				history.push(`/login-page`);
			});
	}
	return (
		<div>
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: 'url(' + image + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'top center'
				}}
			>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={4}>
							<Card className={classes[cardAnimaton]}>
								<form className={classes.form} onSubmit={handleSubmit}>
									<CardHeader color="primary" className={classes.cardHeader}>
										<h4>SignUp</h4>
									</CardHeader>
									<p className={classes.divider}>
										already have an account?
										<Link to="/login-page"> Login</Link>
									</p>
									<CardBody>
										<Input
											placeholder="First Name"
											type="text"
											required
											value={values.fname}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													fname: e.target.value
												}));
											}}
										/>
										{/* <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    /> */}
										<Input
											placeholder="Email"
											type="email"
											required
											value={values.email}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													email: e.target.value
												}));
											}}
										/>

										<Input
											placeholder="Password"
											type="password"
											required
											value={values.password}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													password: e.target.value
												}));
											}}
										/>

										<Input
											placeholder="Confirm password"
											type="password"
											required
											value={values.cpassword}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													cpassword: e.target.value
												}));
											}}
										/>

										{/* <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    /> */}
										{/* <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Confirm Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    /> */}
									</CardBody>
									<CardFooter className={classes.cardFooter}>
										<Button simple color="primary" size="lg" type="submit">
											Sign Up
										</Button>
									</CardFooter>
								</form>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				<div style={{ position: 'Absolute', bottom: '0px', width: '100%' }}>
					<Footer whiteFont />
				</div>
			</div>
		</div>
	);
}
