// import { useState } from 'react'
// import { useRouter } from 'next/router'
import * as React from 'react'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Layout from '@/components/Layout'
import Orders from '@/components/Orders'

// DEPOSITS
// import * as React from 'react';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import Title from './Title';


// function preventDefault(event: React.MouseEvent) {
//   event.preventDefault();
// }

// export default function Deposits(props: any) {
//   return (
//     <React.Fragment {...props}>
//       <Title>{t.depositTitle}</Title>
//       <Typography component='p' variant='h4'>
//         {t.depositCost}
//       </Typography>
//       <Typography color='text.secondary' sx={{ flex: 1 }}>
//         {t.depositDate}
//       </Typography>
//       <div>
//         <Link color='primary' href='#' onClick={preventDefault}>
//           {t.depositLink}
//         </Link>
//       </div>
//     </React.Fragment>
//   );
// }

// COPYRIGHT
// import * as React from 'react';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// 
// 
// export default function Copyright(props: any) {
  // return (
    // <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {/* {t.copyright} {' © '} */}
      {/* <Link color='inherit' href='https://github.com/Brlaney/mui-dash'> */}
        {/* {t.copyrightLink} */}
      {/* </Link>{' '} */}
      {/* {new Date().getFullYear()} */}
      {/* {'.'} */}
    {/* </Typography> */}
  // );
// }
// 


// CHART
// import * as React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';


// // Generate Sales Data for chart display
// function createData(time: string, amount?: number) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// export default function Chart(props: any) {
//   const theme = useTheme();

//   return (
//     <React.Fragment {...props}>
//       <Title>{t.chartTitle}</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{ top: 16, right: 16, bottom: 0, left: 24, }}
//         >
//           <XAxis
//             dataKey='time'
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position='left'
//               style={{
//                 textAnchor: 'middle',
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               {t.chartLabel}
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type='monotone'
//             dataKey='amount'
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }


function DashboardContent() {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Navbar & Sidebar component */}
      <Layout />

      <Box
        component='main'
        sx={{
          backgroundColor: '#f5f5f5',
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
                  p: 2, display: 'flex',
                  flexDirection: 'column',
                  height: 240
                }}
              >
                {/* <Chart /> */}
              </Paper>
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2, display: 'flex',
                  flexDirection: 'column',
                  height: 240
                }}
              >
                {/* <Deposits /> */}
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
          {/* <Copyright sx={{ pt: 4 }} /> */}
        </Container>
      </Box>
    </Box>
  )
}

export default function Index() {
  return <DashboardContent />
}
