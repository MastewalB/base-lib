import React, { useState, useEffect } from 'react';
// plugin that creates slider
// import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from "@material-ui/core/Checkbox";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom';
// import FormLabel from "@material-ui/core/FormLabel";
// import Switch from "@material-ui/core/Switch";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// import People from "@material-ui/icons/People";
// import Check from "@material-ui/icons/Check";
// import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
// import Paginations from "components/Pagination/Pagination.js";
// import Badge from "components/Badge/Badge.js";
// import SearchIcon from "@material-ui/icons/Search";
// import { fade } from "@material-ui/core/styles";
// import InputBase from "@material-ui/core/InputBase";
// import Popover from "@material-ui/core/Popover";
import FilterListIcon from '@material-ui/icons/FilterList';
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SearchBar from 'material-ui-search-bar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import styles1 from 'assets/jss/material-kit-react/views/componentsSections/tabsStyle.js';

// @material-ui/core components
// import Divider from "@material-ui/core/Divider";
// import PropTypes from "prop-types";
// import Box from "@material-ui/core/Box";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
// import Grid from "@material-ui/core/grid";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

// @material-ui/icons
// core components

import imgs from 'assets/img/book_default.jpg';
import axios from '../../axios.js';

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
// =====================styles for the search field============================================
export default function SectionBasics() {
	const history = useHistory();
	const classes = useStyles();
	const classes1 = useStyles1();
	const [open, setOpen] = React.useState(false);

	const [value, setValue] = React.useState('');
	const [extension, setExtension] = React.useState('');
	const [searchItem, setSearchItem] = useState('');

	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		axios.get('books').then((res) => {
			//console.log("BOOK")
			setBookList(res.data.Books);
		});
	}, [searchItem]);

	function searchFunc() {


		const filteredSearch = bookList.filter(book => {
			if (value !== '') {
				console.log(book);
				return book.title.toLowerCase().includes(searchItem.toLowerCase()) && book.skill_level.toLowerCase() === value.toLowerCase();
			} else {
				return book.title.toLowerCase().includes(searchItem.toLowerCase());
			}

		});
		setBookList(filteredSearch)


		// for (var b in bookList) {

		// 	console.log("R")
		// 	console.log(b)

		// 	if (bookList[b].title.includes(searchItem)) {
		// 		console.log(b.title)
		// 		setBookList([bookList[b]])
		// 	}
		// }




	}

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleExtension = (e) => {
		setExtension(e.target.value);
	};

	const handleClick = () => {
		setOpen(!open);
	};
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
					{/* Filter */}
					<List
						component="nav"
						aria-labelledby="nested-list-subheader"
						subheader={
							<ListSubheader component="div" id="nested-list-subheader">
								Filters
							</ListSubheader>
						}
						className={classes.root}
					>
						<ListItem button onClick={handleClick}>
							<ListItemIcon>
								<FilterListIcon />
							</ListItemIcon>
							<ListItemText primary="Choose filters" />
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItem className={classes.nested}>
									<ListItemIcon>
										<ArrowForwardIcon />
									</ListItemIcon>
									Material for:
									<FormControl component="level">
										<RadioGroup
											style={{ marginLeft: 25 }}
											row
											name="level"
											value={value}
											onChange={handleChange}
										>
											<FormControlLabel
												value="beginner"
												control={<Radio />}
												label="Beginner"
											/>

											<FormControlLabel
												value="intermediate"
												control={<Radio />}
												label="Intermediate"
											/>
											<FormControlLabel
												value="Expert"
												control={<Radio />}
												label="Expert"
											/>
										</RadioGroup>
									</FormControl>
									<ListItemText primary="" />
								</ListItem>
								<ListItem className={classes.nested}>
									<ListItemIcon>
										<ArrowForwardIcon />
									</ListItemIcon>
									Select Extension:
									<FormControl component="materialType">
										<RadioGroup
											style={{ marginLeft: 25 }}
											row
											name="materialType"
											value={extension}
											onChange={handleExtension}
										>
											<FormControlLabel
												value="course"
												control={<Radio />}
												label="Course"
											/>
											<FormControlLabel
												value="book"
												control={<Radio />}
												label="Book"
											/>
										</RadioGroup>
									</FormControl>
									<ListItemText primary="" />
								</ListItem>
							</List>
						</Collapse>
					</List>
				</div>
			</div>

			<div className={classes1.section}>
				<div className={classes1.container}>
					<div className={classes1.title}>
						<h3>Most popular...</h3>
					</div>
					<GridContainer justify="center">
						{/* First row  */}
						{console.log("RE")}
						{console.log(bookList)}
						{bookList.map((book) => {
							return (
								<GridItem xs={12} sm={12} md={4} key={book.id}>
									<Card className={classes1.root}>
										<CardActionArea>
											<CardMedia className={classes1.media} image={imgs} title={book.title} />
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													{book.title}
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													{book.description}
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button
												size="small"
												color="primary"
												onClick={(e) => {
													console.log(e + 'BOOKD');
													history.push(`/books/${book.id}`);
												}}
											>
												Open
											</Button>
										</CardActions>
									</Card>
								</GridItem>
							);
						})}
					</GridContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
