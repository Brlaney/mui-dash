import { useState } from 'react'
import { useRouter } from 'next/router'
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Layout from '@/components/Layout';

/* 
  Steps to change the locale (change between languages)

  1. Go to next.config.js and change the 'defaultLocale' property to your
  desired locale. Currently supported: ['en-US', 'es', 'fr', 'hi']

  2. Comment/un-comment your desired locale components below.

  3. Comment/un-comment the { mainListItems, secondaryListItems } 
  import in components/Layout.tsx and then test in development.

*/

import en from '@/locales/en';
import es from '@/locales/es';
import fr from '@/locales/fr';
import hi from '@/locales/hi';

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es
    | 'es' ? es : fr
    | 'fr' ? fr : hi
    | 'hi' ? hi : null;
  
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };
  
  return (
    <nav>
      
    </nav>
  )
}

module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr', 'hi'],
    defaultLocale: 'en',
  },
};

// English ~
import Chart from '@/components/en/Chart';
import Deposits from '@/components/en/Deposits';
import Orders from '@/components/en/Orders';
import Copyright from '@/components/en/Copyright';

// Spanish ~
// import Chart from '@/components/es/Chart';
// import Deposits from '@/components/es/Deposits';
// import Orders from '@/components/es/Orders';
// import Copyright from '@/components/es/Copyright';

// French ~
// import Chart from '@/components/es/Chart';
// import Deposits from '@/components/es/Deposits';
// import Orders from '@/components/es/Orders';
// import Copyright from '@/components/es/Copyright';

// Hindi ~
// import Chart from '@/components/hi/Chart';
// import Deposits from '@/components/hi/Deposits';
// import Orders from '@/components/hi/Orders';
// import Copyright from '@/components/hi/Copyright';


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
