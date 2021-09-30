import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '@/components/Chart';
import Copyright from '@/components/Copyright';
import Deposits from '@/components/Deposits';
import Layout from '@/components/Layout';
import Orders from '@/components/Orders';
import useTranslation from 'next-translate/useTranslation';

function DashboardContent() {
  const { t } = useTranslation('home');

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
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Chart content={t} />
              </Paper>
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Deposits data={t} />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Orders />
              </Paper>
            </Grid>
          </Grid>

          {/* Copyright footer */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'fixed',
                  bottom: 0,
                  left: '50%'
                }}
              >
                <Copyright data={t} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
};

export default function Index() {
  return <DashboardContent />
};
