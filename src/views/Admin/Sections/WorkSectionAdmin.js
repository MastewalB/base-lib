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
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Divider from '@material-ui/core/Divider';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js';
// import { func } from 'prop-types';

const useStyles = makeStyles(styles);

// const useStyles1 = makeStyles(styles1);
export default function WorkSection() {
	const classes = useStyles();
	const [ resourceToUpload, setResourceToUpload ] = useState(null);
	const [ addBook, setAddBook ] = useState({
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
		console.log(addBook);
		console.log(resourceToUpload)
		var token = localStorage.getItem('REACT_TOKEN_AUTH')

		var data = {
			title: addBook.title,
			author: addBook.author,
			isbn: addBook.isbn,
			publisher: addBook.publisher,
			publishDate: addBook.publishDate.toString(),
			description: addBook.description,
			skillLevel: addBook.skillLevel
		}
		var files = new FormData();
		files.append('file', resourceToUpload); 
		files.append('data', data)


		axios
			.post(`books`,files,
			{headers: {
				'Content-Type': 'multipart/form-data',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
				
			}}, 
			
			)
			.then((res) => {
				console.log(res);
				swal('Book added successfully');

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
			}).catch((e)=>{
				console.log(localStorage.getItem("REACT_TOKEN_AUTH"))
				console.log(e.response)
			})
	}

	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem cs={12} sm={12} md={8}>
					<h2 className={classes.title}>Add Courses</h2>
					<form>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12}>
								<InputLabel>Course Name</InputLabel>
								<Input fullWidth={true} id="name" />
							</GridItem>
							{/* <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Instructor Name"
                  id="instructor"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem> */}
							<CustomInput
								labelText="Course Description"
								id="description"
								formControlProps={{
									fullWidth: true,
									className: classes.textArea
								}}
								inputProps={{
									multiline: true,
									rows: 5
								}}
							/>
							{/* <GridItem xs={12} sm={12} md={12}>
                <div className={classes.root}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                </div>
              </GridItem> */}
							<GridItem xs={12} sm={12} md={4}>
								<Button color="primary">Add Course</Button>
							</GridItem>
						</GridContainer>
					</form>
				</GridItem>
			</GridContainer>
			{/* For Modify books section */}
			<Divider />
			<GridContainer justify="center">
				<GridItem cs={12} sm={12} md={8}>
					<h2 className={classes.title}>Add Book</h2>
					<form onSubmit={addBookSubmit}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								{/* <CustomInput
									labelText="Title"
									id="title"
									inputProps={{
										value: addBook.title,
										onChange: { addBookHandler }
									}}
									formControlProps={{
										fullWidth: true
									}}
								/> */}
								<InputLabel>Title</InputLabel>

								<Input id="title" fullWidth={true} name="title" onChange={addBookHandler} required />
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								{/* <CustomInput
									labelText="Author"
									id="author"
									value={addBook.author}
									formControlProps={{
										fullWidth: true
									}}
								/> */}
								<InputLabel>Author</InputLabel>

								<Input id="author" fullWidth={true} name="author" onChange={addBookHandler} required />
							</GridItem>
							<GridItem xs={12} sm={12} md={6} mt={4} className="pt-2">
								{/* <CustomInput
									labelText="ISBN"
									id="isbn"
									value={addBook.isbn}
									formControlProps={{
										fullWidth: true
									}}
								/> */}
								<InputLabel>ISBN</InputLabel>

								<Input id="isbn" fullWidth={true} name="isbn" onChange={addBookHandler} required />
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								{/* <CustomInput
									labelText="Publisher"
									id="publisher"
									onChange={addBookHandler}
									value={addBook.publisher}
									formControlProps={{
										fullWidth: true
									}}
								/> */}

								<InputLabel>Publisher</InputLabel>

								<Input
									id="publisher"
									name="publisher"
									onChange={addBookHandler}
									fullWidth={true}
									required
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<br />
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
									<InputLabel id="demo-simple-select-label">Level</InputLabel>
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
							{/* <CustomInput
								labelText="Book Description"
								id="description"
								formControlProps={{
									fullWidth: true,
									className: classes.textArea
								}}
								inputProps={{
									multiline: true,
									rows: 5
								}}
							/> */}
							<InputLabel>Description</InputLabel>

							<TextField id="description" name="description" onChange={addBookHandler} fullWidth={true} />
							{/* <GridItem xs={12} sm={12} md={12}>
                <div className={classes.root}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload
                    </Button>
                  </label>
                </div>
              </GridItem> */}
			  		<GridItem>
						  <input type="file" required onChange={(e)=>{setResourceToUpload(e.target.files[0])}}  name="file"/>

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
