import * as React from 'react'
import { useRouter } from 'next/router'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

// Import SEO data for each supported locale
import en from '@/lib/data/content/en'
import es from '@/lib/data/content/es'
import fr from '@/lib/data/content/fr'
import hi from '@/lib/data/content/hi'

import Chart from '@/components/Chart'
import Copyright from '@/components/Copyright'
import Deposits from '@/components/Deposits'
import Layout from '@/components/Layout'
import Orders from '@/components/Orders'


function DashboardContent() {
  const router = useRouter()
  const { locale } = router

  const t = locale === 'en'
    ? en : es === es
    ? es : fr === fr
    ? fr : hi === hi
    ? hi : en

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
                <Deposits content={t} />
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

          {/* Copyright component */}
          <Copyright
            content={t}
            sx={{ pt: 4 }}
          />

        </Container>
      </Box>
    </Box>
  )
}

export default function Index() {
  return <DashboardContent />
}
