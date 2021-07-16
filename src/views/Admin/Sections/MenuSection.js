import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import {AccountCircleRounded, AddBox, Help} from "@material-ui/icons";
// import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import styles from 'assets/jss/material-kit-react/views/componentsSections/dashboardStyle';

// Section Components
import WorkSection from './WorkSectionAdmin.js';
import DashboardComponent from './Dashboard.js';
import AccountProfileDetails from 'views/Admin/Sections/SectionAccountDetails.js';
const useStyles = makeStyles(styles);

const MenuSection = () => {
  const classes = useStyles();
  return (
      <div>
        <GridContainer className={classes.root}>
           
            <GridItem >
              <NavPills
                color="rose"
              
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 10 },
                }}
                
                tabs={[
                  {
                    tabButton: "Dashboard",
                    tabIcon: Dashboard,
                    
                    tabContent: (
                     <DashboardComponent/>
                    ),
                  },
                  {
                    tabButton: "Edit Profile",
                    tabIcon: AccountCircleRounded,
                    tabContent: (
                      <AccountProfileDetails  />
                    ),
                  },
                  {
                    tabButton: "Add New Resource",
                    tabIcon: AddBox,
                    tabContent: (
                     <WorkSection  />
                    ),
                  },
                  {
                    tabButton: "Help",
                    tabIcon: Help,
                    tabContent: (
                      <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                    </span>
                    ),
                  },
                 
                ]}
              />
            </GridItem>
          </GridContainer>
        
      </div>
    
  );
}
export default MenuSection;