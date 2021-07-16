import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SearchBar from 'material-ui-search-bar';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';

import axios from '../../axios.js';

const useStyles = makeStyles(styles);
// =====================styles for the search field============================================
export default function SectionBasics() {
	const classes = useStyles();
	const [searchItem, setSearchItem] = useState('');

	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		axios.get('books').then((res) => {
			console.log("BOOK")
			setBookList(res.data.Books);
		});
	}, [searchItem]);

	function searchFunc() {
		console.log(searchItem);
		console.log(bookList);

		const bookMatches = bookList.filter(book =>{
			book.title.includes(searchItem);
		});
		setBookList(bookMatches) 
	}

	return (
		<React.Fragment>
			<div className={classes.sections}>
				<div className={classes.container}>
					<div className={classes.title}>
						<h3>Search Material</h3>
					</div>
					<div className={classes.search}>
						<SearchBar
							onChange={(value) => setSearchItem(value)}
							onRequestSearch={searchFunc}
							style={{
								margin: '0 auto',
								maxWidth: 1200
							}}
						/>
					</div>
				</div>
			</div>

		</React.Fragment>
	);
}
