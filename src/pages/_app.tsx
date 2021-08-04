import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '@/lib/mui-theme/theme';
import '@/styles/globals.scss';
import { title, keywords, description } from '@/lib/data/seo'
export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  let router = useRouter()

  // let check =
  //   router.locale === 'en-US'
  //   ? 'en'
  //   : router.locale === 'es'
  //   ? 'es'
  //   : router.locale === 'fr'
  //   ? 'fr'
  //   : router.locale === 'hi'
  //   ? 'hi'
  //   : ''
  
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
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
