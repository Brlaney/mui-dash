import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '@/lib/config/cache/createEmotionCache';
import theme from '@/lib/config/mui-theme/theme';
import en from '@/lib/data/seo/en';
import es from '@/lib/data/seo/es';
import fr from '@/lib/data/seo/fr';
import hi from '@/lib/data/seo/hi';
import '@/styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache, pageProps
  } = props;
  const router = useRouter();
  const { locale } = router;
  
  const t = locale === 'en'
    ? en : es === es
      ? es : fr === fr
        ? fr : hi === hi
          ? hi : en;
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1 width=device-width' />
        <meta name='keywords' content={t.keywords} />
        <link rel='icon' href='/mui-dash.svg' />
        <meta name='description' content={t.description} />
        <title>{t.title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </CacheProvider>
  )
};
