import React, { useState } from 'react';
import axios from '../../axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Datetime from 'react-datetime';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import swal from 'sweetalert';
// import classNames from 'classnames';

// import styles1 from 'assets/jss/material-kit-react/components/customInputStyle.js';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
// import Divider from '@material-ui/core/Divider';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js';
// import { func } from 'prop-types';

const useStyles = makeStyles(styles);

export default function WorkSection() {
	const classes = useStyles();
	const [resourceToUpload, setResourceToUpload] = useState(null);
	const [addBook, setAddBook] = useState({
		title: '',
		isbn: '',
		author: '',
		publisher: '',
		publishDate: '',
		edition: 0,
		description: '',
		coverImg: '',
		skillLevel: 'beginner'
	});

	function addBookHandler(e) {
		const { name, value } = e.target;
		console.log(name);
		setAddBook({ ...addBook, [name]: value });
	}
	function addBookSubmit(e) {
		e.preventDefault();
		//console.log(addBook);
		//console.log(resourceToUpload)

		var book_data = {
			title: addBook.title,
			author: addBook.author,
			isbn: addBook.isbn,
			publisher: addBook.publisher,
			publishDate: addBook.publishDate.toString(),
			description: addBook.description,
			skillLevel: addBook.skillLevel
		}
		var files = new FormData();

		files.append('data', JSON.stringify(book_data));
		files.append('file', resourceToUpload);
		console.log(files.get('data'))


		axios
			.post(`books`, files,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						"Accept": 'application/json',
						'Access-Control': 'Allow-Origin',
						Authorization: `Bearer ${localStorage.getItem("REACT_TOKEN_AUTH")}`,

					}
				}

			)
			.then((res) => {
				//console.log(res);
				swal({
					title: 'Upload successful',
					text: res.title,
					icon: 'success',
					dangerMode: false
				});

				setAddBook({
					title: '',
					isbn: '',
					author: '',
					publisher: '',
					publishDate: '',
					edition: 0,
					description: '',
					coverImg: '',
					skillLevel: 'beginner'
				});
			}).catch((e) => {
				//console.log(localStorage.getItem("REACT_TOKEN_AUTH"))
				console.log(e.response)

			})
	}

	return (
		<div >

			<GridContainer cs={12} sm={12} md={12} justify="center"  className={classes.background}>
				<GridItem cs={12} sm={12} md={10}>
					<h2 className={classes.title}>Add Book</h2>
					<form onSubmit={addBookSubmit}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								
								<InputLabel className={classes.formlabel}>Title</InputLabel>

								<Input className={classes.forminput} id="title" fullWidth={true} name="title" onChange={addBookHandler} required />
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<InputLabel className={classes.formlabel}>Author</InputLabel>

								<Input 
									className={classes.forminput} 
									id="author" 
									fullWidth={true} 
									name="author" 
									onChange={addBookHandler} 
									required 
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={6} mt={4} className="pt-2">
								
								<InputLabel className={classes.formlabel}>ISBN</InputLabel>

								<Input 
									className={classes.forminput} 
									id="isbn" 
									fullWidth={true} 
									name="isbn" 
									onChange={addBookHandler} 
									required />
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<InputLabel className={classes.formlabel}>Publisher</InputLabel>
								<Input
									className={classes.forminput}
									id="publisher"
									name="publisher"
									variant="outlined"
									onChange={addBookHandler}
									fullWidth={true}
									required
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<br />
								{/* <InputLabel className={classes.formlabel}>Published Date</InputLabel> */}
								<FormControl fullWidth>
									<Datetime
										inputProps={{ placeholder: 'Published Date' }}
										value={addBook.publishDate}
										name="publishDate"
										onChange={(e) => {
											setAddBook((values) => ({
												...values,
												publishDate: e
											}));
										}}
									/>
								</FormControl>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<FormControl className={classes.formControl} style={{ minWidth: '100%' }}>
									<InputLabel className={classes.formlabel} id="demo-simple-select-label">Level</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={addBook.skillLevel}
										onChange={(e) => {
											console.log(e);
											setAddBook((values) => ({
												...values,
												skillLevel: e.target.value
											}));
										}}
									>
										<MenuItem value="beginner">Beginner</MenuItem>
										<MenuItem value="intermediate">Intermediate</MenuItem>
										<MenuItem value="advanced">Advanced</MenuItem>
									</Select>
								</FormControl>
							</GridItem>
							<InputLabel className={classes.formlabel}>Description</InputLabel>

							<TextField 
								className={classes.forminput} 
								id="description" 
								name="description" 
								onChange={addBookHandler} 
								fullWidth={true} />
							
							<GridItem>
								<input type="file" required onChange={(e) => { setResourceToUpload(e.target.files[0]) }} name="file" />

							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<Button color="primary" type="submit">
									Add Book
								</Button>
							</GridItem>
						</GridContainer>
					</form>
				</GridItem>
			</GridContainer>
		</div>
	);
}
