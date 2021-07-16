/* eslint-disable */
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import NumberOfViews from './NumberOfViews';
import NumberOfDownloads from './NumberOfDownloads';
// import { white } from '@material-ui/color/white';
const DashboardComponent = () => (
  <>
    <Helmet>
      <title>Base-lib</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <NumberOfViews />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={3}
            xs={12}
          >
            <NumberOfDownloads />
          </Grid>

        </Grid>
      </Container>
    </Box>
  </>
);

export default DashboardComponent;
