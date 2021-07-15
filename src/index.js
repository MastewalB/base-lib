import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/NavBar/navbar.js';
import './index.css';
import 'assets/scss/material-kit-react.scss?v=1.10.0';

// pages for this product
import Components from 'views/Components/Components.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import SignupPage from 'views/SignupPage/SignupPage.js';
import Courses from 'views/Courses/Courses.js';
import Books from 'views/Book/Book.js';
import Admin from 'views/Admin/Admin.js';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
var hist = createBrowserHistory();

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router history={hist}>
			<Navbar />
			<Switch>
				<Route path="/login-page" component={LoginPage} />
				<Route path="/signup-page" component={SignupPage} />
				<Route path="/courses" component={Courses} />
				<Route path="/books/:id" component={Books} />
				<Route path="/admin" component={Admin} />
				<Route path="/" component={Components} />
			</Switch>
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
);
