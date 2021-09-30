import React, { useState, useEffect } from 'react';
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
  let { lang } = useTranslation();
  let [lng, setLng] = useState(lang);
  const { t } = useTranslation('home');

  useEffect(() => {
    setLng(lang);
  }, [lng]);

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

            {/* Chart component */}
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

            {/* Deposits component */}
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

            {/* Orders component */}
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

          {/* Copyright component (footer) */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'fixed',
                  bottom: 0,
                  left: '47%'
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
