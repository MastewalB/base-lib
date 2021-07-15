
import {
  CardHeader,
  Divider, 
  TextField 
} from '@material-ui/core';

import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import swal from 'sweetalert';

import styles from 'assets/jss/material-kit-react/views/signupPage.js';

import { useHistory } from 'react-router-dom';
import axios from 'views/axios';
// import { ContactSupportOutlined } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export default function LoginPage() {
	const history = useHistory();
	const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
	setTimeout(function () {
		setCardAnimation('');
	}, 700);
	const classes = useStyles();
	const [values, setValues] = React.useState({
		email: 'abebe@gmail.com',
		password: '',
		cpassword: '',
		fname: 'abebe',
		lname: 'Tariku',
		uname: 'abetar'
	});
	function handleSubmit(e) {
		e.preventDefault();
		console.log(values);
		axios
			.post(`/auth/register`, {
				email: values.email,
				password: values.password,
				confirm_password: values.cpassword,
				first_name: values.fname,
				last_name: values.fname,
				username: values.uname
			})
				console.log("========================RESPONSE DATA==============================")
				.then((res) => {
				console.log(res.data);
				history.push(`/login-page`);
			}).catch((e) => {
				console.log("======================== ERROR ==============================")
				console.log(e)
				swal({
					title: 'Registration error',
					text: 'Please check your input and try again ',
					icon: 'warning',
					dangerMode: true
				});
				console.log(e.response)
			})
	}
	return (
		<div>
			<div xs={12} sm={12} md={12} justify="center">
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={10}>
							<Card className={classes[cardAnimaton]}>
              <CardHeader
                subheader="The information can be edited"
                title="Profile"
              />
              <Divider />
                
								<form  onSubmit={handleSubmit}>
									
									<CardBody>

                  <TextField
                    
                    label="First name"
                    type="text"
                    name="firstName"
                    onChange={(e) => {
                            console.log('ef');
                            setValues((values) => ({
                              ...values,
                              fname: e.target.value
                            }));
                          }}
                    value={values.fname.toLocaleUpperCase()}
                    
                  />

										<TextField
											label="Last Name"
											type="text"
											required
                      
                      
											value={values.lname}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													lname: e.target.value
												}));
											}}
										/>

										<TextField
											label="User name"
                      
											type="text"
                      fullWidth
											value={values.uname}
                      InputProps={{
                        readOnly: true,
                      }}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													uname: e.target.value
												}));
											}}
										/>
										<TextField
											label="Email"
                      fullWidth
                      
											type="email"
											value={values.email}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													email: e.target.value
												}));
											}}
										/>
										<TextField
											label="New Password"
											type="password"
                      
											value={values.password}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													password: e.target.value
												}));
											}}
										/>
										<TextField
											label="Confirm password"
                      
											type="password"
											value={values.cpassword}
											onChange={(e) => {
												console.log('ef');
												setValues((values) => ({
													...values,
													cpassword: e.target.value
												}));
											}}
										/>
					
									</CardBody>
									<CardFooter className={classes.cardFooter}>
										<Button color="rose" size="lg" type="submit">
											Save changes
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
