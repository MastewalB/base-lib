/* eslint-disable */

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { InsertChart } from '@material-ui/icons';
import SectionTabs from 'views/Components/Sections/SectionTabs.js';


const MostView = (props) => (
  <Card
    sx={{ height: '100%' }}
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
            Most Viewed Post
          </Typography>
          
        </Grid>

        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <InsertChart />
          </Avatar>
        </Grid>
        <Grid item>
          <SectionTabs/>
        </Grid>
     
     
      </Grid>
    </CardContent>
  </Card>
);

export default MostView;
