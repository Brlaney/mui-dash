import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Copyright from '@/components/Copyright';
import Layout from '@/components/Layout';


function Content() {
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
            <Grid item xs={12}>
              <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', }}>
                <Typography variant='h1' component='h2' color='text.secondary'>
                  Sales reports
                </Typography>
              </Paper>
            </Grid>

            {/* Current month */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Link href='/reports/current' underline='hover'>
                  <Box sx={{ p: 2, height: '100%', width: '100%', fontSize: '24px' }}>
                    Current month
                  </Box>
                </Link>
              </Paper>
            </Grid>

            {/* Last-quarter */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Link href='/reports/last-quarter' underline='hover'>
                  <Box sx={{ p: 2, height: '100%', width: '100%', fontSize: '24px' }}>
                    Last-quarter
                  </Box>
                </Link>
              </Paper>
            </Grid>

            {/* Year-end */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Link href='/reports/year-end' underline='hover'>
                  <Box sx={{ p: 2, height: '100%', width: '100%', fontSize: '24px' }}>
                    Year-end
                  </Box>
                </Link>
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

export default function Reports() {
  return <Content />;
}
