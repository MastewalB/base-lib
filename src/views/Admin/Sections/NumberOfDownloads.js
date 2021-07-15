/* eslint-disable */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import FileUploadIcon from '@material-ui/icons/CloudUpload';
import  ShowChartIcon from '@material-ui/icons/ShowChart';
import Countup from '../../Countup.js';
import styles from 'assets/jss/material-kit-react/views/componentsSections/dashboardStyle';

const useStyles = makeStyles(styles);
const NumberOfDownloads = (props) => {
  const classes = useStyles();
  const number = 34;
  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: grey[200]

      }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Number Of uploaded Materials
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              160
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.successAvatar}
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
              <FileUploadIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            pt: 2
          }}
        >
          <ShowChartIcon className={classes.success} />
          <Typography
            sx={{
              color: green[600],
              mr: 1
            }}
            variant="h1"
          >
           <div className={classes.successText}>
              <Countup num={number} prefix="" suffix="%" />
            </div>
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NumberOfDownloads;
