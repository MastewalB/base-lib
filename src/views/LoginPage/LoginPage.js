import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import axios from '../axios';
import { useHistory } from 'react-router-dom';

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

import styles from 'assets/jss/material-kit-react/views/loginPage.js';
// import Grid from "@material-ui/core/grid";
import { Link } from 'react-router-dom';

import image from 'assets/img/bg7.jpg';
// import axios from 'axios';

const useStyles = makeStyles(styles);

export default function LoginPage() {
	const history = useHistory();
	const [ cardAnimaton, setCardAnimation ] = React.useState('cardHidden');
	const [ values, setValues ] = React.useState({
		userName: '',
		password: ''
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log(values);
		axios
			.post(`auth/login`, {
				username: values.userName,
				password: values.password
			})
			.then((res) => res.data)
			.then((res) => {
				localStorage.setItem('REACT_TOKEN_AUTH', res.token);
				console.log(res)
				
				if (res.role === 'user') {
					localStorage.setItem('user', res.id);
					localStorage.setItem('userType', 'user');

					history.push('/');
				} else {
					localStorage.setItem('user', res.id);

					localStorage.setItem('userType', 'admin');

					history.push('/admin');
				}
			}).catch((e)=>{
				if(e.response.data.Message==="Already logged in"){
					history.push('/');
				}
				console.log(e.response)
			})
	}
	setTimeout(function() {
		setCardAnimation('');
	}, 700);
	const classes = useStyles();
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
										<h4>Login</h4>
									</CardHeader>
									<p className={classes.divider}>
										You don&apos;t have an account?
										<Link to="/Signup-page"> SignUp</Link>
									</p>
									<CardBody>
										<Input
											placeholder="Username"
											type="text"
											required
											value={values.userName}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													userName: e.target.value
												}));
											}}
										/>
										{/* <CustomInput
                      labelText="Email..."
                      id="email"
                      onChange={(e) => {
                        setValues((values) => ({
                          ...values,
                          email: e.target.value,
                        }));
                      }}
                      value={values.email}
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
                      value={values.password}
                      onChange={(e) => {
                        console.log("rer");
                        setValues((values) => ({
                          ...values,
                          password: e.target.value,
                        }));
                      }}
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
										{/* <Icon className={classes.inputIconsColor}>
                      lock_outline
                    </Icon> */}
									</CardBody>
									<CardFooter className={classes.cardFooter}>
										<Button simple color="primary" size="lg" type="submit">
											Log in
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
