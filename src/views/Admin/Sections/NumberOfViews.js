/* eslint-disable */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import VisibilityIcon from '@material-ui/icons/Visibility';
import styles from 'assets/jss/material-kit-react/views/componentsSections/dashboardStyle';
import Countup from '../../Countup.js';

const useStyles = makeStyles(styles);
const NumberOfViews = (props) => {
  const number = 89;
  const classes = useStyles();
  return (

    <Card
      sx={{
        height: '100%',

      }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={9}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Number of views
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              24,000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              className={classes.danger}
              sx={{
                height: 56,
                width: 56
              }}
            >
              <VisibilityIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection : 'row'
          }}
        >
          <ArrowUpwardIcon
            className={classes.success}
          />
          <Typography
            className={classes.successText}

            sx={{
              mr: 1,
            }}
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

export default NumberOfViews;
