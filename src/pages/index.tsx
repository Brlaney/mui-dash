import * as React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
<<<<<<< HEAD
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../components/listItems';
=======
>>>>>>> 22d1fd1b23f5e506963419e63e303bdf61ebc811
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';
import Copyright from '../components/Copyright';
<<<<<<< HEAD

// A constant value thats 'type' is a number
const drawerWidth: number = 244;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
=======
import Layout from '../components/Layout';
>>>>>>> 22d1fd1b23f5e506963419e63e303bdf61ebc811

function DashboardContent() {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Navbar & Sidebar component */}
      <Layout />

      <Box
        component='main'
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />

        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>

            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, }}>
                <Chart />
              </Paper>
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, }}>
                <Deposits />
              </Paper>
            </Grid>
            
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>

          </Grid>

          {/* Copyright component */}
          <Copyright sx={{ pt: 4 }} />

        </Container>
      </Box>
    </Box>
  );
}

export default function Index() {
  return <DashboardContent />;
}
