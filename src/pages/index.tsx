import * as React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from '@/components/Chart';
import Deposits from '@/components/Deposits';
import Orders from '@/components/Orders';
import Copyright from '@/components/Copyright';
import Layout from '@/components/Layout';

function DashboardContent() {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Navbar & Sidebar component */}
      <Layout />

      <Box
        component='main'
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
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
