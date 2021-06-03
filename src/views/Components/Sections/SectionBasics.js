import React from "react";
// plugin that creates slider
// import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
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
import FilterListIcon from "@material-ui/icons/FilterList";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SearchBar from "material-ui-search-bar";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
// =====================styles for the search field============================================
export default function SectionBasics() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Search Material</h3>
        </div>
        <div className={classes.search}>
          <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 1200,
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
              <FilterListIcon></FilterListIcon>
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
                    value={value}
                    onChange={handleChange}
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
  );
}
