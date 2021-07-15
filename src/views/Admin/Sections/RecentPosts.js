import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import axios from '../../axios.js'
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import img from "assets/img/book_default.jpg";

const useStyles = makeStyles(styles);

export default function RecentPosts() {
  const classes = useStyles();
  const [bookList,setBookList] = useState([ { 
    id:1,
    title:"1",
    author:"1",
    isbn:"asdf",
    description:"uradfsdf"
  },
  {
    id:2,
    title:"2",
    author:"2",
    isbn:"sdhf",
    description:"iudgsfi"
  }])

  useEffect(()=>{
    axios.get('/books')
    .then(res=> res.data).then(res=>{
      setBookList(res)
    })

  },[])

  

  return (
    <div className={classes.section}>
        <div className={classes.title}>
        </div>
        <GridContainer justify="space-evenly">
          {/* First row  */}
           
          {bookList.map((book) => {
            return(
              <GridItem xs={12} sm={12} md={4} key = {book.id}>
              <Card >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title="default"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   {book.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Open
                </Button>
                
              </CardActions>
            </Card>
              </GridItem>
            )
          })
        }

        </GridContainer>
      </div>
  );
}
