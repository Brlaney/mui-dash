import * as React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import theme from '@/lib/theme'
import '@/styles/globals.scss'

export const cache = createCache({ key: 'css', prepend: true })

const title = 'NextJs | Material-dashboard'
const keywords = 'Keywords for seo'
const description = 'Describe what this site does/provides'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='initial-scale=1 width=device-width' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </CacheProvider>
  )
}
