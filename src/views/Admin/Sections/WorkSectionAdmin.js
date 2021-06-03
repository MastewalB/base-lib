import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Divider from "@material-ui/core/Divider";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [level, setLevel] = React.useState(" ");
  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Modify Courses</h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Course Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
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
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
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
          <h2 className={classes.title}>Modify Book</h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Title"
                  id="title"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Author"
                  id="author"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="ISBN"
                  id="isbn"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Publisher"
                  id="publisher"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    inputProps={{ placeholder: "Datetime Picker Here" }}
                  />
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl
                  className={classes.formControl}
                  style={{ minWidth: "100%" }}
                >
                  <InputLabel id="demo-simple-select-label">Level</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={level}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Beginner</MenuItem>
                    <MenuItem value={20}>intermediate</MenuItem>
                    <MenuItem value={30}>Advanced</MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <CustomInput
                labelText="Book Description"
                id="description"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
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
                <Button color="primary">Add Book</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
