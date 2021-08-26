// import { useState } from 'react'
import { useRouter } from 'next/router'
import * as React from 'react'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Layout from '@/components/Layout'
import Orders from '@/components/Orders'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import Title from '@/components/Title'

import en from '@/lib/data/content/en'
import es from '@/lib/data/content/es'
import fr from '@/lib/data/content/fr'
import hi from '@/lib/data/content/hi'

function createData(
  time: string,
  amount?: number
) {
  return { time, amount }
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
]

function DashboardContent() {
  const theme = useTheme()
  const router = useRouter()
  const { locale } = router

  const t = locale === 'en'
    ? en : es === es
      ? es : fr === fr
        ? fr : hi === hi
          ? hi : en

  function preventDefault(event: React.MouseEvent) {
    event.preventDefault()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Layout />
      <Box component='main' sx={{ backgroundColor: '#f5f5f5', flexGrow: 1, height: '100vh', overflow: 'auto', }}>
        <Toolbar />
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>

                {/* Charts */}
                <Container>
                  <Title>{t.chartTitle}</Title>
                  <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 16, right: 16, bottom: 0, left: 24, }} >
                      <XAxis dataKey='time' stroke={theme.palette.text.secondary} style={theme.typography.body2} />
                      <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2} >
                        <Label angle={270} position='left' style={{ textAnchor: 'middle', fill: theme.palette.text.primary, ...theme.typography.body1, }} >
                          {t.chartLabel}
                        </Label>
                      </YAxis>
                      <Line isAnimationActive={true} type='monotone' dataKey='amount' stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </Container>

              </Paper>
            </Grid>

            {/* Orders */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                <Title>{t.depositTitle}</Title>
                <Typography component='p' variant='h4'>{t.depositCost}</Typography>
                <Typography>{t.depositDate}</Typography>
                <div><Link color='primary' href='#' onClick={preventDefault}>{t.depositLink}</Link></div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>

          {/* Copyright footer */}
          <div style={{ paddingBottom: '0.85rem', bottom: '0', position: 'absolute', width: '80%' }}>
            <Typography variant='body2' color='inherit' align='center'>
              {t.copyright} {' © '}
              <Link color='inherit' href='https://github.com/Brlaney/mui-dash'>
                {t.copyrightLink}
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </div>
        </Container>
      </Box>
    </Box>
  )
}

export default function Index() {
  return <DashboardContent />
}
