import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import theme from '@/lib/mui-theme/theme'
import en from '@/lib/data/seo/en'
import es from '@/lib/data/seo/es'
import fr from '@/lib/data/seo/fr'
import hi from '@/lib/data/seo/hi'
import '@/styles/globals.scss'

export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()
  const { locale } = router
  
  const t = locale === 'en'
    ? en : es === es
    ? es : fr === fr
    ? fr : hi === hi
    ? hi : en
  
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet='utf-8' />
        <title>{t.title}</title>
        <link rel='icon' href='/mui-dash.svg' />
        <meta name='viewport' content='initial-scale=1 width=device-width' />
        <meta name='keywords' content={t.keywords} />
        <meta name='description' content={t.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.route} data={t} />
      </ThemeProvider>
    </CacheProvider>
  )
}
